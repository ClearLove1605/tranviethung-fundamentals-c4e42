const month = prompt("enter a month (1-12)")
if (2<=month && month<=4){
    console.log("Spring")
}
else if(5<=month && month<=7){
        console.log ("Summer")
}
else if(8<=month && month<=10){
    console.log ("Fall")
}
else if(month==1||month==11||month==12){
    console.log("Winter")
}
else {
    console.log("error month")
}