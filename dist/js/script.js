const allInputs = document.querySelectorAll(`input`);
const select_firstName = document.querySelector(`#firstName`);
const select_lastName = document.querySelector(`#lastName`);
const select_email = document.querySelector(`#email`);
const select_phone = document.querySelector(`#phone`);
const select_password = document.querySelector(`#password`);
const displayPass = document.querySelector(`#displayPass`)
const displayConfPass = document.querySelector(`#displayConfPass`)
const select_confPass = document.querySelector(`#confPass`);
const pass_validation_1 = document.querySelector(`.invalid1`)
const pass_validation_2 = document.querySelector(`.invalid2`)
const pass_validation_3 = document.querySelector(`.invalid3`)
const pass_validation_4 = document.querySelector(`.invalid4`)
const pass_validation_5 = document.querySelector(`.invalid5`)
const pass_validation_6 = document.querySelector(`.invalid6`)
const pass_validation_7 = document.querySelector(`.invalid7`)
const pass_validation_8 = document.querySelector(`.invalid8`)
const pass_validation_9 = document.querySelector(`.invalid9`)
const submitBtn = document.querySelector(`.sendBtn`)

const regexExp = {
    firstName: /^[a-zA-ZÂ-ÿ\s]{3,20}$/,
    lastName: /^[a-zA-ZÂ-ÿ\sÁ]{3,20}$/,
    email:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[0-9]{2,10}$/,
    password: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/,
}

fieldValidation = (regexExp,input,field) => {
    if (input.value === ``) {
        document.querySelector(`#label__${field}`).className = ``;
        document.querySelector(`#${field}`).className = ``;
        document.querySelector(`#alert__${field}`).classList.add(`deleteMessage`);
    }else if (regexExp.test(input.value)) {
        document.querySelector(`#label__${field}`).className = `succes`;
        document.querySelector(`#${field}`).className = `borderSucces`;
        document.querySelector(`#alert__${field}`).classList.add(`deleteMessage`);
    }else {
        document.querySelector(`#label__${field}`).className = `error`;
        document.querySelector(`#${field}`).className = `borderError`;
        document.querySelector(`#alert__${field}`).classList.remove(`deleteMessage`);
    }
}

select_firstName.addEventListener('keyup', () =>{
    fieldValidation(regexExp.firstName, firstName,`firstName`);
})
select_lastName.addEventListener('keyup', () =>{
    fieldValidation(regexExp.lastName, lastName,`lastName`);
})
select_email.addEventListener('keyup', () =>{
    fieldValidation(regexExp.email, email,`email`);
})
select_phone.addEventListener('keyup', () =>{
    fieldValidation(regexExp.phone, phone,`phone`);
})
select_password.addEventListener('keyup', () => {
    if (select_password.value.length < 12) {
        pass_validation_1.className = `error`;
    } else {
        pass_validation_1.className = `succes`;
    }
    if (/[A-Z]/.test(select_password.value)) {
        pass_validation_2.className = `succes`;
    } else {
        pass_validation_2.className = `error`;
    }
    if (/[\W]/.test(select_password.value)) {
        pass_validation_3.className = `succes`;
    } else {
        pass_validation_3.className = `error`;
    }
    if (/[\d]+/.test(select_password.value)) {
        pass_validation_4.className = `succes`;
    } else {
        pass_validation_4.className = `error`;
    }
    fieldValidation(regexExp.password, password, `password`);
    if (select_password.value === select_confPass.value && select_confPass.value !== ``) {
        pass_validation_9.className = `succes`;
        document.querySelector(`#label__confPass`).className = `succes`;
        document.querySelector(`#confPass`).className = `borderSucces`;
        document.querySelector(`#alert__confPass`).classList.add(`deleteMessage`);
    }
    if (select_password.value !== select_confPass.value && select_confPass.value !== ``) {
        pass_validation_9.className = `error`;
        pass_validation_9.className = `error`;
        document.querySelector(`#label__confPass`).className = `error`;
        document.querySelector(`#confPass`).className = `borderError`;
        document.querySelector(`#alert__confPass`).classList.remove(`deleteMessage`);
    }
})
select_confPass.addEventListener('keyup', () => {
    document.querySelector(`#alert__confPass`).classList.remove(`deleteMessage`);
    if (select_confPass.value.length < 12) {
        pass_validation_5.className = `error`;
        document.querySelector(`#confPass`).className = `borderError`;
    } else {
        pass_validation_5.className = `succes`;
        document.querySelector(`#confPass`).className = `borderSucces`;
    }
    if (/[A-Z]/.test(select_confPass.value)) {
        pass_validation_6.className = `succes`;
        document.querySelector(`#confPass`).className = `borderSucces`;
    } else {
        pass_validation_6.className = `error`;
        document.querySelector(`#confPass`).className = `borderError`;
    }
    if (/[\W]/.test(select_confPass.value)) {
        pass_validation_7.className = `succes`;
        document.querySelector(`#confPass`).className = `borderSucces`;
    } else {
        pass_validation_7.className = `error`;
        document.querySelector(`#confPass`).className = `borderError`;
    }
    if (/[\d]+/.test(select_confPass.value)) {
        pass_validation_8.className = `succes`;
        document.querySelector(`#confPass`).className = `borderSucces`;
    } else {
        pass_validation_8.className = `error`;
        document.querySelector(`#confPass`).className = `borderError`;
    }
    if (select_password.value === select_confPass.value && select_confPass.value.length >= 12) {
        pass_validation_9.className = `succes`;
        document.querySelector(`#label__confPass`).className = `succes`;
        document.querySelector(`#confPass`).className = `borderSucces`;
        document.querySelector(`#alert__confPass`).classList.add(`deleteMessage`);
        document.querySelector(`#label__password`).className = `succes`;
        document.querySelector(`#password`).className = `borderSucces`;
        document.querySelector(`#alert__password`).classList.add(`deleteMessage`);
    } else {
        pass_validation_9.className = `error`;
        document.querySelector(`#label__confPass`).className = `error`;
        document.querySelector(`#confPass`).className = `borderError`;
        document.querySelector(`#alert__confPass`).classList.remove(`deleteMessage`);
    }
})
buttonEnable = () => {
    const inputsArray = Array.from(allInputs);
    if (inputsArray.every((x) => x.className === `borderSucces`)) {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', true)
    }
}
displayPass.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    select_password.removeAttribute(`type`)
}, true);
displayPass.addEventListener("pointerup", function (event) {
    event.preventDefault();
    select_password.setAttribute('type', 'password')
}, true);
displayConfPass.addEventListener("pointerdown", function (event) {
    event.preventDefault();
    select_confPass.removeAttribute(`type`)
}, true);
displayConfPass.addEventListener("pointerup", function (event) {
    event.preventDefault();
    select_confPass.setAttribute('type', 'password')
}, true);
