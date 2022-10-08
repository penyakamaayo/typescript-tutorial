export class Invoice {
    // readonly client: string
    // private details: string
    // amount: number
    // constructor(clientP: string, detailsP: string, amountP: number) {
    //   this.client = clientP
    //   this.details = detailsP
    //   this.amount = amountP
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes ${this.amount} pesos for ${this.details}`;
    }
}
