# Interface Segregation

- Evite interfaces gordas

```csharp
    public interface IFundService
    {
        Task Create();
        Task Update();
        Task Delete();
        Task GenerateReport();
        Task SendEmail();
        Task ImportExcel();
    }
```

- segregando

```csharp
    public interface IFoundRepository {
        Task Create(Fund fund);
        Task Update(Fund fund);
        Task Delete(Fund fund);
    }
    public interface IFundReportGenerator
    {
        Task<Report> GenerateReport(Guid fundId);
    }

    public interface IFundNotifier
    {
        Task SendEmail(Guid fundId, string recipient);
    }

    public interface IFundImporter
    {
        Task ImportExcel(Stream file);
    }

```

- clientes só dependem do que usam

```csharp
    public class FundApplicationService
    {
        private readonly IFundRepository _repository;
        private readonly IFundReportGenerator _reportGenerator;
        private readonly IFundNotifier _notifier;
        private readonly IFundImporter _importer;

        public FundApplicationService(
            IFundRepository repository,
            IFundReportGenerator reportGenerator,
            IFundNotifier notifier,
            IFundImporter importer)
        {
            _repository = repository;
            _reportGenerator = reportGenerator;
            _notifier = notifier;
            _importer = importer;
        }
    }
```
