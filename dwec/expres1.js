window.addEventListener("DOMContentLoaded",()=>{
    let eles = document.querySelector('#eles').value;
    
    var mipatron = /^[aeiou]{2,5}$/i;
    console.log(mipatron.test(eles.value))

    if (mipatron.test(eles)) {
        document.querySelector('#eles ~ span').innerText="OK";
        document.querySelector('#eles ~ span').classList.add("error")
    }else{
        document.querySelector('#eles ~ span').classList.remove("noerror");
    }

    document.querySelector('#enviar2').addEventListener("click", ()=>{
        console.log(document.querySelector('#cod').checkValidity());
    });
});