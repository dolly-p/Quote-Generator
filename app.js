let quotes = document.querySelector('.quote');

let persons = document.querySelector('.person');

let quoteArray = [
    {
        quote: "Get busy living or get busy dying.",
        person: "Stephen King"
    },
    {
        quote:  "You only live once, but if you do it right, once is enough.",
        person: "Mae West"
    },
    {
        quote: "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
        person: "Thomas A. Edison"
    },
    {
        quote: "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking." ,
        person: "Steve Jobs"
    },
    {
        quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
        person: "Albert Einstein"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt"
    }
]
document.querySelector('#new-quote').addEventListener('click', function (){

    let random = Math.floor(Math.random() * quoteArray.length);
    quotes.innerText = quoteArray[random].quote;
    persons.innerText = quoteArray[random].person;  
})