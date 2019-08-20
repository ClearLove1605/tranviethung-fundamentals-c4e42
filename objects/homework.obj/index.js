//2.


// quest = {
//     question: "How many legs an octopus has?",
//     answer: {
//       1: "One leg",
//       2: "Two legs",
//       3: "Four legs",
//       4: "Eight legs",
//     },
//     correctAnswer : "Eight legs",
// }


// //3.
// console.log(`${quest.question}\n
// 1. ${quest.answer[1]}\n
// 2. ${quest.answer[2]}\n
// 3. ${quest.answer[3]}\n
// 4. ${quest.answer[4]}\n`);


// //4.
// const choses = prompt ("Choses your answer (1, 2, 3 or 4)?")
// if (choses == 4){
//     console.log("Hura!!!");
// }
// else {
//     console.log("Not a correct answer!");   
// };


//5, 6:
let questArray = [
quest = {
    question: "How many legs a spider has?",
    answer: {
      1: "One leg",
      2: "Two legs",
      3: "Four legs",
      4: "Eight legs",
    },
    correctAnswer : "Eight legs",
},
quest = {
    question: "How many legs a cockroach has?",
    answer: {
      1: "Two leg",
      2: "Four legs",
      3: "Six legs",
      4: "Eight legs",
    },
    correctAnswer : "Six legs",
},
quest = {
    question: "How many legs an ant has?",
    answer: {
      1: "Two leg",
      2: "Four legs",
      3: "Six legs",
      4: "Eight legs",
    },
    correctAnswer : "Six legs",
},
quest = {
    question: "How many legs a shrimp has?",
    answer: {
      1: "Two leg",
      2: "Four legs",
      3: "Eight legs",
      4: "Sixteen legs",
    },
    correctAnswer : "Sixteen legs",
}
]
ans = []
for ( let i=0; i<questArray.length; i++){
    let choses = prompt(`Question ${i+1}: ${questArray[i].quest}\n
1: ${questArray[i].answer[1]}\n
2: ${questArray[i].answer[2]}\n
3: ${questArray[i].answer[3]}\n
4: ${questArray[i].answer[4]}`);
if (choses == questArray[i].correctAnswer){
    ans.push(choses)
}
}
console.log(ans)

//7.
console.log("Correct:", ans.length)

//8.
console.log("Correct:",ans.length/4*100, "%" );







