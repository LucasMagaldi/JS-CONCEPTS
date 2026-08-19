- Não significa que a classe não tenha responsabilidades,
  mas sim que ela deve ter apenas uma responsabilidade.
  A responsabilidade de uma classe é definida como um motivo para mudar.
  Se uma classe tem mais de uma responsabilidade,
  ela terá mais de um motivo para mudar,
  o que viola o princípio da responsabilidade única.

```csharp
    public class ProcessFundService {
        private readonly IFoundRepository = _repository;
        private readonly ICalculator = _calculator;
        private readonly INotificationSender = _notification;

        public async Task ExecuteAsync(Guid foundId) {
            var fund =
                await _repository.GetAsync(fundId);

            _calculator.Calculate(fund);

            await _repository.SaveAsync(fund);

            await _notification.SendAsync(
                new FundProcessedNotification(fund.Id));
        }
    }
```

- O service orquestra o processamento do fundo, mas nao implementa cada detalhe.

- Agora considere:

```csharp
    public class FundService
    {
        public decimal CalculateYield(...)
        {
            // fórmulas financeiras
        }

        public async Task Save(...)
        {
            // SQL
        }

        public byte[] GeneratePdf(...)
        {
            // PDF
        }

        public async Task SendEmail(...)
        {
            // SMTP
        }
    }
```

- temos vários motivos de mudança. Mudar qualquer um desses métodos, mudará tambem a classe principal.
