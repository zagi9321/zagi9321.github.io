const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

function poundsToStone(pounds) {
  return pounds / 14.0; }

function fahrenheitToCentigrade(temp) {
  return (temp - 32.0) * (5.0 / 9.0); }

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;
  const xItem = randomValueFromArray(insertX); 
  const yItem = randomValueFromArray(insertY); 
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);

  if(customName.value !== '')
    newStory = newStory.replace('Bob', customName.value);

  if(document.getElementById("uk").checked) {
    const weight = (Math.round(poundsToStone(300))).toString() + ' stone';
    const temperature =  (Math.round(fahrenheitToCentigrade(94))).toString() + ' centigrade';

    newStory = newStory.replace('300 pounds', weight).replace('94 fahrenheit', temperature);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
