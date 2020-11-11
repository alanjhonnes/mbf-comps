export class CurrencyUtil {
  static formatCurrency(value: any): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(Number(value));
  }
}
