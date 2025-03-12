function solve() {
    const numberInputElement = document.getElementById("input");
    const menuToElement = document.getElementById("selectMenuTo");
    const buttonElement = document.getElementById("convert-btn");
    const resultElement = document.getElementById("result");

    buttonElement.addEventListener('click', () => {
        if (menuToElement.value === "binary") {
            resultElement.value = Number(numberInputElement.value).toString(2);
        } else if (menuToElement.value === "hexadecimal") {
            resultElement.value = Number(numberInputElement.value).toString(16).toUpperCase();
        }
    });
}

solve()