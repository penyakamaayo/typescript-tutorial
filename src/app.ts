// interfaces
interface IsPerson {
  name: string,
  age: number,
  speak(words: string): void,
  spend(money: number): number,
}

const me: IsPerson = {
  name: 'Neil',
  age: 25,
  speak(words: string): void {
    console.log(words)
  },
  spend(amount: number) {
    console.log('I spent', amount)
    return amount
  }
}

const greetPerson = (person: IsPerson) => {
  console.log('hello', person.name)
}

greetPerson(me)

console.log(me)

import { Invoice } from './models/Invoice.js'
import { Payment } from './models/Payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'
import { ListTemplate } from './models/ListTemplate.js'

// form
const form = document.querySelector('.new-item-form') as HTMLFormElement

// inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#toFrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

// list template instance
const ul = document.querySelector('.item-list') as HTMLUListElement
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let doc: HasFormatter

  if(type.value == 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  }
  else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  list.render(doc, type.value, 'end')
})
