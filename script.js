let checkbox= document.querySelector("#checkbox");
let buttonRegister= document.querySelector("#register");
let messageForm= document.querySelector("p.message");

buttonRegister.addEventListener('click',function(e) {
    if (!checkbox.checked) {
        messageForm.innerHTML="You have to accept the Term of services";
        e.preventDefault();
    }
});

if (checkbox.checked) {
    console.log("The checkbox has been checked");
}
