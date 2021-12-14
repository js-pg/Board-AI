let listOf = {
    "targets": document.querySelectorAll('.preview-text')
}

const checkIfWon = () => {
    var check = {
        won: false,
        player: undefined,
        location: undefined
    };

    // 123
    // 456
    // 789

    if (listOf.targets[0].innerHTML === listOf.targets[1].innerHTML && listOf.targets[0].innerHTML === listOf.targets[2].innerHTML) {
        check.won = true;
        check.player = listOf.targets[0].innerHTML.toLowerCase();
        check.location = 'Point 1 to 3';
    } else if (listOf.targets[3].innerHTML === listOf.targets[4].innerHTML && listOf.targets[3].innerHTML === listOf.targets[5].innerHTML) {
        check.won = true;
        check.player = listOf.targets[3].innerHTML.toLowerCase();
        check.location = 'Point 4 to 6';
    } else if (listOf.targets[6].innerHTML === listOf.targets[7].innerHTML && listOf.targets[6].innerHTML === listOf.targets[8].innerHTML) {
        check.won = true;
        check.player = listOf.targets[6].innerHTML.toLowerCase();
        check.location = 'Point 7 to 9';
    } else if (listOf.targets[0].innerHTML === listOf.targets[3].innerHTML && listOf.targets[0].innerHTML === listOf.targets[6].innerHTML) {
        check.won = true;
        check.player = listOf.targets[0].innerHTML.toLowerCase();
        check.location = 'Point 1 to 7';
    } else if (listOf.targets[1].innerHTML === listOf.targets[4].innerHTML && listOf.targets[1].innerHTML === listOf.targets[7].innerHTML) {
        check.won = true;
        check.player = listOf.targets[1].innerHTML.toLowerCase();
        check.location = 'Point 2 to 8';
    } else if (listOf.targets[2].innerHTML === listOf.targets[5].innerHTML && listOf.targets[2].innerHTML === listOf.targets[8].innerHTML) {
        check.won = true;
        check.player = listOf.targets[2].innerHTML.toLowerCase();
        check.location = 'Point 3 to 9';
    } else if (listOf.targets[0].innerHTML === listOf.targets[4].innerHTML && listOf.targets[0].innerHTML === listOf.targets[8].innerHTML) {
        check.won = true;
        check.player = listOf.targets[0].innerHTML.toLowerCase();
        check.location = 'Point 1 to 9';
    } else if (listOf.targets[2].innerHTML === listOf.targets[4].innerHTML && listOf.targets[2].innerHTML === listOf.targets[6].innerHTML) {
        check.won = true;
        check.player = listOf.targets[2].innerHTML.toLowerCase();
        check.location = 'Point 3 to 7';
    };

    if (check.player === "" || check.player === undefined || check.player === null) {
        check.won = false;
        check.location = undefined;
        check.player = undefined;
    };

    return check;
};
