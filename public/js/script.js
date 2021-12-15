//function to set error message then clear it after 3 seconds and play animation named 'shake'
function setErrorMessage(message) {

    //check if error message already has text that isnt nbsp;
    if (document.getElementById('errorMessage').innerHTML != '&nbsp;') {
        //if it does, clear it
        document.getElementById('errorMessage').innerHTML = '&nbsp;';
    }


    document.getElementById('errorMessage').style.userSelect = 'inherit';
    document.getElementById('errorMessage').innerHTML = message;
    document.getElementById('errorMessage').classList.add('shake');
    setTimeout(function () {
        document.getElementById('errorMessage').classList.remove('shake');
        document.getElementById('errorMessage').innerHTML = '&nbsp;';
        document.getElementById('errorMessage').style.userSelect = 'none';
    }, 3000);
}
var selectedCell = '';


function checkIfCellIsEmpty() {
    if (document.getElementById(selectedCell + "moveText").innerHTML == 'X' || selectedCell.innerHTML == 'O') {
        return true;
    } else {

        return false;
    }
}

document.getElementById('preview').style.height = document.getElementById('target1').offsetHeight / 3 + 'px';
document.getElementById('preview').style.width = document.getElementById('target1').offsetWidth / 3 + 'px';



function translateTo(x, y, element) {

    //convert to int

    var centerElementX = parseInt(document.getElementById('target1').offsetWidth) / 3;
    var centerElementY = parseInt(document.getElementById('target1').offsetHeight) / 3;

    x = centerElementX + x;
    y = centerElementY + y;

    element.style.transform = 'translate(' + x + 'px, ' + y + 'px)';


}

function selectedCell() {
    return selectedCell;
};

function previewMove(targetElement, enable) {
    if (!enable) {
        enablePreview();
    }
    var rect = document.getElementById(targetElement).getBoundingClientRect();
    translateTo(rect.left, rect.top, document.getElementById('preview'));

    selectedCell = targetElement;
}

function displayMove(targetElement, destinationElement) {
    var rect = document.getElementById(targetElement).getBoundingClientRect();
    translateTo(rect.left, rect.top, document.getElementById(destinationElement));
}

previewMove('target5', false)

function disablePreview() {
    document.getElementById('preview').style.display = 'none';
}

function enablePreview() {
    document.getElementById('preview').style.display = 'block';
}

disablePreview();

//get all elements with class move and make the height the same as the height of preview
var moveElements = document.getElementsByClassName('move');
for (var i = 0; i < moveElements.length; i++) {
    moveElements[i].style.height = document.getElementById('preview').offsetHeight + 'px';
    moveElements[i].style.width = document.getElementById('preview').offsetWidth + 'px';
}

var currentPlayer = 'X';

function setPreviewPlayer() {
    document.getElementById('movePreviewText').innerHTML = currentPlayer;
}

setPreviewPlayer();

function makeMove(whichCell) {
    var selectedCell = document.getElementById(whichCell + "moveText");

    if (!checkIfCellIsEmpty()) {

        if (currentPlayer == 'X') {
            selectedCell.innerHTML = 'X';
            currentPlayer = 'O';
            setPreviewPlayer();

        } else {
            selectedCell.innerHTML = 'O';
            currentPlayer = 'X';
            setPreviewPlayer();
        }
    }
    else {
        setErrorMessage('Spot is already taken');
    }
}

function changeSvg() {


    document.querySelector('.modal-slide').classList.toggle('modal-slide-active');
    document.querySelector('.block').classList.toggle('block-active');

}

changeSvg();


const setModalContent = (contentType, checkIfOpen) => {

    //check if modal is already open
    if (document.querySelector('.modal-slide').classList.contains('modal-slide-active') && checkIfOpen) {
        changeSvg();
    }

    document.querySelector('.modal-content').innerHTML = contentType;
};

const resetAndHide = () => {
    document.querySelector('.modal-slide').classList.toggle('modal-slide-active');
    document.querySelector('.block').classList.toggle('block-active');
    resetGame();
    setTimeout(() => {
        setModalContent('', false);
    }, 800);
};

// function to apply class slide-active to every listof.target
const slideTargets = () => {
    //wait 1 second before removing class
    listOf.targets.forEach(target => {
        target.classList.add('slide-active');
    });
    changeSvg();
    setTimeout(() => {
        listOf.targets.forEach(target => {
            target.classList.remove('slide-active');
            resetGame();
            setModalContent('', false);

        });
    }, 500);
};

