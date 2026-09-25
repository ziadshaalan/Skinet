namespace Core.Interfaces
{
    public interface IDtoConvertible
    {
        // Marker interface: contains no members.
        // Its purpose is to "tag" entities as DTO-convertible so they can satisfy
        // generic constraints such as: where T : BaseEntity, IDtoConvertible.
        // It does not perform the conversion itself; ToDto() does that.
    }
}
