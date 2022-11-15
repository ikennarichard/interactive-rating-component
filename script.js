
const main = document.querySelector('main');

const submitBtn = document.querySelector('.submit');

const ratingBtn = document.querySelectorAll('span');




let userRating;


ratingBtn.forEach((button, index, array) => {
    //loop
   
    button.addEventListener('click', (e) => {

        // loop
        for (let i of array){
            i.style.backgroundColor = '';
            i.style.color = '';
        }

        button.style.backgroundColor = 'var(--light-grey)';

        button.style.color = 'var(--white)';

        userRating = e.target.innerText;
    })

});


//display thank you page 
submitBtn.addEventListener('click', dispayThankYouMessage);


function dispayThankYouMessage () {

const markup = 

`<div class="thankyou-image"></div>

<p class="ratings">You selected ${userRating} out 5 stars</p>

<h1 class="thankyou-heading">Thank you!</h1>

<p class="thankyou-text">We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!</p>`;

main.innerHTML = markup;

};