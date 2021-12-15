//function to move preview with arrow keys
const movePreview = () => {
    //get the last char of the selected cell
    var lastChar = parseInt(selectedCell.substr(selectedCell.length - 1));
    document.addEventListener('keydown', function (e) {
        //37 = left
        //38 = up
        //39 = right
        //40 = down
        if (e.keyCode == 37 || e.keyCode == 65) { 
            lastChar--;
            if (lastChar < 1) {
                lastChar = 9;
            }
            previewMove('target' + lastChar, true);
        }
        if (e.keyCode == 39 || e.keyCode == 68) {
            lastChar++;
            if (lastChar > 9) {
                lastChar = 1;
            }
            previewMove('target' + lastChar, true);
        }
        if (e.keyCode == 13) {
            makeMove('target' + lastChar);
        }
        if (e.keyCode == 38 || e.keyCode == 87) {
            lastChar -= 3;
            if (lastChar < 1) {
                lastChar = 9;
            }
            previewMove('target' + lastChar, true);
        }
        if (e.keyCode == 40 || e.keyCode == 83) {
            lastChar += 3;
            if (lastChar > 9) {
                lastChar = 1;
            }
            previewMove('target' + lastChar, true);
        }
        if (e.keyCode == 27) {
            slideTargets();
        }
        if (e.keyCode == 13) {
            checkIfWon();
        }

    });

};

document.addEventListener('keydown', movePreview());