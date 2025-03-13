
const button = document.getElementById("button")
const userList = ['edjane', 'diego']
const formPass = 123456

button.addEventListener('click', (e) => {
    e.preventDefault()
    const userName = document.getElementById('username').value
    const password = document.getElementById('password').value

    if (userList.includes(userName.toLowerCase()) && password.toLowerCase() == formPass) {
        window.open('login.html')
    }
    else {
        alert('Insira um usuário e senha válidos')
    }
})
