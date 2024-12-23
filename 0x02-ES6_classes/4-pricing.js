import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') throw new TypeError('Amount must be a number');
    if (!(currency instanceof Currency)) throw new TypeError('currency must be Currency');
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(x) {
    if (typeof x !== 'number') throw new TypeError('Amount must be a number');
    this._amount = x;
  }

  get currency() {
    return this._currency;
  }

  set currency(x) {
    if (!(x instanceof Currency)) throw new TypeError('currency must be Currency');
    this._currency = x;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
