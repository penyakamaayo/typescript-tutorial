// const anchor = document.querySelector('a')!

// console.log(anchor.href)
import { Invoice } from './models/Invoice.js'

const invoice1 = new Invoice('Joser', 'Light work', 1000)
const invoice2 = new Invoice('Mimi', 'Test Work', 5000)

let invoices: Invoice[] = []
invoices.push(invoice1)
invoices.push(invoice2)

invoices.forEach(invoice => {
  console.log(invoice.client, invoice.amount, invoice.format())
})

const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// const invoice1 = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
// console.log(invoice1)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  console.log(
    type.value,
    toFrom.value,
    details.value,
    amount.valueAsNumber
    )
  })
