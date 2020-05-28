// import React from 'react'

const Check = () => {
    let check = 0;
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const second_name = document.getElementById('second_name')
    const first_name = document.getElementById('first_name')
    const year = document.getElementById('year')
    const month = document.getElementById('month')
    const day = document.getElementById('day')
    const school = document.getElementById('school')
    const schoolClass = document.getElementById('class')
    const phone_number = document.getElementById('phone_number')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    second_name.className = second_name.value === '' ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    first_name.className = first_name.value === '' ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    year.className = year.value === '' ? 'year validate error' : 'year validate correction'
    month.className = month.value === '' ? 'month validate error' : 'month validate correction'
    day.className = day.value === '' ? 'day validate error' : 'day validate correction'
    school.className = school.value === '' ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    schoolClass.className = schoolClass.value === '' ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    phone_number.className = phone_number.value === '' ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    
    if (email.value !== '')
        email.className = re.test(String((email.value)).toLowerCase()) === false ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    else 
        email.className = 'sign-up-input validate error';

    if (password.value !== '') {
        re = /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,}$/
        password.className = re.test(String((password.value)).toLowerCase()) === false ? 'sign-up-input validate error' : 'sign-up-input validate correction'
    } else 
        password.className = 'sign-up-input validate error';

    check += second_name.value === '' ? 1 : 0
    check += first_name.value === '' ? 1 : 0
    check += year.value === '' ? 1 : 0
    check += month.value === '' ? 1 : 0
    check += day.value === '' ? 1 : 0
    check += school.value === '' ? 1 : 0
    check += schoolClass.value === '' ? 1 : 0
    check += phone_number.value === '' ? 1 : 0
    check += email.value === '' ? 1 : 0
    check += password.value === '' ? 1 : 0
    re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    check += re.test(String((email.value)).toLowerCase()) === false ? 1 : 0;
    re = /^(?=.*\d)(?=.*[a-z])[0-9a-z]{8,}$/
    check += re.test(String((password.value)).toLowerCase()) === false ? 1 : 0;

    const user_information = {
        "first-name": first_name.value,
        "second-name": second_name.value,
        "date": year.value + ' ' + month.value + ' ' + day.value,
        "school": school.value,
        "class": schoolClass.value,
        "phone-number": phone_number.value,
        "email": email.value,
        "password": password.value,
    }
    return {
        check: check === 0 ? true : false,
        user_information: user_information
    }
}

export default Check
