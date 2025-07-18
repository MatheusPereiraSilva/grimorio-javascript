export default function initTabMenu() {
    const tabMenu = document.querySelectorAll('.sobre-menu');
    const tabContent = document.querySelectorAll('.sobre-info');

    function activeTab(index) {
        tabContent.forEach((content) => {
            content.classList.remove('info-ativo');
        })
        tabContent[index].classList.add('info-ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    })

    function removeClasse(elementoClicado) {
        tabMenu.forEach((item) => {
            item.classList.add('cor-secundaria');
        })
        elementoClicado.classList.remove('cor-secundaria');
    }
    tabMenu.forEach((item) => {
        item.addEventListener('click', () => {
            removeClasse(item);
        })
    })
}