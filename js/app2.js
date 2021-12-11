const patterns = {
    telephone: /(?:\+\([9]{2}[8]\)[0-9]{2}\ [0-9]{3}\-[0-9]{2}\-[0-9]{2})/g,
    name: /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}
let inputs = document.querySelectorAll('input') 
let form = document.forms.register
let select = document.querySelector('select') 
let button = document.querySelector('button')
let nameSpan = document.querySelector('#name')
let phoneSpan = document.querySelector('#phone')
let emailSpan = document.querySelector('#email')
let btnShow = document.querySelector('#showUser')
let fieldset = document.querySelector('fieldset')


function validate(regex, field) {
    if(regex.test(field.value)) {
        field.className = 'valid'
    } else {
        field.className = 'invalid'
    }
}

inputs.forEach(input => {
    input.onkeyup = (e) => {
        validate(patterns[e.target.attributes.name.value], e.target)
    }
})

let user = {}

form.onsubmit = (event) => {
    event.preventDefault()

    let isErrorarr = []

    inputs.forEach(input => {
        isErrorarr.push(input.classList[0])
    })  

    if(isErrorarr.includes('invalid')) {
        alert('error')
    } else {
        let fm = new FormData(form)

        fm.forEach((value, key) => {
            user[key] = value
        })
        inputs.forEach(input => {
            input.value = ""
        })
    }
    
}


btnShow.onclick = () => {
    showUser(user.name, user.email, user.telephone )
   
}

function showUser(name, email, telephone) {
    fieldset.style.opacity = '1'
    nameSpan.innerHTML = name
    phoneSpan.innerHTML = telephone
    emailSpan.innerHTML = email    
}

