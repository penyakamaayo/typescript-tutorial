import { HasFormatter } from '../interfaces/HasFormatter.js'
export class Invoice implements HasFormatter {
  // readonly client: string
  // private details: string
  // amount: number

  // constructor(clientP: string, detailsP: string, amountP: number) {
  //   this.client = clientP
  //   this.details = detailsP
  //   this.amount = amountP
  // }

  constructor(
    readonly client: string,
    private details: string,
    public amount: number,
  ){}

  format() {
    return `${this.client} owes ${this.amount} pesos for ${this.details}`
  }
}
