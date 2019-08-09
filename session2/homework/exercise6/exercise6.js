let a=prompt("Enter a")
let b=prompt("Enter b")
let c=prompt("Enter c")
const delta=b**2 - 4*a*c
if(delta<0){
    console.log("Phương trình vô nghiệm")
}
else if(delta=0){
    console.log ("Phương trình có nghiêm kép x1=x1="(-b)/(2*a))
}
else{
    console.log("Phương trình có 2 nghiệm phân biệt x="((-b)+Math.sqrt(delta))/2*a)
}