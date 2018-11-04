/*
c - czerwony
cz - ciemny zielony
g - granatowy
b - biały
y - żółty
f - fioletowy
p - pomarańcz
r - różowy
w - brązowy
z - zielony
*/

function makeQuizItem( aNum, aHint, aAnswer ) {
    return { num: aNum, hint: aHint, answer: aAnswer };
}

var quizData = [
makeQuizItem( 50, "", ["c", "g", "b", "y", "cz", "w", "p", "z", "r", "f"] ),
makeQuizItem( 51, "", ["cz", "g", "c", "y", "b", "w", "z", "r", "f", "p"] ),
makeQuizItem( 52, "", ["b", "c", "g", "cz", "y", "p", "w", "r", "f", "z"] ),
makeQuizItem( 55, "", ["cz", "c", "b", "y", "g", "r", "p", "w", "z", "f"] ),
makeQuizItem( 59, "", ["g", "c", "cz", "b", "y", "z", "w", "p", "f", "r"] ),
makeQuizItem( 60, "", ["g", "c", "cz", "b", "y", "w", "f", "r", "p", "z"] ),
makeQuizItem( 61, "", ["g", "c", "y", "b", "cz", "r", "f", "p", "z", "w"] ),
makeQuizItem( 62, "", ["g", "y", "c", "b", "cz", "f", "z", "r", "p", "w"] ),
makeQuizItem( 64, "", ["cz", "c", "g", "y", "b", "z", "f", "p", "r", "w"] ),
makeQuizItem( 65, "", ["cz", "g", "y", "c", "b", "f", "p", "w", "r", "z"] ),
makeQuizItem( 69, "", ["g", "cz", "c", "b", "y", "f", "z", "w", "r", "p"] ),
makeQuizItem( 72, "", ["b", "g", "y", "cz", "c", "r", "p", "z", "f", "w"] ),
makeQuizItem( 74, "", ["y", "g", "c", "b", "cz", "z", "p", "f", "w", "r"] ),
makeQuizItem( 75, "", ["c", "b", "cz", "y", "g", "w", "p", "f", "z", "r"] ),
makeQuizItem( 78, "", ["c", "cz", "g", "b", "y", "f", "p", "r", "w", "z"] ),
makeQuizItem( 79, "", ["c", "b", "cz", "y", "g", "z", "r", "p", "f", "w"] ),
makeQuizItem( 81, "", ["g", "b", "cz", "c", "y", "p", "f", "r", "z", "w"] ),
makeQuizItem( 82, "", ["c", "b", "g", "cz", "y", "f", "p", "w", "r", "z"] ),
makeQuizItem( 83, "", ["cz", "y", "g", "c", "b", "f", "z", "r", "w", "p"] ),
makeQuizItem( 84, "", ["y", "c", "g", "cz", "b", "z", "w", "r", "p", "f"])
];

