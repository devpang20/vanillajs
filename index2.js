const titleSelect = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = titleSelect.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        titleSelect.classList.remove(CLICKED_CLASS);
    } else {
        titleSelect.classList.add(CLICKED_CLASS);
    }

    //refator
    //titleSelect.classList.toggle(CLICKED_CLASS);
}

function init() {
    titleSelect.addEventListener("click", handleClick); //always HTML Javascript DOM event MDN 검색을 통해 이벤트 참조하기
}

init();



