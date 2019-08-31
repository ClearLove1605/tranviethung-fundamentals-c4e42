// const person = ["Nam", 99, 170, 60, "Hanoi", 0, 1]
//C R U D


//Create
// const film = {
//     title: "Tuyệt đỉnh kungfu",
//     director: "Châu Tinh Trì",
//     actors: ["Châu Tinh Trì", "Huỳnh Thánh Y"], 
// }


// //Read
// // console.log(film);
// // console.log(film["actors"]);
// // console.log(film.title);
// for(let key in film){
// console.log(key, film[key]);
}


// //Update
// film.title = "Kungfu hustle" // key đã tồn tại
// film.year = 2019 // key chưa tồn tại
// const actorsArray = film.actors
// console.log(film)
// console.log(actorsArray[0])


// //Delete
// delete film.actors
// console.log(film);


// const obj = {
//     cmn: "cơm mẹ nấu",
//     sml: "sấp mặt luôn",
//     cc: "con chim",
// }
// const word = prompt("Nhập từ");
// if (word == "cmn"){
//     console.log(obj.cmn)
// }
// if (word == "sml"){
//     console.log(obj.sml)
// }
// if (word == "cc"){
//     console.log(obj.cc)
// }
// else{
//     const ask = prompt("Bạn muốn thêm từ này không?")
//     if (ask =="yes"){
//     mean = prompt ("TỪ này nghĩa là gì")
//         obj[word] = mean
//     }
//     else {
//         console.log("bye bye")
//     }
//     console.log(obj)
// }
// const dictionary = {
//     cc: "con ca",
//     dm: "dinh menh",
//     vcl: " vo co lo",
//     sml: "sap mat luon",
//     c4e: "code for every one"
// }
// const word = prompt(" nhập từ muốn tra")
// if (word in dictionary){
//     console.log(dictionary[word]);
// }
// else {
//     const meaning = prompt(" không có từ này, hãy cho tôi biết nghĩa của nó")
//     dictionary[word] = meaning
//     console.log(dictionary)
// }


// const bangLuong = [
//     {
//        name: "Nam",
//        role: "bồi bàn",
//        hour: 10,
//        heSoLuong: 5,
//     },
//     {
//         name: "Duc",
//         role: " trông xe",
//         hour: 15,
//         heSoLuong: 3,
//     }
// ]
// const newMem = {
//     name: "Huy",
//     role: "quản lí",
//     hour: 18,
//     heSoLuong: 10,
// }
// bangLuong.push (newMem)


// const luongNam = 30*10*5
// console.log("Luong Nam", luongNam)
// const luongDuc = 30*15*3
// console.log("Luong Đức", luongDuc)
// const luongHuy = 30*18*10
// console.log ("Luong Huy", luongHuy)


// const tienPhaiTra = luongNam + luongDuc + luongHuy
// console.log("Tiền phải trả", tienPhaiTra)
// let haveToPay = 0
// for (let i=0; i<bangLuong.length; i++){
//     console.log(`${bangLuong[i].name} ${bangLuong[i].role}`);
//     let total = (bangLuong[i].hour *bangLuong[i].heSoLuong*30);
//     bangLuong[i].luongThang = total
//     haveToPay +=total
//     console.log(`Luong 1 thang ${total}`)
// }
// console.log(`So tien nha hang phai tra ${haveToPay}`);
// console.log(bangLuong)

