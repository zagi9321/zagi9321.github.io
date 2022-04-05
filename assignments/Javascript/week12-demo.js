const quoteButton = document.getElementById('js-new-quote');
quoteButton.addEventListener('click', getQuote);

function getQuote() {
    console.log('yop');

    const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json';
    try {
        let response = await fetch(endpoint);
        if(!response.ok){}
            // throw Error(response.)
        const json = await response.json();
        console.log(json);
    } catch(err) {
        console.log(err);
        alert('Failed');
    }
    console.log(getResponse(endpoint));
}

function displayQuote(quote) {
    const quoteText = documet.getElementById('js-qutoe-text');
    quoteText.textContent=quote;
}