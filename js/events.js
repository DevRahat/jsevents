console.log("JS DOM EVENTS");

//option 2

function makeRed(){
    document.body.style.background='red';
}
//option 3
const makeBlueButton=document.getElementById('make-blue');
        makeBlueButton.onclick= makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor='blue';
        }

//option 3 another way

const makePurple=document.getElementById('make-purple');
        makePurple.onclick=function purple(){
            document.body.style.backgroundColor='purple';
        }


// Option 4 
const pinkButton=document.getElementById('make-pink');
        pinkButton.addEventListener('click',makPink);
        function makPink(){
            document.body.style.backgroundColor='pink';
        }



        const makeGreenButton=document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor='green';
        })
 