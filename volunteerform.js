"use strict";


const btn = document.querySelector('#volunterForm form .button button');

const formValidation = (e)=>{
    let valid = true;
    e.preventDefault();
    const inputs = document.querySelectorAll('#volunterForm form .inputs input');
    inputs.forEach((input) =>{
        if(input.value.trim() === ""){
            input.style.border ='1px solid #ff0000';
            valid = false;
        }else{
            input.style.border = '1px solid rgb(3, 200, 6)';
        }
    })
    if(valid){
        const form = document.querySelector('#volunterForm form');
        form.submit();
        alert('Thank you for submitting the form');
    }

}

btn.addEventListener('click',formValidation);
btn.addEventListener('submit',formValidation);
