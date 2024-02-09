const errorMessage = document.getElementById('password__error');
const submit = document.getElementById('submit');
const confirmPassword = document.getElementById('confirm__password');
const password = document.getElementById('password');

confirmPassword.addEventListener('blur', (event) => {
    const value = event.target.value;

    if (value.length && value != password.value) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
});