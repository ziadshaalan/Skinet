using API.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System.Collections.Concurrent;
// Scalability: The current dictionary works with a single server because connection data is stored in that server's memory. For multiple servers, use a shared store such as Redis so all servers can access the Email → ConnectionId mapping regardless of which server receives the request.

namespace API.SignalR
{
    [Authorize]
    public class NotificationHub : Hub
    {
        // One shared dictionary: Email → SignalR ConnectionId // private = only this class can directly access it // static = shared by all NotificationHub instances // readonly = the dictionary reference cannot be replaced
        private static readonly ConcurrentDictionary<string, string> UserConnections = new();


        // Runs automatically when a client connects to SignalR
        public override Task OnConnectedAsync()
        {
            var email = Context.User?.GetEmail();   // Get the authenticated user's email from their claims

            if (!string.IsNullOrEmpty(email))
            {
                UserConnections[email] = Context.ConnectionId;  // Save: user's email → their current SignalR ConnectionId
            }

            return base.OnConnectedAsync();
        }


        // Runs automatically when a client disconnects
        public override Task OnDisconnectedAsync(Exception? exception)
        {
            var email = Context.User?.GetEmail();

            if (!string.IsNullOrEmpty(email))
            {
                UserConnections.TryRemove(email, out _);

            }
            return base.OnDisconnectedAsync(exception);

        }


        // Allows other code to get the current ConnectionId using the user's email
        public static string? GetConnectionIdByEmail(string email)
        {
            UserConnections.TryGetValue(email, out var connectionId);   // Look up the email in the dictionary and return its ConnectionId

            return connectionId;
        }
    }
}
