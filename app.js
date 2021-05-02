// responsive rules
window.addEventListener('load', () => {
    if (screen.width <= 500) {
        let span_1 = document.querySelector('.span-dialog-1');
        let span_2 = document.querySelector('.span-dialog-2');
        span_1.classList += ' span-dialog--left-entry';
        span_2.classList += ' span-dialog--right-entry';

        let choices = document.querySelector('.choices');
        let wrapper = document.querySelector('.wrapper');
        choices.classList += ' scene';
        wrapper.classList += ' carousel carousel--entry';

        let choices_items = document.querySelectorAll('.choices__item');
        choices_items[0].classList += ' carousel__item carousel__item--front';
        choices_items[1].classList += ' carousel__item carousel__item--right';
        choices_items[2].classList += ' carousel__item carousel__item--left';
    } else {
        let box_dialog = document.querySelector('.box-dialog');
        box_dialog.classList += ' box-dialog--top-entry';

        let choices_items = document.querySelectorAll('.choices__item');
        choices_items[0].classList += ' choices__rock--entry';
        choices_items[1].classList += ' choices__scissors--entry';
        choices_items[2].classList += ' choices__paper--entry';
    }
});