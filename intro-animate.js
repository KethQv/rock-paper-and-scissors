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
                {transform: 'translateY(10px)', opacity: 1, offset: .25},
                {transform: 'translateY(-90px)', opacity: 1, offset: .50},
                {transform: 'translateY(5px)', opacity: 1, offset: .75},
                {transform: 'translateY(-55px)', opacity: 1, offset: .85},
                {transform: 'translateY(0px)', opacity: 1, offset: 1},
            ],
            {
                duration: 500,
                easing: 'linear',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards',
            }
        ).finished.then(() => {
            textContainer.animate(
                [
                    {transform: 'translateY(0px)', opacity: 1, offset: 0},
                    {transform: 'translateY(1000px)', opacity: 0, offset: 1}
                ],
                {
                    duration: 500,
                    easing: 'linear',
                    delay: 1300,
                    iteration: 1,
                    direction: 'normal',
                    fill: 'forwards',
                }
            );
        });
    } else {
        splitHalfStatement(text);
        const span1 = document.querySelector('#span-1');
        const span2 = document.querySelector('#span-2');
        span1.animate(
            [
                {transform: 'translateX(-900px)', opacity: 1, offset: 0},
                {transform: 'translateX(40px)', opacity: 1, offset: .25},
                {transform: 'translateX(-25px)', opacity: 1, offset: .50},
                {transform: 'translateX(10px)', opacity: 1, offset: .75},
                {transform: 'translateX(-5px)', opacity: 1, offset: .85},
                {transform: 'translateX(0)', opacity: 1, offse: 1}
            ],
            {
                duration: 500,
                easing: 'linear',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards',
            }
        ).finished.then(() => {
            span1.animate(
                [
                    {transform: 'translateX(0px)', opacity: 1, offset: 0},
                    {transform: 'translateX(900px', opacity: 0, offset: 1}
                ],
                {
                    duration: 500,
                    easing: 'linear',
                    delay: 1300,
                    iterations: 1,
                    direction: 'normal',
                    fill: 'forwards'
                }
            )
        });
        span2.animate (
            [
                {transform: 'translate(900px, 80%)', opacity: 1, offset: 0},
                {transform: 'translate(-40px, 80%)', opacity: 1, offset: .25},
                {transform: 'translate(25px, 80%)', opacity: 1, offset: .50},
                {transform: 'translate(-10px, 80%)', opacity: 1, offset: .75},
                {transform: 'translate(5px, 80%)', opacity: 1, offset: .85},
                {transform: 'translate(0, 80%)', opacity: 1, offse: 1}
            ],
            {
                duration: 500,
                easing: 'linear',
                delay: 0,
                iterations: 1,
                direction: 'normal',
                fill: 'forwards',
            }
        ).finished.then(() => {
            span2.animate(
                [
                    {transform: 'translate(0px, 80%)', opacity: 1, offset: 0},
                    {transform: 'translate(-900px, 80%)', opacity: 0, offset: 1}
                ],
                {
                    duration: 500,
                    easing: 'linear',
                    delay: 1300,
                    iterations: 1,
                    direction: 'normal',
                    fill: 'forwards'
                }
            )
        });
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

window.addEventListener('load', () => {
    displayText('ROCK PAPER AND SCISSORS', device);
});
