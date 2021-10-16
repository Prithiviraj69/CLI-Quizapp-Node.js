const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Welcome to the Anime Game of Dragon Ball Z\n")
var name = "";
r1.question("Enter User Name: ", (nm) => {
    name = nm;
    console.log("Welcome " + name + "\n");
    quiz();
});

var i = 0;
var score = 0;
const question = ["What is the name of Goku's Father?", "What is the highest level of super saiyan that Vegeta can reach?", "Which race does Piccolo belong to?", "What is the name of the first Super Saiyan God?", "What is the name of Pan's grandfather?"];
const option = [
    ["Gohan", "Radtiz", "Goten", "Bardock"],
    ["Level 1", "Level 2", "Level 3", "Level 4"],
    ["Human", "Saiyan", "Namekian", "Ape"],
    ["Yamoshi", "Beerus", "Bardock", "Prince Vegeta"],
    ["Vegeta", "Goku", "Krilin", "Buu"]
];

var quiz = () => {
    if (i === 0) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "4") {
                score += 5;
                console.log("Right Answer!!" + "\ Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Wrong answer!!" + "\nAnswer is ->" + option[i][0] + "\tScore :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 1) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "2") {
                score += 5;
                console.log("Right Answer!!" + "\ Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Wrong answer!!" + "\nAnswer is ->" + option[i][0] + "\tScore :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 2) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("Right Answer!!" + "\ Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Wrong answer!!" + "\nAnswer is ->" + option[i][0] + "\tScore :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 3) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "1") {
                score += 5;
                console.log("Right Answer!!" + "\ Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Wrong answer!!" + "\nAnswer is ->" + option[i][0] + "\tScore :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 4) {
        console.log(question[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + "-" + option[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "2") {
                score += 5;
                console.log("Right Answer!!" + "\ Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Wrong answer!!" + "\nAnswer is ->" + option[i][0] + "\tScore :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else {
        console.log("Final Score Of " + name + ": " + score + "/" + (question.length * 5));
        r1.close();
    }
}