// voter ID validation logic 

document.getElementById('loginForm').addEventListener('submit', function(event){
    let voterId = document.getElementById('voterId').value;
    let errorMessage = document.getElementById('voterIdError');

    if(voterId.length !== 10 && voterId.length > 0){
        event.preventDefault();
        errorMessage.textContent = "Voter ID must be 10 digits long";
        errorMessage.style.display = "block";
    }else {
        errorMessage.style.display = "none";
    }
});


// password toggle button on off functionality

function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleIcon = document.querySelector('.toggle-password');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = 'visibility';
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = 'visibility_off';  
}
}
