namespace Core.Exceptions;

// Thrown when the cart can't be paid as it is (e.g. not enough stock); the API turns it into a 400 with this message
public class CartValidationException(string message) : Exception(message);