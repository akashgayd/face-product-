let myPrice = document.getElementById("my-price")
let userEmail = document.getElementById("user-email") 
let userNum = document.getElementById("user-num") 
let ErrorOne = document.getElementById("error1") 
let ErrorTwo = document.getElementById("error2") 


function myValue(){

    myPrice.classList.add("my-hover")


 }


function reloedBtn(){

    if(userEmail.value === ""){

        ErrorOne.textContent = "please fill the field"



        }
        if(userNum.value === ""){

            ErrorTwo.textContent = "please fill the field"

    }
    else{
        alert("order submited")
        location.reload();
    }
}




let mainCross = document.createElement("button");
mainCross.classList.add("cross-myPrice")
mainCross.textContent = "X";
myPrice.appendChild(mainCross);





mainCross.addEventListener('click',()=>{
   myPrice.classList.remove("my-hover")
   
   ErrorOne.textContent = "";
   ErrorTwo.textContent = "";

})

let userEnM = document.getElementById("user-email3") 

let userEnNum = document.getElementById("user-email3") 

let userEnTextAria = document.getElementById("add-some") 

let myInq = document.getElementById("my-inquiry");


let ErrorTree = document.getElementById("error3") 
let ErrorFour = document.getElementById("error4") 


function myInquiry(){

    myInq.classList.add("my-inque")
}

function reloedBtnTwo(){

    if(userEnNum.value === "" ){
 
        ErrorFour.textContent = "please fill the feild";

      
    }
    if(userEnM.value === ""){

        ErrorTree.textContent = "please fill the feild";

    }
    else{
        alert("send it")
        location.reload();
    }

}

let crossBtn =  document.createElement("button");
 crossBtn.classList.add("cross-btn")
 crossBtn.textContent = "X";
 myInq.appendChild(crossBtn);





 crossBtn.addEventListener('click',()=>{
    myInq.classList.remove("my-inque")

    ErrorTree.textContent = "";
    ErrorFour.textContent = "";

 })


 let lastEmail = document.getElementById("last-email")
 let lastNum = document.getElementById("last-num")


 function lastValue(){

    if(lastEmail.value === ""){

        if(lastNum.value === ""){

            alert("please add the value")
        }
        else{

            alert("requast send")
        }
    }
 }

 