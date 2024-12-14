const butt2 = document.querySelectorAll('.button_status');

butt2.forEach(butt => {
    butt.addEventListener('click', () => {
        document.getElementById("who_is_he").classList.add("open")
    })
})

document.getElementById("no_more2").addEventListener("click", function() {
    document.getElementById("who_is_he").classList.remove("open")
})

const buttons = document.querySelectorAll('.profession');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Убираем активный класс у всех кнопок
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем активный класс только к нажатой кнопке
        button.classList.add('active');

        // Закрываем все окна
        const allInfoWindows = document.querySelectorAll('.overflow_block_of_modal_box2');
        allInfoWindows.forEach(infoWindow => {
            infoWindow.style.display = 'none';
        });

        // Открываем соответствующее окно для нажатой кнопки
        const infoWindowToShow = document.querySelector(`.overflow_block_of_modal_box2[data-profession="${button.dataset.profession}"]`);
        if (infoWindowToShow) {
            infoWindowToShow.style.display = 'block';
        }
    });
});