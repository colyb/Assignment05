// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

let id = $('id')
let fullname = $('name')
let ext = $('ext')
let email = $('email')
let department = $('dropdown')
let submit = $('submit')

console.log(fullname.value)

submit.addEventListener('click', function (e) {
    e.preventDefault()
    console.log(`ID: ${id.value}`)
    console.log(`Name: ${fullname.value}`)
    console.log(`Extension: ${ext.value}`)
    console.log(`Email: ${email.value}`)
    console.log(`Department: ${department.options[department.selectedIndex].value}`)
})

