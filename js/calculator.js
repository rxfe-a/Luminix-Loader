function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    const display = document.getElementById('display');
    const result = eval(display.value);
    display.value = result;

    const passcode = localStorage.getItem('passcode');
    if (display.value === passcode) {
     window.location.href="./redirect.html#./access.html"
    }
  }