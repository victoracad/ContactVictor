const msgerro1 = document.getElementById('erro1')
const msgerro2 = document.getElementById('erro2')
const msgerro3 = document.getElementById('erro3')
const msgerro4 = document.getElementById('erro4')
const msgerro5 = document.getElementById('erro5')
const msgerro6 = document.getElementById('erro6')

const backRadio = document.getElementsByClassName('radio-container')

//conteudo que será adicionado
const erromsg = document.createElement('p')
erromsg.textContent = 'This field is required'

const erromsg2 = document.createElement('p')
erromsg2.textContent = 'This field is required'

const erromsg3 = document.createElement('p')
erromsg3.textContent = 'This field is required'

const erromsg31 = document.createElement('p')
erromsg31.textContent = 'Please enter a valid email address'

const erromsg4 = document.createElement('p')
erromsg4.textContent = 'This field is required'

const erromsg5 = document.createElement('p')
erromsg5.textContent = 'To submit this form, please consent to being contacted'

const erromsg6 = document.createElement('p')
erromsg6.textContent = 'Please select a query type'

let txtName = document.getElementById('txtfName')
let txtLastName = document.getElementById('txtlName')
let txtEmail = document.getElementById('txtEmail')
let txtMesage = document.getElementById('txtMesage')
let txtCheck = document.getElementById('checkbox1')
let txtRadio = document.getElementsByName('query')

let msgAtiv = false
let msgAtiv2 = false
let msgAtiv3 = false
let msgAtiv4 = false
let msgAtiv5 = false
let msgAtiv6 = false


fChoice = document.getElementsByName('query')
checkBox = document.getElementById('checkbox1')



function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function verificar(){
    if(txtName.value.length == 0){
        txtName.style.border = '1px solid red'
        msgerro1.appendChild(erromsg);
        msgAtiv = true
    }
    if(txtLastName.value.length == 0){
        txtLastName.style.border = '1px solid red'
        msgerro2.appendChild(erromsg2)
        msgAtiv2 = true
    }
    if(txtEmail.value.length == 0){
        txtEmail.style.border = '1px solid red'
        msgerro3.appendChild(erromsg3)
        msgAtiv3 = true
    }else if (!validarEmail(txtEmail.value)) {
        txtEmail.style.border = '1px solid red'
        msgerro3.appendChild(erromsg31)
        msgAtiv3 = true
    }
    
    if(txtMesage.value.length == 0){
        txtMesage.style.border = '1px solid red'
        msgerro4.appendChild(erromsg4)
        msgAtiv4 = true
    }
    if(!checkBox.checked){
        msgerro5.appendChild(erromsg5)
        msgAtiv5 = true
    }
    if(!txtRadio[0].checked && !txtRadio[1].checked){
        msgerro6.appendChild(erromsg6)
        msgAtiv6 = true
    }
    if((txtRadio[0].checked || txtRadio[1].checked) && checkBox.checked && txtMesage.value.length > 0 && txtEmail.value.length > 0 && validarEmail(txtEmail.value) && txtLastName.value.length > 0 && txtName.value.length > 0){
        const popup = document.getElementById('popup')
        popup.style.display = 'flex';
    }
    
}






function clearErroName(){
    if(msgAtiv === true){
        const lastParagraph = msgerro1.lastElementChild;
    
        if (lastParagraph) {
            
            msgerro1.removeChild(lastParagraph);
            txtName.style.border = '1px solid hsl(186, 15%, 59%)'
        }
    }
}

function clearErroLastName(){
    if(msgAtiv2 === true){
        const lastParagraph2 = msgerro2.lastElementChild;
    
        if (lastParagraph2) {
            
            msgerro2.removeChild(lastParagraph2);
            txtLastName.style.border = '1px solid hsl(186, 15%, 59%)'
        }
    }
}

function clearErroEmail(){
    if(msgAtiv3 === true){
        const lastParagraph3 = msgerro3.lastElementChild;
    
        if (lastParagraph3) {
            
            msgerro3.removeChild(lastParagraph3);
            txtEmail.style.border = '1px solid hsl(186, 15%, 59%)'
        }
    }
}

function clearErroMesage(){
    if(msgAtiv4 === true){
        const lastParagraph4 = msgerro4.lastElementChild;
    
        if (lastParagraph4) {
            
            msgerro4.removeChild(lastParagraph4);
            txtMesage.style.border = '1px solid hsl(186, 15%, 59%)'
        }
    }
}

function clearErroCheck(){
    if(msgAtiv5 === true){
        const lastParagraph5 = msgerro5.lastElementChild;
    
        if (lastParagraph5) {
            
            msgerro5.removeChild(lastParagraph5);
        }
    }
}




function checkBack(inputId){
    if(txtRadio[0].checked){
        backRadio[0].style.background = 'hsl(148, 38%, 91%)'
        backRadio[1].style.background = 'white'
    }
    if(txtRadio[1].checked){
        backRadio[1].style.background = 'hsl(148, 38%, 91%)'
        backRadio[0].style.background = 'white'
    }

    if(msgAtiv5 === true){
        const lastParagraph6 = msgerro6.lastElementChild;
    
        if (lastParagraph6) {
            
            msgerro6.removeChild(lastParagraph6);
        }
    }


        const inputElement = document.getElementById(inputId);
        inputElement.click();

}

function closeConfirmMsg(){
    document.getElementById('popup').style.display = 'none';
}





