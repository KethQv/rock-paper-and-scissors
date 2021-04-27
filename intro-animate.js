let device;
if (screen.width > 414) {
    device = 'desktop';
} else {
    device = 'mobile';
}

function displayText(text, device) {
    // text: <'text'> - the text you want to display
    // device: <'desktop'> or <'mobile'> - for design purposes and console manipulation.

    if (device == 'desktop') {
        const textContainer = document.querySelector('#js-text-display');
        textContainer.innerText = text;
        textContainer.animate(
            [
                {transform: 'translateY(-900px)', opacity: 1, offset: 0},
                {transform: 'translateY(100px)', opacity: 1, offset: .25},
                {transform: 'translateY(-90px)', opacity: 1, offset: .50},
                {transform: 'translateY(45px)', opacity: 1, offset: .75},
                {transform: 'translateY(-30px)', opacity: 1, offset: .85},
                {transform: 'translateY(0px)', opacity: 1, offset: 1},
            ],
            {
                duration: 1000,
                easing: 'linear',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards',
            }
        );
    } else {
        splitHalfStatement(text);
        const span1 = document.querySelector('#span-1');
        const span2 = document.querySelector('#span-2');
        span1.animate(
            [
                {transform: 'translateX(-900px)', opacity: 1, offset: 0},
                {transform: 'translateX(60px)', opacity: 1, offset: .25},
                {transform: 'translateX(-50px)', opacity: 1, offset: .50},
                {transform: 'translateX(30px)', opacity: 1, offset: .75},
                {transform: 'translateX(-15px)', opacity: 1, offset: .85},
                {transform: 'translateX(0)', opacity: 1, offse: 1}
            ],
            {
                duration: 1000,
                easing: 'linear',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards',
            }
        );
        span2.animate (
            [
                {transform: 'translate(900px, 80%)', opacity: 1, offset: 0},
                {transform: 'translate(-60px, 80%)', opacity: 1, offset: .25},
                {transform: 'translate(50px, 80%)', opacity: 1, offset: .50},
                {transform: 'translate(-30px, 80%)', opacity: 1, offset: .75},
                {transform: 'translate(15px, 80%)', opacity: 1, offset: .85},
                {transform: 'translate(0, 80%)', opacity: 1, offse: 1}
            ],
            {
                duration: 1000,
                easing: 'linear',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards',
            }
        );
    }
    return;
}

function splitHalfStatement(text) {
    let halfIndex = Math.round(text.length / 2) - 1;
    let indexCount = 0;
    while (true) {
        if (text[halfIndex + indexCount] == ' ') {
            break;
        } else if (halfIndex + indexCount > text.length) {
            console.error('The text has not half with " "');
            break;
        }
        indexCount++;
    }
    let middleIndex = halfIndex + indexCount;
    let text1 = text.slice(0, middleIndex);
    let text2 = text.slice(middleIndex + 1);
    twoSpan(text1, text2);
    return;
}

function twoSpan(text1, text2) {
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');

    span1.setAttribute('id', 'span-1');
    span2.setAttribute('id', 'span-2');
    
    span1.setAttribute('class', 'span-js');
    span2.setAttribute('class', 'span-js');

    span1.innerText = text1;
    span2.innerText = text2;

    span1.style.position = 'absolute';
    span2.style.position = 'absolute';
    
    document.body.appendChild(span1);
    document.body.appendChild(span2);
    return;
}

displayText('ROCK PAPER AND SCISSORS', device);

