let number = 0;
document.getElementById('increaseBtn').addEventListener('click', function() {
    number++;
    updateDisplay();
});
document.getElementById('decreaseBtn').addEventListener('click', function() {
    number--;
    updateDisplay();
});
function updateDisplay() {
    const display = document.getElementById('numberDisplay');
    display.textContent = number;

    if (number > 0) {
        display.style.color = 'green';
    } else if (number < 0) {
        display.style.color = 'red';
    } else {
        display.style.color = 'green';
    }
}