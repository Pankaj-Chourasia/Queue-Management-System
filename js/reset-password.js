function togglePasswordVisibility(fieldId) {
    let input = document.getElementById(fieldId);
    let toggleIcon = input.nextElementSibling; 
    if (input.type === "password") {
        input.type = "text";
        toggleIcon.textContent = 'visibility';  
    } else {
        input.type = "password";
        toggleIcon.textContent = 'visibility_off';  
    }
}


document.getElementById('confirmPassword').addEventListener('keyup', function() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let statusMessage = document.getElementById('passwordMatchStatus');

    statusMessage.innerHTML = '';

    const iconSpan = document.createElement('span');
    iconSpan.className = 'material-symbols-outlined';
    iconSpan.textContent = password === confirmPassword ? 'check_circle' : 'cancel';

    const messageText = document.createTextNode(password === confirmPassword ? ' Passwords match.' : ' Passwords do not match.');

    statusMessage.appendChild(iconSpan);
    statusMessage.appendChild(messageText);

    statusMessage.style.color = password === confirmPassword ? 'green' : 'red';
});


