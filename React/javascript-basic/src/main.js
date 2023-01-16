class Rectangle{
    constructor(height,width){
        this.height=height;
        this.width=width;
    }
}
const square= new Rectangle(12,12)
console.log(square)

function stringLenght(str){
  let length=str.length
  return length
}
console.log(stringLenght("Raka"))

const hello=()=>{
  
  return "Hello Word";
}
console.log(hello())

const hello1=(str)=>{
  
  return "Hello Word "+ str;
}

const hello7 = ()=>{
    let myvar=12343555
    return(
        <div>
            <p>My Hello 7 : {myvar}</p>
        </div>
    )
} 

const bigger10 = (item)=>{
    return item>10;
} 

//  Destruction

const hobbies = ["baca", "ngoding", "tidur"]

const [hobby,pekerjaan,lelap]=hobbies

console.o
