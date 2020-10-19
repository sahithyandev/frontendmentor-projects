function invalid(id) {
    let invalidElement = document.getElementById(id)
    invalidElement.classList.add('invalid')

    let labelElement = document.getElementById(id + '-label')
    if (id == 'email') {
        if (invalidElement.value != '') {
            labelElement.innerHTML = 'Looks like this is not an email'
        }
    }
    labelElement.classList.remove('hide')

}

function resetInvalid(id) {
    let invalidElement = document.getElementById(id)
    document.getElementById(id + '-label').classList.add('hide')
    invalidElement.classList.remove('invalid')

}

function submit() {
    let inputs = document.getElementsByClassName('input')
    Array.from(inputs).forEach(d => {
        let labelElement = document.getElementById(d.id + '-label')
        if (d.value == '') {

        }
    })
}