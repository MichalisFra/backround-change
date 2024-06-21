let color = undefined;

this.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickedMeClicked()
    })
})

/**
 * Handler. Actions taken after 'Clicked Me' clicked.
 */
function onClickedMeClicked() {
    updateBg()
}

/**
 * Updates the state and updates the UI
 */
function updateBg() {
    color = getColor()
    showBgColor()
}

/**
 * Selects a random color from a standard array
 * @returns 
 */
function getColor() {
    const colors = ['Black', 'Red', 'Green', 'Blue', 'White']
    return colors[Math.floor(Math.random() * colors.length)]
}

function showBgColor() {
    document.querySelector('#color').innerHTML = color
    document.body.style.backgroundColor = color
    console.log(color)
}