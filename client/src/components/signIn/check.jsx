const Check = () => {
    let check = 0
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (email.value !== '')
        email.className =
        re.test(String(email.value).toLowerCase()) === false
            ? 'sign-up-input validate error'
            : 'sign-up-input validate correction'
    else email.className = 'sign-up-input validate error'

    if (password.value !== '') {
        re = /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,}$/
        password.className =
        re.test(String(password.value).toLowerCase()) === false
            ? 'sign-up-input validate error'
            : 'sign-up-input validate correction'
    } else password.className = 'sign-up-input validate error'

    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    check += re.test(String(email.value).toLowerCase()) === false ? 1 : 0
    re = /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,}$/
    check += re.test(String(password.value).toLowerCase()) === false ? 1 : 0
    
    return {
        check: check === 0 ? true : false,
        userInformation: {"name": "zolboo", "email": email.value}
    }
}

export default Check
