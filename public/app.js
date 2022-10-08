const me = {
    name: 'Neil',
    age: 25,
    speak(words) {
        console.log(words);
    },
    spend(amount) {
        console.log('I spent', amount);
        return amount;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
import { Invoice } from './models/Invoice.js';
import { Payment } from './models/Payment.js';
let doc1;
let doc2;
doc1 = new Invoice('Seth', 'web work', 500);
doc2 = new Payment('Josh', 'wood work', 1000);
let docs = [];
docs.push(doc1);
docs.push(doc2);
console.log(docs);
// const invoice1 = new Invoice('Joser', 'Light work', 1000)
// const invoice2 = new Invoice('Mimi', 'Test Work', 5000)
// let invoices: Invoice[] = []
// invoices.push(invoice1)
// invoices.push(invoice2)
// invoices.forEach(invoice => {
//   console.log(invoice.client, invoice.amount, invoice.format())
// })
const form = document.querySelector('.new-item-form');
// console.log(form.children)
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// const invoice1 = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
// console.log(invoice1)
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
