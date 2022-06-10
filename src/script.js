// const form = document.querySelector('.main__section__form')
// const email = document.getElementsByName('email')
// const password = document.getElementsByName('password')
//
// const Patterns = {
//     name: /^[а-яёА-ЯЁ]+$/,
//     surname: /^[а-яА-Я]|[a-zA-Z]$/,
//     patronymic: /^[а-яА-Я]|[a-zA-Z]$/,
//     email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
//     password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}/,
// };
//
//
//
// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
//     processingData(e.target.elements)
// })
//
// const processingData = collection => {
//     const elements = [...collection]
//     const inputs = elements.filter( element => element.hasAttribute('data-input') && element)
//     const inputsProcessing = inputs.map( input => validation(input) && input.value)
//     const inputsValid = inputsProcessing.filter( input => input!==false && input)
//     if (inputs.length===inputsValid.length){
//         const data = {
//             name: inputsValid[0],
//             surname: inputsValid[1],
//             patronymic: inputsValid[2],
//             email: inputsValid[3],
//             email_two: inputsValid[4],
//             password: inputsValid[5],
//             password_two: inputsValid[6],
//         }
//         console.log(data)
//     }
// }
// const validation = input => {
//     if(input.name === 'email_two') {
//         input.style.border='1px solid black'
//         if(input.value === email[0].value && email[0].value) return true
//         input.style.border='1px solid red'
//         return false
//     }
//     if(input.name === 'password_two'){
//         input.style.border='1px solid black'
//         if(input.value === password[0].value && password[0].value) return true
//         input.style.border='1px solid red'
//         return false
//     }
//
//     switch (Patterns[input.name].test(input.value)){
//         case true:
//             input.style.border='1px solid black'
//             return true
//         case false:
//             input.style.border='1px solid red'
//             return false
//     }
// }
//
const form = document.querySelector('.main__section__form')

const Patterns = {
    name: /^[а-яёА-ЯЁ]+$/,
    surname: /^[а-яА-Я]|[a-zA-Z]$/,
    patronymic: /^[а-яА-Я]|[a-zA-Z]$/,
    email: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
    email_two: /''/,
    password: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{5,}/,
    password_two: /''/
};



form.addEventListener('submit', (e)=>{
    e.preventDefault()
    processingData(e.target.elements)
})

const processingData = collection => {
    const elements = [...collection]
    const inputs = elements.filter( element => element.hasAttribute('data-input') && element)
    const inputsProcessing = inputs.map( input => validation(input) && input.value)
    const inputsValid = inputsProcessing.filter( input => input!==false && input)
    if (inputs.length===inputsValid.length){
        const data = {
            name: inputsValid[0],
            surname: inputsValid[1],
            patronymic: inputsValid[2],
            email: inputsValid[3],
            email_two: inputsValid[4],
            password: inputsValid[5],
            password_two: inputsValid[6],
        }
        console.log(data)
    }
}
const validation = input => {
    if( input.value && input.name === 'email' ) Patterns.email_two = RegExp( input.value )
    if( input.value && input.name === 'password' ) Patterns.password_two = RegExp(input.value)


    switch (Patterns[input.name].test(input.value)){
        case true:
            input.style.border='1px solid black'
            return true
        case false:
            input.style.border='1px solid red'
            return false
    }
}

