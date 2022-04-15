let list = document.querySelectorAll('.item-footer__list');
let item = document.querySelectorAll(".item-footer");
selectListOpen()

function selectListOpen() {
    let selectTitle = document.querySelectorAll(".item-footer__title");
    selectTitle.forEach(title => {
        title.addEventListener('click', () => {
            title.parentNode.classList.toggle("active")

        })
    });
}