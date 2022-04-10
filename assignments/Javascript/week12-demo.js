const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getQuote);

async function getQuote() {

    console.log("quote button was clicked");
    const endpoint = 'http://quotes.stormconsultancy.co.uk/random.json';

    try {
      const response = await fetch(endpoint);
      if (!response.ok)
        throw Error(response.statusText)
      const json = await response.json();
      console.log(json);
      displayQuote(json.quote);
    } catch(err) {
      console.log(err)
      alert('Failed');
    }
  }

function displayQuote(quote) { 
    let words = sentenceToArray(quote);
    let sentence = jumble(words, bag(words.length));

    const quoteText = document.querySelector('#js-quote-text');
    const img = ['AE.jpeg', 'BF.png', 'BG.jpeg', 'KM.png', 'MG.jpeg', 'ST.png']

    quoteText.style.backgroundImage = "url('img/" + img[Math.floor(Math.random() * 6)] + "')";
    quoteText.textContent = sentence; 
}

function sentenceToArray(str) {

    let curr;
    let arr = [];
    let word = '';

    for(let i = 0; i < str.length; i++) {

        curr = str[i];

        if(!isAlpha(curr)) {
            if(word.length > 0)
                arr.push(word.toLowerCase());
            word = '';
        }
        else
            word += curr;
    }
    return arr;
}

function isAlpha(char) {
    return (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || char == "'"; 
}

function bag(n) {

    let bag = [], order = [];
    size = n;
    
    for(let i = 0; i < n; i++)
        bag[i] = i;

    for(let i = 0; i < n; i++) {
        rand = Math.floor(Math.random() * size);
        order[i] = bag[rand];
        bag.splice(rand, 1);
        size--;
    }

    return order;
}

function jumble(words, order) {

    let jumble = '';

    for(let i = 0; i < words.length; i++) {
        jumble += words[order[i]];
        jumble += ' ';
    }

    return jumble;
}