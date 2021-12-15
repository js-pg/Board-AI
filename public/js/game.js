let listOf = {
    "targets": document.querySelectorAll('.preview-text')
}

const checkIfWon = () => {
    var check = {
        won: false,
        tie: false,
        player: undefined,
        location: undefined,
    };

    // 123
    // 456
    // 789

    //check if every square has a value


    if (listOf.targets[0].innerHTML === listOf.targets[1].innerHTML && listOf.targets[0].innerHTML === listOf.targets[2].innerHTML && listOf.targets[0].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[0].innerHTML.toLowerCase();
        check.location = 'Point 1 to 3';
    } else if (listOf.targets[3].innerHTML === listOf.targets[4].innerHTML && listOf.targets[3].innerHTML === listOf.targets[5].innerHTML && listOf.targets[3].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[3].innerHTML.toLowerCase();
        check.location = 'Point 4 to 6';
    } else if (listOf.targets[6].innerHTML === listOf.targets[7].innerHTML && listOf.targets[6].innerHTML === listOf.targets[8].innerHTML && listOf.targets[6].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[6].innerHTML.toLowerCase();
        check.location = 'Point 7 to 9';
    } else if (listOf.targets[0].innerHTML === listOf.targets[3].innerHTML && listOf.targets[0].innerHTML === listOf.targets[6].innerHTML && listOf.targets[0].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[0].innerHTML.toLowerCase();
        check.location = 'Point 1 to 7';
    } else if (listOf.targets[1].innerHTML === listOf.targets[4].innerHTML && listOf.targets[1].innerHTML === listOf.targets[7].innerHTML && listOf.targets[1].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[1].innerHTML.toLowerCase();
        check.location = 'Point 2 to 8';
    } else if (listOf.targets[2].innerHTML === listOf.targets[5].innerHTML && listOf.targets[2].innerHTML === listOf.targets[8].innerHTML && listOf.targets[2].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[2].innerHTML.toLowerCase();
        check.location = 'Point 3 to 9';
    } else if (listOf.targets[0].innerHTML === listOf.targets[4].innerHTML && listOf.targets[0].innerHTML === listOf.targets[8].innerHTML && listOf.targets[0].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[0].innerHTML.toLowerCase();
        check.location = 'Point 1 to 9';
    } else if (listOf.targets[2].innerHTML === listOf.targets[4].innerHTML && listOf.targets[2].innerHTML === listOf.targets[6].innerHTML && listOf.targets[2].innerHTML !== "") {
        check.won = true;
        check.player = listOf.targets[2].innerHTML.toLowerCase();
        check.location = 'Point 3 to 7';
    } else {

        //check if every square in listOf.targets has a value

        for (let i = 0; i < listOf.targets.length; i++) {
            if (listOf.targets[i].innerHTML === "") {
                check.tie = false;
                break;
            } else {
                check.tie = true;
            }
        }

    };

    if (check.player === "" || check.player === undefined || check.player === null) {
        check.location = undefined;
        check.player = undefined;
    };


    if (check.won === true) {
        promptWinner(check.player, check.location);
    } else if (check.tie === true) {
        promptWinner("tie", "");
    }

    return check;
};

function resetGame() {
    listOf.targets.forEach(target => {
        target.innerHTML = "";
    });
}

function promptWinner(player, points) {

    const svgArrowRight = `<svg class="m-2" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clip-rule="evenodd"></path></svg>`

    points = points.replace('to', svgArrowRight);

    if (player === 'tie') {
        setModalContent(`
    <div class="w-100 mt-3 d-flex flex-column justify-content-center align-items-center"><h1 class="alert--win w-100 text-center">Game Result:<br><span>Tie!</h1></span><button onclick="resetAndHide()" class="btn btn-move-preview">New Game</button></div>
    `, true)
    } else {
        player = player.toUpperCase();

        setModalContent(`
        <div class="w-100 mt-3 d-flex flex-column justify-content-center align-items-center"><h1 class="alert--win w-100 text-center">Game Result:<br><span>${player} wins!</h1></span><br><h2 class="m-2 text-center d-flex justify-content-center align-items-center">${points}</h2><button onclick="resetAndHide()" class="btn btn-move-preview">New Game</button><br><p class="w-100 m-4 text-center text-muted">Not much more to see right now!</p></div>

    `, true)
    }
}