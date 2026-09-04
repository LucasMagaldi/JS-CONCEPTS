# Liskov

- O subtipo deve respeitar o contrato do tipo base

```csharp
    public interface IAccount
    {
        void Withdraw(decimal value);
    }

    public class BlockedAccount : IAccount
    {
        public void Withdraw(decimal value)
        {
            throw new NotSupportedException();
        }
    }
```
