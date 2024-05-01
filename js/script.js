document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let voterId = document.getElementById('voterId').value;
    if (voterId) {
        updateQueueStatus(voterId);
    }
});

function updateQueueStatus(voterId) {
    // Mock functionality
    document.getElementById('queuePosition').textContent = "3";
    document.getElementById('waitTime').textContent = "Approx. 10 minutes";
    alert("You have been added to the queue!");
}
