let display = document.getElementById('screen');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearScreen() {
    display.value = '';
}

function calculate() {
    let result = eval(display.value);
    display.value = result;
}

function deleteChar() {
    let screen = document.getElementById("screen");
    screen.value = screen.value.slice(0, -1);

}
