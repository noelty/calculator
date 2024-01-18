let key = document.getElementsByClassName("key");
let result = document.getElementById('result');
let isLastEventEquals = false;

let keyFunction = (key) => key.addEventListener("click", () =>{
    let a = key.innerText;
    switch (a) {
        case 'RESET':
            result.innerText = "";
            break;
        case 'DEL' :
            result.innerText = result.innerText.slice(0,-1);
            break;
        case '=':
            let modifiedResult = result.innerText.replace("x","*");
            result.innerText = eval(modifiedResult);
            isLastEventEquals = true;
            if(result.innerText == "undefined"){
                result.innerText = "";
            }
            switch (result.innerText) {
                case "undefined":
                    result.innerText = "";
                    break;
            }
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            result.innerText+=a;
            isLastEventEquals = false;
            break;
        default:
            if(isLastEventEquals == true){
                result.innerText = "";
            }
            isLastEventEquals = false;
            result.innerText+=a;
            break;
    }
    

});

keyFunction(key[0]);
keyFunction(key[1]);
keyFunction(key[2]);
keyFunction(key[3]);
keyFunction(key[4]);
keyFunction(key[5]);
keyFunction(key[6]);
keyFunction(key[7]);
keyFunction(key[8]);
keyFunction(key[9]);
keyFunction(key[10]);
keyFunction(key[11]);
keyFunction(key[12]);
keyFunction(key[13]);
keyFunction(key[14]);
keyFunction(key[15]);
keyFunction(key[16]);
keyFunction(key[17]);
keyFunction(key[18]);

class Calculator {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }
    add(){
       return this.a + this.b; 
    }
    subtract(){
        return this.a - this.b;
    }
}

// function test() {
//     console.log("hello world");
// }