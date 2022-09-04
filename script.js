
// function myFunction() {
//     document.getElementById('btn').innerHTML = 
// }


console.log('Hello');
// console.log(fetch('https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist&type=single'));

fetch('https://sv443.net/jokeapi/v2/joke/Miscellaneous,Dark?blacklistFlags=nsfw,religious,racist,sexist&type=single');
// .then(res => console.log())


//JS Callbacks

// const userLeft = false;
// const userWatchingMeme = true;

/*
function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        }) 
    } else if (userWatchingMeme) {
        errorCallback({
            name: 'User Watching Meme',
            message: 'WebDevSimplified < Meme'
        })
    } else {
        callback('Thumbs up and Subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
})
*/


//JS Promises
/*
const userLeft = false;
const userWatchingMeme = false;

function watchTutorialPromise() {
    return new Promise ((resolve, reject) => {
         if (userLeft) {
        reject({
            name: 'User Left',
            message: ':('
            }) 
        } else if (userWatchingMeme) {
        reject({
            name: 'User Watching Meme',
            message: 'WebDevSimplified < Meme'
            })
        } else {
        resolve('Thumbs up and Subscribe')
        }
    })
   
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
})
*/

/*
const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
})
const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
})
const recordVideoThree = new Promise((resolve,reject) => {
    resolve('Video 3 Recorded')
})
*/

// When you want all of the code to be run, use Promise.all and the part of the code that you want to run.
/*
Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((messages) => {
    console.log(messages)
})
*/

// Use Promise.race when you only want one part of the JS promises to run.
/*
Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then((message) => {
    console.log(message)
})
*/

// JS Async Await
function makeRequest(location) {
    return new Promise((resolve, reject) => {
        console.log(`Making Request to ${location}`)
        if (location === 'Google') {
            resolve('Google says hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}

function processRequest(response) {
    return new Promise((resolve, reject) => {
        console.log('Processing response')
        resolve(`Extra Information + ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('Response Received')
    return processRequest(response)
}).then(processedResponse => {
    console.log(processedResponse)
}).catch(err => {
    console.log(err)
})

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   