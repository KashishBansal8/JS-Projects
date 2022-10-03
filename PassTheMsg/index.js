let msgInput = document.getElementById('msgInput');
let submitBtn = document.getElementById('submitBtn');
let getMsg = document.getElementById('getMsg');
let errMsg = document.getElementById('errMsg');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if(msgInput.value === "") {
        errMsg.classList.add('show');
        msgInput.focus();
        setTimeout(function() {
            errMsg.classList.remove('show')
        },3000)
    }
    else {
    errMsg.classList.remove('show');
    }
    getMsg.innerText = msgInput.value;
    msgInput.value = "";
})