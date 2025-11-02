prevButton = document.getElementById('prev')
nextButton = document.getElementById('next')
items = document.querySelectorAll('.item')
dots = document.querySelectorAll('.dot')
numberIndicator = document.querySelector('.numbers')
list = document.querySelectorAll('.list')
document.querySelector('.btn')



let active = 0;
const total = items.length;
let timer;

function update(direction) {
    document.querySelector('.item.active').classList.remove('active');
    document.querySelector('.dot.active').classList.remove('active');

    if (direction > 0) {
        active = active + 1
        if (active === total)
            active = 0
    }

    else if (direction < 0) {
        active = active - 1

        if (active < 0 )
            active = total - 1
    }

    items[active].classList.add('active');
    dots[active].classList.add('active');

    numberIndicator.textContent = String (active + 1).padStart(2, '0');
}

clearInterval(timer)
timer = setInterval(() => {
    update(1)
}, 5000)



prevButton.addEventListener('click', () => {
    update(-1);
})

nextButton.addEventListener('click', () => {
    update(+1);
})