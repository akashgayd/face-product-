
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let explore = document.getElementById("explore");
let submit = document.getElementById("submit");
let wargingMsg = document.getElementById("warning");
let sPassword = document.getElementById("sPassword");
let nextWar = document.getElementById("nextWar");



let formLogin = document.getElementById("formLogin");
let formSing = document.getElementById("formSing");


function loginPage(){
   formLogin.classList.add("login-change")
}

function signupPage(){
   
    formSing.classList.add("sign_form")
}

function removeClass(){
    formLogin.classList.remove("login-change")
}
function removeSub(){
    formSing.classList.remove("sign_form")

}

sPassword.addEventListener("input",()=>{

    if(sPassword.value.length >0){

        wargingMsg.style.display = "block";
        wargingMsg.style.color = "red"
    }
    if(sPassword.value.length === 0){

        wargingMsg.style.display = "none";
    }
    if(sPassword.value.length >4 && sPassword.value.length <8){

       wargingMsg.style.color = "chocolate";

       nextWar.textContent = "password is to weak";
    }
    if(sPassword.value.length >=8){


        wargingMsg.style.color = "green";

        nextWar.textContent = "password is strong";

    }
    
})





let productEl = document.getElementById("multi-product");

let productOne = document.getElementById("product-1");
let productTwo = document.getElementById("product-2");
let productThree = document.getElementById("product-3");



productEl.addEventListener('mousemove',()=>{

    productEl.classList.add("product-el");

    productOne.classList.add("product-One");

    productTwo.classList.add("product-One");

    // productThree.classList.add("product-One")
})




let imgOne = document.getElementById("img1");
let imgTwo = document.getElementById("img2");
let imgTree = document.getElementById("img3");
let imgFour = document.getElementById("img4");
let imgFive = document.getElementById("img5");

let productNail = document.getElementById("productNail");


productNail.addEventListener('mousemove',()=>{

    imgOne.classList.add("imgOne");
    imgTwo.classList.add("imgOne");
    imgTree.classList.add("imgOne");
    imgFour.classList.add("imgOne");
    imgFive.classList.add("imgOne");


})



let washImg = document.getElementById("wash-img");

let firstBtn = document.getElementById("firstBtn");

let secondBtn = document.getElementById("secondBtn");
let thirdBtn = document.getElementById("thirdBtn");
let forthBtn = document.getElementById("forthBtn");
let para = document.getElementById("para");
let disCont = document.getElementById("dis-cont")
let perDis = document.getElementById("pr-dis");

function firstBigInt(){

perDis.classList.add("pr-dis");
imgOne.style.display = "none";
imgTwo.style.display = "none"
imgTree.style.display = "none"
imgFour.style.display = "none"
imgFive.style.display = "none"

firstBtn.src = "aseets/ske2.jpg";

secondBtn.src = "aseets/ske3.jpg";

thirdBtn.src = "aseets/ske4.jpg";

forthBtn.src = "aseets/ske5.webp";




para.textContent = "What are some facts about handwashing Handwashing Facts Clean Hands Handwashing with soap could protect about  out of every  young children who get sick with diarrhea and almost  young children with respiratory infections like pneumonia Although people around the world clean their hands with water very few use soap to wash their hands" 




let buttonEl = document.createElement("button");
disCont.appendChild(buttonEl);
buttonEl.classList.add("button-el")

para.style.textAlign="justify"

let heading = document.createElement("h5");

buttonEl.appendChild(heading);

heading.textContent = "buy now";






buttonEl.addEventListener('click',()=>{

    divContainer.classList.add("thank-you-visible")
})


// div container create for order submit popup

let divContainer = document.createElement("div");

disCont.appendChild(divContainer);
divContainer.classList.add("oder-sub-cont")



// add oder done lodo create img tag

let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

divContainer.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

divContainer.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

divContainer.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

divContainer.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})






firstBtn.addEventListener('mousemove',()=>{

    washImg.src = "aseets/ske2.jpg";
 
    
  

   
})


secondBtn.addEventListener('mousemove',()=>{

    washImg.src = "aseets/ske3.jpg";

   

    

})

   

thirdBtn.addEventListener('mousemove',()=>{

    washImg.src = "aseets/ske4.jpg";
  
    

})


forthBtn.addEventListener('mousemove',()=>{

    washImg.src = "aseets/ske5.webp";
   
})


}





