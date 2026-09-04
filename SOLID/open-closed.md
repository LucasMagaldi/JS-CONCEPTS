# Open/closed principle

- O software deve ser: "aberto para extensões e fechado para mudanças"
- Significa que evitar adicionar uma nova variação, obrigue a alterar estruturas centrais repetidamente.

```csharp
    if (type == FundType.Fixed)
    {
    }
    else if (type == FundType.Variable)
    {
    }
    else if (type == FundType.Private)
    {
    }
```

- cada novo tipo modifica esse código
