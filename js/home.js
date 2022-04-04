function response() {

    let response = '';
    if(document.getElementById('question').value) response = 'Thanks for asking!';
    document.getElementById('response').innerHTML = response;
}

function bg() {

    const c1 = ['#140D4F', '#A657AE', '#9A4C95', '#2E294E', '#885A5A', '#A594F9', '#003B36', '#1F487E', '#69140E', '#BA1B1D'];
    const c2 = ['#1C0B19', '#9D75CB', '#4D2D52', '#011638', '#353A47', '#7371FC', '#012622', '#1D3461', '#3C1518', '#5B2333'];

    let index = Math.floor(Math.random()*10);

    document.body.style.backgroundImage = 'linear-gradient(170deg,' + c1[index] + ',' + c2[index] + ')';
}

function undo() {

    document.body.style.backgroundImage = 'linear-gradient(170deg, #202020, #171717)';
}

//found at https://codeconia.com/2021/05/08/how-to-get-youtube-subscriber-views-and-video-counts-using-javascript/

const apiKey = 'AIzaSyCtqQifBNCY57ZayWBMllfIqrsF7NWfMu8';
const Userid = 'UCFvBsSUUa_4GT44w_67XD6Q';
const subscriberCount= document.getElementById('subscribers');
const viewCount = document.getElementById('views');
const videoCount = document.getElementById('videos');

let getData = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${apiKey}`)
    .then(response => {
        return response.json()
    }) .catch(response => {console.log('Promise rejected');})
    .then(data => {
        console.log(data);
        subscriberCount.innerHTML = 'Subscribers: ' + data["items"][0].statistics.subscriberCount;
        viewCount.innerHTML = 'Views: ' + data["items"][0].statistics.viewCount;
        videoCount.innerHTML = 'Videos: ' + data["items"][0].statistics.videoCount;
        
    }) .catch(data => {console.log('Promise rejected');})
}
getData();