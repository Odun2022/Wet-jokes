// let count = 0;
// count = document.querySelector('#head').innerHTML = "Wet Joke " + count++;
// console.log(count);


// let centered_text = document.getElementById("centered_text");
// let btn = document.getElementById("btn");

// btn.addEventListener("")


const jokeEl = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

// Add Eventlistener to the button
get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    // Call the Icanhazdad API
    const jokeRes = await fetch('https://icanhazdadjoke.com/', 
    {
        headers: {
            accept: 'application/json'
        }
    });

    const joke = await jokeRes.json();

    console.log(joke);

    // Set Random 
    jokeEl.innerHTML = joke.joke;
}










    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   