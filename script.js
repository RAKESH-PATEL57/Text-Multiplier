let userInput = document.querySelector('#number');
let Name = document.querySelector('#name');
let submit = document.querySelector('#submit');
let text = document.querySelector('#ourText');

submit.onclick = () =>{
let number = userInput.value;
    
text.innerHTML = '';
for(let i = 0; i < number;i++)
{ 
    
    let userText = Name.value;
    text.innerHTML = text.innerHTML + `${userText}`;
}

}


