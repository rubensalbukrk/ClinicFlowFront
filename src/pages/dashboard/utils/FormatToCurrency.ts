function FormatValueCurrency(value: number) {
    const ConvertedValue = new Intl.NumberFormat("PT-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
    return ConvertedValue;
  }

  export {FormatValueCurrency}