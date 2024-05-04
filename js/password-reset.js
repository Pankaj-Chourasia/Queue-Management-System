// voter ID validation logic 

document.getElementById('passwordResetForm').addEventListener('submit', function(event){
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


