let a=prompt("Enter a")
let b=prompt("Enter b")
let c=prompt("Enter c")
const delta=b**2 - 4*a*c
if(delta<0){
    console.log("Phương trình vô nghiệm")
}
else if(delta==0){
    console.log ("Phương trình có nghiêm kép x1=x2=", Number(-b) /Number(2*a))
}
else{
    console.log("Phương trình có 2 nghiệm phân biệt x1=",
    (Number(-b)+Number(Math.sqrt(delta))/Number(2*a)), "x2=", (Number(-b)-Number(Math.sqrt(delta))/Number(2*a)))
}
