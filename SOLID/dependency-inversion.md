# DIP - Dependency Inversion

- Código de alto nível (negócio) depende de abstrações.
- Fluxo certo:

```
    OrderService
        ↓
    IPaymentGateway
        ↑
    StripePaymentGateway
```

em vez de:

```
    OrderService
        ↓
    StripePaymentGateway
```

# Dependency Injection

- mecanismo/técnica para injetar dependencias em uma classe. Pode ser usado para implementar o Dependency Inversion.
- Remove da classe a responsabilidade de contruir suas dependencias

```csharp
    public interface INotificationSender {
        Task SendAsync(Notification notification)
    }

```

regra:

```csharp
    public class FundAplicationService {
        private readonly INotificationService _ notification;

        public FundAplicationService(INotificationSender notification) {
            _notification = notification;
        }
    }
```

infraestrutura:

```csharp
    public class SmsNotification : INotificationSender {
        public Task SendAsync(Notification notification) {

        }
    }
```

- Você pode usar DI e continuar violando DIP.

```csharp
    public class FundService
    {
        private readonly AmazonSimpleNotificationServiceClient _sns;

        public FundService(
            AmazonSimpleNotificationServiceClient sns)
        {
            _sns = sns;
        }
    }
```
