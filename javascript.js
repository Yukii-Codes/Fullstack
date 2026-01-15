let count = 0;

const countText = document.getElementById("count");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    count++;
    countText.textContent = count;
});
