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
    text.innerHTML = text.innerHTML + ' ' + `${userText}`;
}

let copyBtn = document.querySelector('#copyIcon');
copyBtn.addEventListener("click", function()
{
    let copyContent = document.querySelector('#ourText');
    let vl = copyContent.innerHTML;
    
    vl.select ();
    document.execCommand('copy');
    console.log('click');
});
// copyBtn.onclick = () =>
// {

//     let copyContent = document.querySelector('#ourText');
    
//     copyContent.select ();
//     document.execCommand('copy');
//     console.log('click');
// }

}



