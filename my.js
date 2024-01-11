window.addEventListener('DOMContentLoaded', function () {
    alignWidths('chapter_tab_item');
    alignWidths('post_item');
});

function alignWidths(className) {
    var items = document.querySelectorAll('.' + className);
    var maxWidth = 0;

    items.forEach(function (item) {
        var itemWidth = item.getBoundingClientRect().width;
        maxWidth = Math.max(maxWidth, itemWidth);
    });

    items.forEach(function (item) {
        item.style.width = maxWidth + 'px';
    });
}

// JavaScript для переключения табов
document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab1('tab_1');
});

function showTab1(tabId) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tabs__block');
    tabs.forEach(function(tab) {
        tab.classList.remove('active-tab');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active-tab');
}







function toggleFlex1() {
    var box = document.querySelector('.box1');
    var arrow = document.querySelector('.arrow1');

    // Проверяем текущее состояние display
    if (box.style.display === 'none' || box.style.display === '') {
        // Если display:none, добавляем класс flex
        box.style.display = 'flex';
        arrow.classList.add('arrow_active');
    } else {
        // Если display:flex, убираем класс flex
        box.style.display = 'none';
        arrow.classList.remove('arrow_active');
    }
}

function toggleFlex2() {
    var box = document.querySelector('.box2');
    var arrow = document.querySelector('.arrow2');

    // Проверяем текущее состояние display
    if (box.style.display === 'none' || box.style.display === '') {
        // Если display:none, добавляем класс flex
        box.style.display = 'flex';
        arrow.classList.add('arrow_active');
    } else {
        // Если display:flex, убираем класс flex
        box.style.display = 'none';
        arrow.classList.remove('arrow_active');
    }
}
function toggleFlex3() {
    var box = document.querySelector('.box3');
    var arrow = document.querySelector('.arrow3');

    // Проверяем текущее состояние display
    if (box.style.display === 'none' || box.style.display === '') {
        // Если display:none, добавляем класс flex
        box.style.display = 'flex';
        arrow.classList.add('arrow_active');
    } else {
        // Если display:flex, убираем класс flex
        box.style.display = 'none';
        arrow.classList.remove('arrow_active');
    }
}



document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab('post_tab_1');
    showTab('post_tab_5');
    showTab('post_tab_9');
});

function showTab(tabId) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tab_post_block_item');
    tabs.forEach(function(tab) {
        tab.classList.remove('tab_post_block_item_active');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('tab_post_block_item_active');
}

// Покажем первый таб при загрузке страницы
window.onload = function() {
    showTab('post_tab_1');
};






// JavaScript для переключения табов
document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab3('post_tab_5');
});

function showTab3(tabId) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tab_post_block_item');
    tabs.forEach(function(tab) {
        tab.classList.remove('tab_post_block_item_active');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('tab_post_block_item_active');
}

// Дополнительно: Покажем первый таб при загрузке страницы
window.onload = function() {
    var defaultTab = document.querySelector('.tab_post_block_item');
    defaultTab.classList.add('tab_post_block_item_active');
};




// JavaScript для переключения табов
document.addEventListener("DOMContentLoaded", function() {
    // Показать первый таб при загрузке страницы
    showTab4('post_tab_9');
});

function showTab4(tabId) {
    // Скрыть все табы
    var tabs = document.querySelectorAll('.tab_post_block_item');
    tabs.forEach(function(tab) {
        tab.classList.remove('tab_post_block_item_active');
    });

    // Показать выбранный таб
    var selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('tab_post_block_item_active');
}

// Дополнительно: Покажем первый таб при загрузке страницы
window.onload = function() {
    var defaultTab = document.querySelector('.tab_post_block_item');
    defaultTab.classList.add('tab_post_block_item_active');
};




function OpenPosts() {
    // Получить все табы
    var tabs = document.querySelectorAll('.posts_tab_post_next');

    // Переключить класс для каждого таба
    tabs.forEach(function (tab) {
        tab.classList.toggle('posts_tab_post_next_active');
    });
}