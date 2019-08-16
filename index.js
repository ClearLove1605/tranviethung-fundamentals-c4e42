//PART 1
//1.
// const daySo = ["5", "1", "8", "92", "-1", "30"]
// const x = prompt ("Nhập vào 1 số")
// if(daySo.includes(x)==false){
//     console.log("Not found in your list")
// }
// else{
//     console.log (daySo.indexOf(x))
// }


//2.
// const list = [5, 1, 8, 92, -1, 30]
// let total = 0
// for (let i = 0; i < list.length; i++){
//     total += Number(list[i])
// }
//     console.log (total)


//3.
// const numbers = prompt("Nhập vào dãy số cách nhau bởi dấu cách")
// console.log(numbers);
// const list = numbers.split(" ")
// console.log(list);

// let total = 0
// for (let i = 0; i < list.length; i++){
//      total += Number(list[i])
// }
// console.log(total)


//PART 2
// //4.
// const list = [5, 1, 8, 92, 7, 30]
// let chan = []
// for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 == 0) {
//         chan.push(list[i])
//     }
// }
// console.log(chan)


//5.
// const numbers = prompt ("Nhập vào dãy số cách nhau bởi dấu phẩy")
// const list = numbers.split(",")
// let chan = []
// for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 == 0) {
//         chan.push(list[i])
//     }
// }
// console.log(chan)


//6.
// const quan = ["ST", "BĐ", "BTL", "CG", "ĐĐ", "HBT"]
// const danSo = [150300, 247100, 333300, 266800, 420900, 318000]
// let min = danSo[0]
// let max = danSo[0]
// for(let i = 0; i<danSo.length; i++){
//     if (danSo[i] > max){
//         max = danSo[i]
//     }
//     if (danSo[i] < min){
//         min = danSo[i]
//     }
// }
// console.log(max)
// console.log(min)


//PART 4: 
//9. 
// const dienTich = [117.43, 9.224, 43.35, 12.04, 9.96, 10.09]
// const danSo = [150300, 247100, 333300, 266800, 420900, 318000]
// const matDo = []
// for (let i = 0; i<dienTich.length; i++){
//     matDo[i] = danSo[i]/dienTich[i]
//     matDo.push(matDo[i])
// }
// console.log(`${matDo}`)

// //10.
// let total = 0
// for (let i = 0; i < matDo.length; i++){
//      total += Number(matDo[i])
// }
// console.log("Mật độ cư dân trung bình là:",total/6)


// //PART 5:
// //11.
const hScores = [45, 67, 56, 78, 100, 69]

// //12.
// for (let i = 0; i<hScores.length; i++){
// console.log(`${i+1}. ${hScores[i]}`)
// }
// //13.
// const newScore = prompt("Điểm mới");
// hScores.push(newScore);
// for (let i = 0; i<hScores.length; i++){
//      console.log(`${i+1}. ${hScores[i]}`)
// }
//14.
for (let i = 0; i < hScores.length; i++){
for (let j = 0; j < hScores.length; j++ ){
    if(hScores[i] > hScores[j]){
        let temp = hScores[i];
        hScores[i] = hScores[j];
        hScores[j] = temp;
    }
}
}
console.log(hScores)
//15.
for(i=0; i < 5; i++){
     console.log(hScores[i]);
 }






