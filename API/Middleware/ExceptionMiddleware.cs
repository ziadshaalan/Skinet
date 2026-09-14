using API.Errors;
using System.Net;
using System.Text.Json;

namespace API.Middleware

// It's a piece of middleware — one link in ASP.NET Core's request pipeline. Every request passes through a chain of components (routing → CORS → auth → your controller → ...), and each one can act before/after the next. This one wraps everything after it in a try/catch:
{
    public class ExceptionMiddleware(IHostEnvironment env, RequestDelegate next)
    {
        public async Task InvokeAsync(HttpContext context)
        {
			try
			{
				await next(context);    // continue down the pipeline (routing, controller, etc.)
            }
			catch (Exception ex)
			{
				await HandleExceptionAsync(context, ex, env);   // catch ANY unhandled exception, anywhere downstream
            }
        }

        private static Task HandleExceptionAsync(HttpContext context, Exception ex, IHostEnvironment env)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

            var response = env.IsDevelopment()
      ? new ApiErrorResponse(context.Response.StatusCode, ex.InnerException?.Message ?? ex.Message, ex.StackTrace)
      : new ApiErrorResponse(context.Response.StatusCode, ex.InnerException?.Message ?? ex.Message, "Internal server error");
            // In Development: return detailed error; outside Development: hide internal details for security.


            var options = new JsonSerializerOptions { PropertyNamingPolicy = JsonNamingPolicy.CamelCase };

            var json = JsonSerializer.Serialize(response,  options);

            return context.Response.WriteAsync(json);
        }       
    }
}
