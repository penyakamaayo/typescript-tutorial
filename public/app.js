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
import { ListTemplate } from './models/ListTemplate.js';
// form
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const toFrom = document.querySelector('#toFrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value == 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
