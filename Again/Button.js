const button = document.querySelector('.btn')

const mouseHoverAnimation = () => {
    anime({
        targets: button,
        scale: {
            value: 1.1
        },
        duration: 1500
    })
}

const mouseOutAnimation = () => {
    anime({
        targets: button,
        scale: {
            value: 1
        },
        duration: 1500
    })
}

button.addEventListener('mouseover', mouseHoverAnimation)
button.addEventListener('mouseout', mouseOutAnimation)