function secongFaceBtn(){

    
    perDis.classList.add("pr-dis");
    imgOne.style.display = "none";
    imgTwo.style.display = "none"
    imgTree.style.display = "none"
    imgFour.style.display = "none"
    imgFive.style.display = "none"
    
    firstBtn.src = "aseets/h2-polish-03-list-img (1).jpg";
    secondBtn.src = "aseets/polish2.webp"
    thirdBtn.src = "aseets/polish3.webp"
    forthBtn.src = "aseets/polish4.jpg"

    
    washImg.src = "aseets/h2-polish-03-list-img (1).jpg";
    
    
    para.textContent = "deal characteristics of a nail polish 1 It should have proper viscosity wetting and flow properties. 2 It should have uniform colour. 3 It should have good gloss and good adhesive properties. 4 It should have sufficient flexibility so that it does not crack or become brittle."  
    

    let buttonEl = document.createElement("button");
disCont.appendChild(buttonEl);
buttonEl.classList.add("button-el")

para.style.textAlign="justify"

let heading = document.createElement("h5");

buttonEl.appendChild(heading);

heading.textContent = "buy now"

    firstBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/h2-polish-03-list-img (1).jpg";
    







        

buttonEl.addEventListener('click',()=>{

    divContainer.classList.add("thank-you-visible")
})


// div container create for order submit popup

let divContainer = document.createElement("div");

disCont.appendChild(divContainer);
divContainer.classList.add("oder-sub-cont")



// add oder done lodo create img tag

let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

divContainer.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

divContainer.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

divContainer.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

divContainer.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})



        


        

       
       
    })

    secondBtn.addEventListener('mousemove',()=>{
        washImg.src = "aseets/polish2.webp";

    })

    thirdBtn.addEventListener('mousemove',()=>{


        washImg.src = "aseets/polish3.webp";


    })

    
    forthBtn.addEventListener('mousemove',()=>{


        washImg.src = "aseets/polish4.jpg";


    })


    
    
     
    
    }
    


    function thirdBtnFun(){



        
    perDis.classList.add("pr-dis");
    imgOne.style.display = "none";
    imgTwo.style.display = "none"
    imgTree.style.display = "none"
    imgFour.style.display = "none"
    imgFive.style.display = "none"
    
    firstBtn.src = "aseets/h2-portfolio-list-img-1.jpg";
    secondBtn.src = "aseets/br1.jpg"
    thirdBtn.src = "aseets/br2.jpg"
    forthBtn.src = "aseets/br3.jpg"

    
    washImg.src = "aseets/h2-portfolio-list-img-1.jpg";


    para.textContent = ">Prime Members Can Enjoy Unlimited Free Shipping   Early Access To Lightning Deals and More. Enhance Your Shopping Experience  Early Access To Lightning Deals and More. Enhance Your Shopping Experience  With Our Personalised Recommendations. Best Deals. Low Prices.  Top Brands. Great Offers. Huge Selection. Easy & Fast Delivery."  
                 
            
                 
    
    let buttonEl = document.createElement("button");
disCont.appendChild(buttonEl);
buttonEl.classList.add("button-el")

para.style.textAlign="justify"

let heading = document.createElement("h5");

buttonEl.appendChild(heading);

heading.textContent = "buy now"
    








buttonEl.addEventListener('click',()=>{

    divContainer.classList.add("thank-you-visible")
})


// div container create for order submit popup

let divContainer = document.createElement("div");

disCont.appendChild(divContainer);
divContainer.classList.add("oder-sub-cont")



// add oder done lodo create img tag

let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

divContainer.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

divContainer.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

divContainer.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

divContainer.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})








    firstBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/h2-portfolio-list-img-1.jpg";









    })

    secondBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/br1.jpg";

    })

    thirdBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/br2.jpg";

    })

    forthBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/br3.jpg";

    })

    }



    function forthBtnFun(){




    
        perDis.classList.add("pr-dis");
        imgOne.style.display = "none";
        imgTwo.style.display = "none"
        imgTree.style.display = "none"
        imgFour.style.display = "none"
        imgFive.style.display = "none"
        
        firstBtn.src = "aseets/Product-Nourshing-cream-Main-img.jpg";
        secondBtn.src = "aseets/face cream 2.jpg"
        thirdBtn.src = "aseets/face3.avif"
        forthBtn.src = "aseets/face4.avif"
    
        
        washImg.src = "aseets/Product-Nourshing-cream-Main-img.jpg";
    
    
        para.textContent = ">Face cream is a skincare treatment that nourishes the skin. It contains moisturizing and mild ingredients that keep your skin fresh, hydrated, and free of skin problems. When applied to the face, it protects against UV rays and environmental toxins while also maintaining skin hygiene."  



          
    let buttonEl = document.createElement("button");
    disCont.appendChild(buttonEl);
    buttonEl.classList.add("button-el")
    
    para.style.textAlign="justify"
    
    let heading = document.createElement("h5");
    
    buttonEl.appendChild(heading);
    
    heading.textContent = "buy now"
        
    





    

buttonEl.addEventListener('click',()=>{

    divContainer.classList.add("thank-you-visible")
})


// div container create for order submit popup

let divContainer = document.createElement("div");

disCont.appendChild(divContainer);
divContainer.classList.add("oder-sub-cont")



// add oder done lodo create img tag

let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

divContainer.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

divContainer.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

divContainer.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

divContainer.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})






        firstBtn.addEventListener('mousemove',()=>{

            washImg.src = "aseets/Product-Nourshing-cream-Main-img.jpg";
            
        })


        
        secondBtn.addEventListener('mousemove',()=>{

            washImg.src = "aseets/face cream 2.jpg";
            
        })

          
        thirdBtn.addEventListener('mousemove',()=>{

            washImg.src = "aseets/face3.avif";
            
        })

          
        forthBtn.addEventListener('mousemove',()=>{

            washImg.src = "aseets/face4.avif";
            
        })

    }






    function fiveBtnFun(){





    
        perDis.classList.add("pr-dis");
        imgOne.style.display = "none";
        imgTwo.style.display = "none"
        imgTree.style.display = "none"
        imgFour.style.display = "none"
        imgFive.style.display = "none"
        
        firstBtn.src = "aseets/Home-2-product-list-Shop-Single-Main-img-05.jpg";
        secondBtn.src = "aseets/face drop2.avif"
        thirdBtn.src = "aseets/face drop 3.avif"
        forthBtn.src = "aseets/face drop 4.png"
    
        
        washImg.src = "aseets/Home-2-product-list-Shop-Single-Main-img-05.jpg";
    
    
        para.textContent = "Facial droop occurs when your facial muscles are not working properly. Your face may not look symmetrical, and you may have trouble moving your eyes and/or mouth. Facial droop can affect one or both sides of your faceEnhance Your Shopping Experience  Early Access To Lightning Deals and More. Enhance Your Shopping Experience  With Our Personalised Recommendations. Best Deals. Low Prices.  Top Brands. Great Offers. Huge Selection. Easy & Fast Delivery."  



          
    let buttonEl = document.createElement("button");
    disCont.appendChild(buttonEl);
    buttonEl.classList.add("button-el")
    
    para.style.textAlign="justify"
    
    let heading = document.createElement("h5");
    
    buttonEl.appendChild(heading);
    
    heading.textContent = "buy now"
        




    

buttonEl.addEventListener('click',()=>{

    divContainer.classList.add("thank-you-visible")
})


// div container create for order submit popup

let divContainer = document.createElement("div");

disCont.appendChild(divContainer);
divContainer.classList.add("oder-sub-cont")



// add oder done lodo create img tag

let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

divContainer.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

divContainer.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

divContainer.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

divContainer.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})










    firstBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/Home-2-product-list-Shop-Single-Main-img-05.jpg";
    
    })


    secondBtn.addEventListener('mousemove',()=>{

        washImg.src = "aseets/face drop2.avif";
    })
    
thirdBtn.addEventListener('mousemove',()=>{

    washImg.src = "aseets/face drop 3.avif";

})

forthBtn.addEventListener('mousemove',()=>{

    washImg.src = "aseets/face drop 4.png";

})


    }



    let officeImg = document.getElementById("office-img");

    let myOfice = document.getElementById("office-fees")



    myOfice.addEventListener('mousemove',()=>{


        officeImg.classList.add("my-office")
    })


    let newDate = new Date("31 dec, 2024 00: 00: 00").getTime();

    let setday = setInterval(()=>{
 let now = new Date().getTime();


 let distance = newDate - now;





 let days = Math.floor(distance / (1000 * 60 * 60 * 24));
let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((distance % (1000 * 60)) / 1000);



document.getElementById("day").innerHTML = days;

document.getElementById("hour").innerHTML = hours;

document.getElementById("minutes").innerHTML = minutes;

document.getElementById("secound").innerHTML = seconds;

    },1000)

    if(setday<0){

        clearInterval(setday)


        document.getElementById("day").innerHTML = "00";

        document.getElementById("hour").innerHTML = "00";
        
        document.getElementById("minutes").innerHTML = "00";
        
        document.getElementById("secound").innerHTML = "00";


    }
    


   