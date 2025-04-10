// declaring variables and also getting the elements from html 

let btn = document.querySelector('#btn');
let quote = document.querySelector('.quote');
let person = document.querySelector('.quotor');

const quotes=[
    { quote: " The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on",
       person:" Barack Obama"
    },{
        quote:"The secret of your future is hidden in your daily routine.", 
        person:"Mike Murdock"
    },{
        quote:"Destiny is no matter of chance. It is a matter of choice. It is not a thing to be waited for, it is a thing to be achieved.",
        person:"William Jennings Bryan"
    },{
        quote:" It is not in the stars to hold our destiny but in ourselves.",
        person:" William Shakespeare"
    }];
    // what is data structure of quotes 

btn.addEventListener('click', function(){

    let random= Math.floor(Math.random() *quotes.length);

    quote.innerText = quotes[random].quote;   

    person.innerText = quotes[random].person;
})