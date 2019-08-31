// //PART 1
// const shop = {
//     HP: 20,
//     DELL: 50,
//     MACBOOK: 12,
//     ASUS: 30,
// }
// // console.log(shop.MACBOOK);
// // let type = prompt(" nhập hãng máy tính")
// // console.log(shop[type]);

// //PART 2
// // shop.TOSHIBA = 10;
// let laptop = prompt("Nhập hãng máy tính");
// let amount = prompt("Nhập số lượng");
// shop[laptop] = Number(amount);
// shop.DELL = 50+10
// shop.MACBOOK = 12-10
// console.log(shop);

// //PART 3

// for(let key in shop){
//     console.log(key,":", shop[key]);
// }
// let total = 0
// for (let key in shop){
// total += Number(shop[key])
// }
// console.log(total)

// shop.FUJITSU = 15;
// shop.ALIENWARE = 5;


// //PART 4
// const shop2 = {
//     HP: 600,
//     DELL: 650,
//     MACBOOK: 12000,
//     ASUS: 400,
//     ACER: 350,
//     TOSHIBA: 600,
//     FUJITSU: 900,
//     ALIENWARE: 1000,
// }
// console.log(shop2.ASUS)
// let type = prompt ("Nhập hãng máy")
// console.log("Giá:", shop2[type]);

//PART 5
// console.log("Đơn hàng 5 máy ASUS giá:", 400*5);
// let laptop = prompt ("Nhập hãng máy")
// let amount = prompt ("Nhập số lượng")
// console.log("Giá:", shop2[laptop]*Number(amount) );

//16.
// let xuat = prompt ("Chọn hãng muốn xuất")
// let soLuong = prompt ("Chọn số lượng")
// shop[xuat] = shop[xuat]-Number(soLuong)
// console.log(shop);
//17.
// let xuat = prompt ("Nhập hãng máy và số lượng muốn xuất cáh nhau bởi dấu:")


////PART 6
// let total=0
// for (let key in shop){
//     let price = shop[key]*shop2[key]
//     total+=price
// }
// console.log(total)



// //PART 7 
// const champ = {
//     Name: "Light",
//     Age: 17,
//     Strength: 8,
//     Defense: 10,
//     HP: 100,
//     Backpack: ["Shield","Bread Loaf" ],
//     Gold: 100,
//     Level: 2,
// }
// champ.Gold += 50
// champ["Backpack"].push("FlintStone")
// console.log(champ)
// champ.Pocket = ["MonsterDex ","Flashlight"]


//PART 8
const listSkill = {
    Skill1: {
        Name: "Tackle",
        MinimumLevel: 1,
        Damage: 5,
        HitRate: 0.3,

    },
    Skill2:  {
        Name: "Quick attack",
        MinimumLevel: 2,
        Damage: 3,
        HitRate: 0.5,
    },
    Skill3: {
        Name: "Strong Kick",
        MinimumLevel: 4,
        Damage: 9,
        HitRate: 0.2
    },
}
// console.log(listSkill)
for (let key in listSkill){
    console.log(listSkill[key].Name)
}





























