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

var quizData = new Map();
quizData[49] = makeQuizItem( 49, "", ["y", "g", "c", "cz", "b", "f", "w", "p", "r", "z"] );
quizData[50] = makeQuizItem( 50, "", ["c", "g", "b", "y", "cz", "w", "p", "z", "r", "f"] );
quizData[51] = makeQuizItem( 51, "", ["cz", "g", "c", "y", "b", "w", "z", "r", "f", "p"] );
quizData[52] = makeQuizItem( 52, "", ["b", "c", "g", "cz", "y", "p", "w", "r", "f", "z"] );
quizData[53] = makeQuizItem( 53, "", ["c", "y", "b", "cz", "g", "r", "w", "f", "z", "p"] );
quizData[54] = makeQuizItem( 54, "", ["b", "y", "g", "c", "cz", "p", "w", "r", "z", "f"] );
quizData[55] = makeQuizItem( 55, "", ["cz", "c", "b", "y", "g", "r", "p", "w", "z", "f"] );
quizData[56] = makeQuizItem( 56, "", ["g", "b", "cz", "c", "y", "r", "w", "f", "z", "p"] );
quizData[57] = makeQuizItem( 57, "", ["b", "cz", "c", "g", "y", "z", "p", "w", "f", "r"] );
quizData[58] = makeQuizItem( 58, "", ["cz", "g", "y", "b", "c", "w", "z", "r", "p", "f"] );
quizData[59] = makeQuizItem( 59, "", ["g", "c", "cz", "b", "y", "z", "w", "p", "f", "r"] );
quizData[60] = makeQuizItem( 60, "", ["g", "c", "cz", "b", "y", "w", "f", "r", "p", "z"] );
quizData[61] = makeQuizItem( 61, "", ["g", "c", "y", "b", "cz", "r", "f", "p", "z", "w"] );
quizData[62] = makeQuizItem( 62, "", ["g", "y", "c", "b", "cz", "f", "z", "r", "p", "w"] );
quizData[63] = makeQuizItem( 63, "", ["cz", "y", "c", "b", "g", "r", "z", "p", "w", "f"] );
quizData[64] = makeQuizItem( 64, "", ["cz", "c", "g", "y", "b", "z", "f", "p", "r", "w"] );
quizData[65] = makeQuizItem( 65, "", ["cz", "g", "y", "c", "b", "f", "p", "w", "r", "z"] );
quizData[66] = makeQuizItem( 66, "", ["g", "y", "b", "c", "cz", "r", "f", "w", "p", "z"] );
quizData[67] = makeQuizItem( 67, "", ["b", "c", "cz", "g", "y", "w", "r", "f", "z", "p"] );
quizData[68] = makeQuizItem( 68, "", ["c", "cz", "b", "y", "g", "f", "w", "p", "r", "z"] );
quizData[69] = makeQuizItem( 69, "", ["g", "cz", "c", "b", "y", "f", "z", "w", "r", "p"] );
quizData[70] = makeQuizItem( 70, "", ["y", "g", "c", "cz", "b", "z", "w", "f", "p", "r"] );
quizData[71] = makeQuizItem( 71, "", ["y", "g", "b", "c", "cz", "f", "w", "z", "r", "p"] );
quizData[72] = makeQuizItem( 72, "", ["b", "g", "y", "cz", "c", "r", "p", "z", "f", "w"] );
quizData[73] = makeQuizItem( 73, "", ["c", "cz", "g", "b", "y", "z", "p", "w", "r", "f"] );
quizData[74] = makeQuizItem( 74, "", ["y", "g", "c", "b", "cz", "z", "p", "f", "w", "r"] );
quizData[75] = makeQuizItem( 75, "", ["c", "b", "cz", "y", "g", "w", "p", "f", "z", "r"] );
quizData[76] = makeQuizItem( 76, "", ["y", "b", "c", "g", "cz", "r", "w", "f", "z", "p"] );
quizData[77] = makeQuizItem( 77, "", ["y", "cz", "b", "g", "c", "f", "r", "z", "p", "w"] );
quizData[78] = makeQuizItem( 78, "", ["c", "cz", "g", "b", "y", "f", "p", "r", "w", "z"] );
quizData[79] = makeQuizItem( 79, "", ["c", "b", "cz", "y", "g", "z", "r", "p", "f", "w"] );
quizData[80] = makeQuizItem( 80, "", ["cz", "g", "c", "b", "y", "p", "f", "w", "z", "r"] );
quizData[81] = makeQuizItem( 81, "", ["g", "b", "cz", "c", "y", "p", "f", "r", "z", "w"] );
quizData[82] = makeQuizItem( 82, "", ["c", "b", "g", "cz", "y", "f", "p", "w", "r", "z"] );
quizData[83] = makeQuizItem( 83, "", ["cz", "y", "g", "c", "b", "f", "z", "r", "w", "p"] );
quizData[84] = makeQuizItem( 84, "", ["y", "c", "g", "cz", "b", "z", "w", "r", "p", "f"] );
