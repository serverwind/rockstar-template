//Анимация иконок в навигации 
function naviAnimation() {
    let naviItems = document.querySelectorAll('.navi-items');

    let itemsNum = naviItems.length; //в плане производительности лучше получить количество элементов в переменную сразу, чем проверять количество этих элементов каждый раз в цикле for

    for (i = 0; i < itemsNum; i++) {
        naviItems[i].addEventListener("mouseover", naviShow);
    }
    for (i = 0; i < itemsNum; i++) {
        naviItems[i].addEventListener("mouseout", naviHide);
    }

    function naviShow() {
        let naviIcon = this.children[0];
        let naviUrl = this.children[1];

        naviIcon.style.display = 'none';
        naviUrl.classList.add('navi-show-link');
    }

    function naviHide() {
        let naviIcon = this.children[0];
        let naviUrl = this.children[1];

        naviIcon.style.display = 'block';
        naviUrl.classList.remove('navi-show-link');
    }
}
naviAnimation();

//Мобильное меню навигации
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    let naviMenu = document.getElementById('navi');
    let naviItems = document.querySelectorAll('.navi-items');
    let itemsNum = naviItems.length;

    naviMenu.classList.toggle('navi-open');

    for (i = 0; i < itemsNum; i++) {
        naviItems[i].classList.toggle('show');
    }
}

//Поиск по сайту
const searchButton = document.getElementById('search-icon');

searchButton.addEventListener('click', showSearchField);

function showSearchField() {
    let searchForm = document.querySelector('.search-form');
    let icon = document.querySelector('#search-icon i');
    searchForm.classList.toggle('show');
    icon.classList.toggle('fa-search');
    icon.classList.toggle('fa-times');
}

//Возвращение к верху страницы
const toTopButton = document.getElementById('to-top');

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.classList.add('show');
    } else {
        toTopButton.classList.remove('show');
    }

    toTopButton.addEventListener('click', scrollToTop);
    
    function scrollToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}