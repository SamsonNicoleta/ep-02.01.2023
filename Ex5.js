const cinci = document.getElementById("5");
const Button1 = document.getElementById("minus");
const Button2 = document.getElementById("plus");

rent value = 5;

Button1.addEventListener("click", () => {
    currentValue -= 1;
    cinci.value = currentValue;
});

Button1.addEventListener("doubleclick", () => {
    currentValue -= 5;
    cinci.value = currentValue;
});

Button2.addEventListener("click", () => {
    currentValue += 1;
    cinci.value = currentValue;
});

Button2.addEventListener("doubleclick", () => {
    currentValue += 5;
    cinci.value = currentValue;
});