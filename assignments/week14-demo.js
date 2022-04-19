// const myCar = new Object();
// myCar.color = 'black';
// myCar.make = 'Subaru';
// myCar.model = 'Ascent';
// myCar.year = '2020';

// console.log(myCar.make);

// const mySecondCar = {
//     color: 'white',
//     make: 'Mitsubishi',
//     model: 'Lancer Evolution 8',
//     year: '2003'
// }

// console.log(mySecondCar.make);
// console.log(mySecondCar['model']);

const superheroes = {
    'squadName': 'Super hero squad',
    'homeTown': 'Metro City',
    'formed': 2016,
    'secretBase': 'Super tower',
    'active': true,
    'members': [
        {
            'name': 'Molecule Man',
            'age': 29,
            'secretIdentity': 'Dan Jukes',
            'powers': [
                'Radiation resistance',
                'Turning tiny',
                'Radiation blast'
            ]
        },
        {
            'name': 'Madame Uppercut',
            'age': 39,
            'secretIdentity': 'Jane Wilson',
            'powers': [
                'Million tonne punch',
                'Damage resistance',
                'Superhuman reflexes'
            ]
        },
        {
            'name': 'Eternal Flame',
            'age': 1000000,
            'secretIdentity': 'Unknown',
            'powers': [
                'Immortality',
                'Heat Immunity',
                'Inferno',
                'Teleportation',
                'Interdimensional travel'
            ]
        }
    ]
}

function addHero(obj) {
    const name = 'Batman';
    const age = '45';
    const secretID = 'Bruce Wayne'
    const powers = ['technology','money','armor']

    const newHero = [name, age, secretID, powers];

    obj.members.push( {
        'name': newHero[0],
        'age': newHero[1],
        'secretIdentity': newHero[2],
        'powers': newHero[3]
    })
}

function populateHeader(obj) {

    const header = document.querySelector('header');
    const name = document.createElement('h1');
    const info = document.createElement('p');
    
    name.textContent = obj.squadName;
    header.appendChild(name);

    // info.textContent = 'Hometown: ' + json.homeTown + ' / Formed: ' + json.formed;
    // Can use the backtick to concatonate strings and ${} to use variables
    info.textContent = `Hometown: ${obj.homeTown} / Formed: ${obj.formed}`;
    header.appendChild(info);
}

function populateHeroes(obj) {

    const section = document.querySelector('section');
    const heroes = obj['members'];
  
    for (const hero of heroes) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        myPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        myPara2.textContent = `Age: ${hero.age}`;
        myPara3.textContent = 'Superpowers:';

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const listItem = document.createElement('li');
            listItem.textContent = power;
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);

        section.appendChild(myArticle);
    }
  }

populateHeader(superheroes);
populateHeroes(superheroes);
addHero(superheroes);

console.log(superheroes);