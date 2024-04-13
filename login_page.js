const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const ragisterLink = document.querySelector('.ragister-link');
const btnpopup= document.querySelector('.login-btn');
const cancelicon=document.querySelector('.cancel-icon');

ragisterLink.addEventListener('click',()=>{
    wrapper.classList.add('active')
})

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active')
})

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup')
})


function login(){
    const rname=document.querySelector('.r_inputmail').value;
    const rpwd=document.querySelector('.r_inputpwd').value;
    const lname=document.querySelector('.l_inputmail').value;
    const lpwd=document.querySelector('.l_inputpwd').value;

    if(rname==lname && rpwd==lpwd){
        alert("Login Successfull")
        window.location.href="./landingpage.html";
    }
    else{
        alert("Wrong Credential")
    }
}



