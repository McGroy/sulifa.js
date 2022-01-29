// const words =["1 - камень","2 - ножницы","3 - бумага"]
// let userValue = Number(prompt("Сыграем в Су-Ли-Фа?) Выбери цифру от 1 до 3. 1 - Камень, 2 - Ножницы, 3 - Бумага"))
// let progValue = Math.ceil(Math.random() * 3)
// alert(`Запомни:1 - камень","2 - ножницы","3 - бумага. Бот выбрал цифру: ${progValue}`)
// if (userValue === 1 && progValue > 1 || userValue === 2 && progValue === 3) {
//     alert("Победа! Бот повержен)")
// }
// else if (userValue === 3 && progValue < 3 || userValue === 2 && progValue === 1) {
//     alert("Никогда не сдавайся! ")
// } else {
//     alert("Игра была ровна, играли два г#вна")
// }

while (confirm("Хотите сыграть в игру \"Камень, ножницы, бумага\"?")) {
    let userPrompt = prompt("Введите свой вариант:", "").toLowerCase().trim();

    while (!isValidPrompt(userPrompt)) {
        userPrompt = prompt("Неверное значение, повторите ввод пожалуйста:", "")
        .toLowerCase()
        .trim();
    }
    const compChoice = getCompChoice();
    const winMessage = getWinner(userPrompt, compChoice);    

    alert(`Ваш вариант - "${userPrompt}", вариант компьютера - "${compChoice}", ${winMessage}!`);
}

function isValidPrompt(prompt) {
    if (prompt === "камень" || prompt === "ножницы" || prompt === "бумага") {
        return true;
    } else {
        return false;
    }
}

function getCompChoice() {
    let choicesArr = [];
    for (let i = 0; i < 25; i++) {
        choicesArr.push("камень");        
        choicesArr.push("ножницы");
        choicesArr.push("бумага");
        choicesArr.push("ножницы");
    }
    return choicesArr[Math.floor(choicesArr.length * Math.random())];
}

function getWinner(firstChoice, secondChoice) {
    if (firstChoice === secondChoice) {
        return "ничья";
    }

    if (firstChoice === "камень" && secondChoice === "ножницы"
     || firstChoice === "ножницы" && secondChoice === "бумага"
     || firstChoice === "бумага" && secondChoice === "камень") {
        return " Вы выиграли";
    } else {
        return " компьютер выиграл";
    }
}

