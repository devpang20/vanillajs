const titleSelect = document.querySelector("#title");


const BASE_COLOR = "rgb(52, 73, 94)"; // rgb(52, 73, 94)
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
    const currentColor = titleSelect.style.color;
    console.log(currentColor);
    if (currentColor === BASE_COLOR) {
        titleSelect.style.color = OTHER_COLOR;
    } else {
        titleSelect.style.color = BASE_COLOR;
    }

}

function init() {
    titleSelect.style.color = BASE_COLOR;
    titleSelect.addEventListener("click", handleClick); //always HTML Javascript DOM event MDN 검색을 통해 이벤트 참조하기
}

init();



