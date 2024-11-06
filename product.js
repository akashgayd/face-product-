let bgMain = document.getElementById("bg-main")

let prOne = document.getElementById("prOne")
let prTwo = document.getElementById("prTwo")
let prTree = document.getElementById("prTree")
let prFour = document.getElementById("prFour")
let prFive = document.getElementById("prFive")
let prSix = document.getElementById("prSix");
let remobtn = document.getElementById("remobtn")


function onShowProduct(){

    prOne.classList.add("product-visible")
     prTwo.classList.add("product-visible")
     prTree.classList.add("product-visible")
    prFour.classList.add("product-visible")
    prFive.classList.add("product-visible")
    prSix.classList.add("product-visible")
    remobtn.style.display = "none";
}

function feedBackForm(){

alert("verified your email for get notification")
   location.reload();
    
}

let mainProductVisible = document.getElementById("main-product-visible")
let productOne = document.getElementById("bauty-product-One");
let productTwo = document.getElementById("bauty-product-Two");
let productTree = document.getElementById("bauty-product-Tree");
let productFour = document.getElementById("bauty-product-Four");
let productFive = document.getElementById("bauty-product-Five");
let productSix = document.getElementById("bauty-product-Six");



mainProductVisible.addEventListener('mouseenter',()=>{



    productOne.classList.add("bauty-product")
    productTwo.classList.add("bauty-product")
    productTree.classList.add("bauty-product")
    productFour.classList.add("bauty-product")
    productFive.classList.add("bauty-product")
    productSix.classList.add("bauty-product")


})

function firstProduct(){

    let productDetails = document.createElement("div");
    mainProductVisible.appendChild(productDetails);
    productDetails.classList.add("product-datails");

    mainProductVisible.style.height = "90%" 
    


    productOne.style.display = "none";
     productTwo.style.display = "none";
      productTree.style.display = "none";
       productFour.style.display = "none";
        productFive.style.display = "none";
         productSix.style.display = "none";


// add img tag for show more related itm for user and itm details

         let imgShowBtn = document.createElement("div");
         productDetails.appendChild(imgShowBtn);
         imgShowBtn.classList.add("img_show");

         let firstImg = document.createElement("img");
         imgShowBtn.appendChild(firstImg);
         firstImg.src = "aseets/product/product1.jpg";
         firstImg.style.width = "100%";
         firstImg.style.height = "85%";


         // add onather container for varities off how many itm  and details

         let increessEl = document.createElement("div");
         imgShowBtn.appendChild(increessEl);
         increessEl.classList.add("incressEl");


         let btnElOne = document.createElement("button");
         increessEl.appendChild(btnElOne);
         btnElOne.classList.add("btnEl-one")


         
         let btnElTwo = document.createElement("button");
         increessEl.appendChild(btnElTwo);
         btnElTwo.classList.add("btnEl-Two")


         
         let btnElTree = document.createElement("button");
         increessEl.appendChild(btnElTree);
         btnElTree.classList.add("btnEl-Tree")


         
         let btnElFour = document.createElement("button");
         increessEl.appendChild(btnElFour);
         btnElFour.classList.add("btnEl-Four")


         
         let btnElFive = document.createElement("button");
         increessEl.appendChild(btnElFive);
         btnElFive.classList.add("btnEl-Five")



         btnElOne.addEventListener('mousemove',()=>{

            firstImg.src = "aseets/product/product1.jpg"
         })


         btnElTwo.addEventListener('mousemove',()=>{

            firstImg.src = "aseets/ske2.jpg";
         })


         btnElTree.addEventListener('mousemove',()=>{

            firstImg.src = "aseets/ske3.jpg";
         })

         
         btnElFour.addEventListener('mousemove',()=>{

            firstImg.src = "aseets/ske4.jpg";
         })


         btnElFive.addEventListener('mousemove',()=>{

            firstImg.src = "aseets/ske5.webp";
         })







         
         



         let imgDatails = document.createElement("div");
         imgDatails.classList.add("img-datails")
         productDetails.appendChild(imgDatails);



         let productName = document.createElement("h2");
         imgDatails.appendChild(productName);
         productName.textContent = "leone' handwash premium  CLASSIC COLLECTION";



         let myPara  = document.createElement("p");
         imgDatails.appendChild(myPara);
         myPara.textContent = "Return the brush to the base of your hand. Move the brush upwards along the left curve of your  the entire side is coated in polish. (Repeat the same for the Right Side of the  Repeat this process on each . Allow the polish to dry before adding another coa ";



         let priceCont = document.createElement("div");
         imgDatails.appendChild(priceCont);
         priceCont.classList.add("price-cont");



         let buttonElMinus = document.createElement("button");
         buttonElMinus.textContent = "-";
         priceCont.appendChild(buttonElMinus);


         let countEl = document.createElement("p")
         countEl.textContent = 1;
         priceCont.appendChild(countEl);



         let buttonElPlus = document.createElement("button");
         buttonElPlus.textContent = "+";
         priceCont.appendChild(buttonElPlus);

         let ruppes = document.createElement("b")
         ruppes.textContent = "₹";
         priceCont.appendChild(ruppes);


         let totalPrice = document.createElement("span");
         totalPrice.textContent = 999;
         priceCont.appendChild(totalPrice);


         let result = 1;

buttonElMinus.addEventListener('click',()=>{

   

   result = result-1;

  

  if(result < 1 ){

    alert("please add atlest one")
  }
  else{
    countEl.textContent  = result;

    totalPrice.textContent  = 999*result;
  

  }


 
})
         

buttonElPlus.addEventListener('click',()=>{

    result = result+1;
if(result>0){

    countEl.textContent = result;

    totalPrice.textContent = 999*result;

     }
 })

 let buyButton = document.createElement("button");
 imgDatails.appendChild(buyButton);
 buyButton.classList.add("buy-button");
 buyButton.textContent ="shop now";






let verifiedEl = document.createElement("div");
verifiedEl.classList.add("verified-El");
imgDatails.appendChild(verifiedEl);


let inputEl = document.createElement("input");
inputEl.type="email";
inputEl.placeholder = "enter email";
verifiedEl.appendChild(inputEl);



let textAriaEl = document.createElement("textarea");
verifiedEl.appendChild(textAriaEl);
textAriaEl.placeholder = "enter your address";


let verifiedBtn = document.createElement("button");
verifiedEl.appendChild(verifiedBtn);
  verifiedBtn.textContent = "verified";


  buyButton.addEventListener('click',()=>{

   verifiedEl.classList.add("new-verified");


  })









verifiedBtn.addEventListener('click',()=>{

  
   verifiedEl.classList.remove("new-verified");


   
  
let orderConfirmMsg = document.createElement("div");
orderConfirmMsg.classList.add("confrim-order");
imgDatails.appendChild(orderConfirmMsg);









let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

orderConfirmMsg.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

orderConfirmMsg.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

orderConfirmMsg.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

orderConfirmMsg.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})

   


})
 



 

}




function secoundProduct(){

   let productDetails = document.createElement("div");
   mainProductVisible.appendChild(productDetails);
   productDetails.classList.add("product-datails");

   mainProductVisible.style.height = "90%" 
   


   productOne.style.display = "none";
    productTwo.style.display = "none";
     productTree.style.display = "none";
      productFour.style.display = "none";
       productFive.style.display = "none";
        productSix.style.display = "none";


// add img tag for show more related itm for user and itm details

        let imgShowBtn = document.createElement("div");
        productDetails.appendChild(imgShowBtn);
        imgShowBtn.classList.add("img_show");

        let firstImg = document.createElement("img");
        imgShowBtn.appendChild(firstImg);
        firstImg.src = "aseets/product/product2.jpg";
        firstImg.style.width = "100%";
        firstImg.style.height = "85%";


        // add onather container for varities off how many itm  and details

        let increessEl = document.createElement("div");
        imgShowBtn.appendChild(increessEl);
        increessEl.classList.add("incressEl");


        let btnElOne = document.createElement("button");
        increessEl.appendChild(btnElOne);
        btnElOne.classList.add("nail-btn1")
     


        
        let btnElTwo = document.createElement("button");
        increessEl.appendChild(btnElTwo);
        btnElTwo.classList.add("nail-btn2")
        


        
        let btnElTree = document.createElement("button");
        increessEl.appendChild(btnElTree);
        btnElTree.classList.add("nail-btn3")
       


        
        let btnElFour = document.createElement("button");
        increessEl.appendChild(btnElFour);
        btnElFour.classList.add("nail-btn4")
       


        
        let btnElFive = document.createElement("button");
        increessEl.appendChild(btnElFive);
        btnElFive.classList.add("nail-btn5")

        


        btnElOne.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/product2.jpg"
        })


        btnElTwo.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/nail2.jpg";
        })


        btnElTree.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/nail3.jpg";
        })

        
        btnElFour.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/nail4.jpg";
        })


        btnElFive.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/nail5.jpg";
        })







        
        



        let imgDatails = document.createElement("div");
        imgDatails.classList.add("img-datails")
        productDetails.appendChild(imgDatails);



        let productName = document.createElement("h2");
        imgDatails.appendChild(productName);
        productName.textContent = "O.P.I Nail Lacquer 15 ml nail polish Long-Lasting";



        let myPara  = document.createElement("p");
        imgDatails.appendChild(myPara);
        myPara.textContent = "Return the brush to the base of your hand. Move the brush upwards along the left curve of your  the entire side is coated in polish. (Repeat the same for the Right Side of the  Repeat this process on each . Allow the polish to dry before adding another coa ";



        let priceCont = document.createElement("div");
        imgDatails.appendChild(priceCont);
        priceCont.classList.add("price-cont");



        let buttonElMinus = document.createElement("button");
        buttonElMinus.textContent = "-";
        priceCont.appendChild(buttonElMinus);


        let countEl = document.createElement("p")
        countEl.textContent = 1;
        priceCont.appendChild(countEl);



        let buttonElPlus = document.createElement("button");
        buttonElPlus.textContent = "+";
        priceCont.appendChild(buttonElPlus);

        let ruppes = document.createElement("b")
        ruppes.textContent = "₹";
        priceCont.appendChild(ruppes);


        let totalPrice = document.createElement("span");
        totalPrice.textContent = 479;
        priceCont.appendChild(totalPrice);


        let result = 1;

buttonElMinus.addEventListener('click',()=>{

  

  result = result-1;

 

 if(result < 1 ){

   alert("please add atlest one")
 }
 else{
   countEl.textContent  = result;

   totalPrice.textContent  = 479*result;
 

 }



})
        

buttonElPlus.addEventListener('click',()=>{

   result = result+1;
if(result>0){

   countEl.textContent = result;

   totalPrice.textContent = 479*result;

    }
})

let buyButton = document.createElement("button");
imgDatails.appendChild(buyButton);
buyButton.classList.add("buy-button");
buyButton.textContent ="shop now";






let verifiedEl = document.createElement("div");
verifiedEl.classList.add("verified-El");
imgDatails.appendChild(verifiedEl);


let inputEl = document.createElement("input");
inputEl.type="email";
inputEl.placeholder = "enter email";
verifiedEl.appendChild(inputEl);



let textAriaEl = document.createElement("textarea");
verifiedEl.appendChild(textAriaEl);
textAriaEl.placeholder = "enter your address";


let verifiedBtn = document.createElement("button");
verifiedEl.appendChild(verifiedBtn);
 verifiedBtn.textContent = "verified";


 buyButton.addEventListener('click',()=>{

  verifiedEl.classList.add("new-verified");


 })









verifiedBtn.addEventListener('click',()=>{

 
  verifiedEl.classList.remove("new-verified");


  
 
let orderConfirmMsg = document.createElement("div");
orderConfirmMsg.classList.add("confrim-order");
imgDatails.appendChild(orderConfirmMsg);









let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

orderConfirmMsg.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

orderConfirmMsg.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

orderConfirmMsg.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

orderConfirmMsg.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})

  


})






}








function thirdProduct(){

   let productDetails = document.createElement("div");
   mainProductVisible.appendChild(productDetails);
   productDetails.classList.add("product-datails");

   mainProductVisible.style.height = "90%" 
   


   productOne.style.display = "none";
    productTwo.style.display = "none";
     productTree.style.display = "none";
      productFour.style.display = "none";
       productFive.style.display = "none";
        productSix.style.display = "none";


// add img tag for show more related itm for user and itm details

        let imgShowBtn = document.createElement("div");
        productDetails.appendChild(imgShowBtn);
        imgShowBtn.classList.add("img_show");

        let firstImg = document.createElement("img");
        imgShowBtn.appendChild(firstImg);
        firstImg.src = "aseets/product/product3.jpg";
        firstImg.style.width = "100%";
        firstImg.style.height = "85%";


        // add onather container for varities off how many itm  and details

        let increessEl = document.createElement("div");
        imgShowBtn.appendChild(increessEl);
        increessEl.classList.add("incressEl");


        let btnElOne = document.createElement("button");
        increessEl.appendChild(btnElOne);
        btnElOne.classList.add("cream-btn1")
     


        
        let btnElTwo = document.createElement("button");
        increessEl.appendChild(btnElTwo);
        btnElTwo.classList.add("cream-btn2")
        


        
        let btnElTree = document.createElement("button");
        increessEl.appendChild(btnElTree);
        btnElTree.classList.add("cream-btn3")
       


        
        let btnElFour = document.createElement("button");
        increessEl.appendChild(btnElFour);
        btnElFour.classList.add("cream-btn4")
       


        
        let btnElFive = document.createElement("button");
        increessEl.appendChild(btnElFive);
        btnElFive.classList.add("cream-btn5")

        


        btnElOne.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/product3.jpg"
        })


        btnElTwo.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/cream2.jpg";
        })


        btnElTree.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/cream3.jpg";
        })

        
        btnElFour.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/cream4.jpg";
        })


        btnElFive.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/crram5.jpg";
        })







        
        



        let imgDatails = document.createElement("div");
        imgDatails.classList.add("img-datails")
        productDetails.appendChild(imgDatails);



        let productName = document.createElement("h2");
        imgDatails.appendChild(productName);
        productName.textContent = "FACES CANADA Peaches N Cream Tinted Moisturizer";



        let myPara  = document.createElement("p");
        imgDatails.appendChild(myPara);
        myPara.textContent = "EASY TO BLEND: FACESCANADA Peaches N Cream Tinted Moisturizer is a blessing for all skincare and makeup lovers! Its soft milk-like texture easily spreads through your face and gives your skin an instant glow. ";



        let priceCont = document.createElement("div");
        imgDatails.appendChild(priceCont);
        priceCont.classList.add("price-cont");



        let buttonElMinus = document.createElement("button");
        buttonElMinus.textContent = "-";
        priceCont.appendChild(buttonElMinus);


        let countEl = document.createElement("p")
        countEl.textContent = 1;
        priceCont.appendChild(countEl);



        let buttonElPlus = document.createElement("button");
        buttonElPlus.textContent = "+";
        priceCont.appendChild(buttonElPlus);

        let ruppes = document.createElement("b")
        ruppes.textContent = "₹";
        priceCont.appendChild(ruppes);


        let totalPrice = document.createElement("span");
        totalPrice.textContent = 899;
        priceCont.appendChild(totalPrice);


        let result = 1;

buttonElMinus.addEventListener('click',()=>{

  

  result = result-1;

 

 if(result < 1 ){

   alert("please add atlest one")
 }
 else{
   countEl.textContent  = result;

   totalPrice.textContent  = 899*result;
 

 }



})
        

buttonElPlus.addEventListener('click',()=>{

   result = result+1;
if(result>0){

   countEl.textContent = result;

   totalPrice.textContent = 899*result;

    }
})

let buyButton = document.createElement("button");
imgDatails.appendChild(buyButton);
buyButton.classList.add("buy-button");
buyButton.textContent ="shop now";






let verifiedEl = document.createElement("div");
verifiedEl.classList.add("verified-El");
imgDatails.appendChild(verifiedEl);


let inputEl = document.createElement("input");
inputEl.type="email";
inputEl.placeholder = "enter email";
verifiedEl.appendChild(inputEl);



let textAriaEl = document.createElement("textarea");
verifiedEl.appendChild(textAriaEl);
textAriaEl.placeholder = "enter your address";


let verifiedBtn = document.createElement("button");
verifiedEl.appendChild(verifiedBtn);
 verifiedBtn.textContent = "verified";


 buyButton.addEventListener('click',()=>{

  verifiedEl.classList.add("new-verified");


 })









verifiedBtn.addEventListener('click',()=>{

 
  verifiedEl.classList.remove("new-verified");


  
 
let orderConfirmMsg = document.createElement("div");
orderConfirmMsg.classList.add("confrim-order");
imgDatails.appendChild(orderConfirmMsg);









let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

orderConfirmMsg.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

orderConfirmMsg.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

orderConfirmMsg.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

orderConfirmMsg.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})

  


})






}




function forthProduct(){

   let productDetails = document.createElement("div");
   mainProductVisible.appendChild(productDetails);
   productDetails.classList.add("product-datails");

   mainProductVisible.style.height = "90%" 
   


   productOne.style.display = "none";
    productTwo.style.display = "none";
     productTree.style.display = "none";
      productFour.style.display = "none";
       productFive.style.display = "none";
        productSix.style.display = "none";


// add img tag for show more related itm for user and itm details

        let imgShowBtn = document.createElement("div");
        productDetails.appendChild(imgShowBtn);
        imgShowBtn.classList.add("img_show");

        let firstImg = document.createElement("img");
        imgShowBtn.appendChild(firstImg);
        firstImg.src = "aseets/product/product4.jpg";
        firstImg.style.width = "100%";
        firstImg.style.height = "85%";


        // add onather container for varities off how many itm  and details

        let increessEl = document.createElement("div");
        imgShowBtn.appendChild(increessEl);
        increessEl.classList.add("incressEl");


        let btnElOne = document.createElement("button");
        increessEl.appendChild(btnElOne);
        btnElOne.classList.add("loyl-btn1")
     


        
        let btnElTwo = document.createElement("button");
        increessEl.appendChild(btnElTwo);
        btnElTwo.classList.add("loyl-btn2")
        


        
        let btnElTree = document.createElement("button");
        increessEl.appendChild(btnElTree);
        btnElTree.classList.add("loyl-btn3")
       


        
        let btnElFour = document.createElement("button");
        increessEl.appendChild(btnElFour);
        btnElFour.classList.add("loyl-btn4")
       


        
        let btnElFive = document.createElement("button");
        increessEl.appendChild(btnElFive);
        btnElFive.classList.add("loyl-btn5")

        


        btnElOne.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/product4.jpg"
        })


        btnElTwo.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/olay.jpg";
        })


        btnElTree.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/olay2.jpg";
        })

        
        btnElFour.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/olay3.jpg";
        })


        btnElFive.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/olay4.jpg";
        })







        
        



        let imgDatails = document.createElement("div");
        imgDatails.classList.add("img-datails")
        productDetails.appendChild(imgDatails);



        let productName = document.createElement("h2");
        imgDatails.appendChild(productName);
        productName.textContent = "Olay Total Effects Day Cream with SPF 15";



        let myPara  = document.createElement("p");
        imgDatails.appendChild(myPara);
        myPara.textContent = "EASY TO BLEND: FACESCANADA Peaches N Cream Tinted Moisturizer is a blessing for all skincare and makeup lovers! Its soft milk-like texture easily spreads through your face and gives your skin an instant glow.";



        let priceCont = document.createElement("div");
        imgDatails.appendChild(priceCont);
        priceCont.classList.add("price-cont");



        let buttonElMinus = document.createElement("button");
        buttonElMinus.textContent = "-";
        priceCont.appendChild(buttonElMinus);


        let countEl = document.createElement("p")
        countEl.textContent = 1;
        priceCont.appendChild(countEl);



        let buttonElPlus = document.createElement("button");
        buttonElPlus.textContent = "+";
        priceCont.appendChild(buttonElPlus);

        let ruppes = document.createElement("b")
        ruppes.textContent = "₹";
        priceCont.appendChild(ruppes);


        let totalPrice = document.createElement("span");
        totalPrice.textContent = 720;
        priceCont.appendChild(totalPrice);


        let result = 1;

buttonElMinus.addEventListener('click',()=>{

  

  result = result-1;

 

 if(result < 1 ){

   alert("please add atlest one")
 }
 else{
   countEl.textContent  = result;

   totalPrice.textContent  = 720*result;
 

 }



})
        

buttonElPlus.addEventListener('click',()=>{

   result = result+1;
if(result>0){

   countEl.textContent = result;

   totalPrice.textContent = 720*result;

    }
})

let buyButton = document.createElement("button");
imgDatails.appendChild(buyButton);
buyButton.classList.add("buy-button");
buyButton.textContent ="shop now";






let verifiedEl = document.createElement("div");
verifiedEl.classList.add("verified-El");
imgDatails.appendChild(verifiedEl);


let inputEl = document.createElement("input");
inputEl.type="email";
inputEl.placeholder = "enter email";
verifiedEl.appendChild(inputEl);



let textAriaEl = document.createElement("textarea");
verifiedEl.appendChild(textAriaEl);
textAriaEl.placeholder = "enter your address";


let verifiedBtn = document.createElement("button");
verifiedEl.appendChild(verifiedBtn);
 verifiedBtn.textContent = "verified";


 buyButton.addEventListener('click',()=>{

  verifiedEl.classList.add("new-verified");


 })









verifiedBtn.addEventListener('click',()=>{

 
  verifiedEl.classList.remove("new-verified");


  
 
let orderConfirmMsg = document.createElement("div");
orderConfirmMsg.classList.add("confrim-order");
imgDatails.appendChild(orderConfirmMsg);









let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

orderConfirmMsg.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

orderConfirmMsg.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

orderConfirmMsg.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

orderConfirmMsg.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})

  


})






}







function fiveProduct(){

   let productDetails = document.createElement("div");
   mainProductVisible.appendChild(productDetails);
   productDetails.classList.add("product-datails");

   mainProductVisible.style.height = "90%" 
   


   productOne.style.display = "none";
    productTwo.style.display = "none";
     productTree.style.display = "none";
      productFour.style.display = "none";
       productFive.style.display = "none";
        productSix.style.display = "none";


// add img tag for show more related itm for user and itm details

        let imgShowBtn = document.createElement("div");
        productDetails.appendChild(imgShowBtn);
        imgShowBtn.classList.add("img_show");

        let firstImg = document.createElement("img");
        imgShowBtn.appendChild(firstImg);
        firstImg.src = "aseets/product/product5.jpg";
        firstImg.style.width = "100%";
        firstImg.style.height = "85%";


        // add onather container for varities off how many itm  and details

        let increessEl = document.createElement("div");
        imgShowBtn.appendChild(increessEl);
        increessEl.classList.add("incressEl");


        let btnElOne = document.createElement("button");
        increessEl.appendChild(btnElOne);
        btnElOne.classList.add("lotas-btn1")
     


        
        let btnElTwo = document.createElement("button");
        increessEl.appendChild(btnElTwo);
        btnElTwo.classList.add("lotas-btn2")
        


        
        let btnElTree = document.createElement("button");
        increessEl.appendChild(btnElTree);
        btnElTree.classList.add("lotas-btn3")
       


        
        let btnElFour = document.createElement("button");
        increessEl.appendChild(btnElFour);
        btnElFour.classList.add("lotas-btn4")
       


        
        let btnElFive = document.createElement("button");
        increessEl.appendChild(btnElFive);
        btnElFive.classList.add("lotas-btn5")

        


        btnElOne.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/product5.jpg"
        })


        btnElTwo.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/lotas1.jpg";
        })


        btnElTree.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/lotas2.jpg";
        })

        
        btnElFour.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/lotas3.jpg";
        })


        btnElFive.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/lotas4.jpg";
        })







        
        



        let imgDatails = document.createElement("div");
        imgDatails.classList.add("img-datails")
        productDetails.appendChild(imgDatails);



        let productName = document.createElement("h2");
        imgDatails.appendChild(productName);
        productName.textContent = "Lotus Herbals WhiteGlow Skin Whitening And Brightening";



        let myPara  = document.createElement("p");
        imgDatails.appendChild(myPara);
        myPara.textContent = "Grape Extract: Act as exfoliator & helps active ingredients penetrate into the skin. Mulberry Extract: Reduces melanin production. Milk Enzymes: Blocks melanin pathways. Saxifrage Extract: Act as an anti-oxidant & prevents damage from UV radiation.Grape Extract: Act as exfoliator & helps active";



        let priceCont = document.createElement("div");
        imgDatails.appendChild(priceCont);
        priceCont.classList.add("price-cont");



        let buttonElMinus = document.createElement("button");
        buttonElMinus.textContent = "-";
        priceCont.appendChild(buttonElMinus);


        let countEl = document.createElement("p")
        countEl.textContent = 1;
        priceCont.appendChild(countEl);



        let buttonElPlus = document.createElement("button");
        buttonElPlus.textContent = "+";
        priceCont.appendChild(buttonElPlus);

        let ruppes = document.createElement("b")
        ruppes.textContent = "₹";
        priceCont.appendChild(ruppes);


        let totalPrice = document.createElement("span");
        totalPrice.textContent = 859;
        priceCont.appendChild(totalPrice);


        let result = 1;

buttonElMinus.addEventListener('click',()=>{

  

  result = result-1;

 

 if(result < 1 ){

   alert("please add atlest one")
 }
 else{
   countEl.textContent  = result;

   totalPrice.textContent  = 859*result;
 

 }



})
        

buttonElPlus.addEventListener('click',()=>{

   result = result+1;
if(result>0){

   countEl.textContent = result;

   totalPrice.textContent = 859*result;

    }
})

let buyButton = document.createElement("button");
imgDatails.appendChild(buyButton);
buyButton.classList.add("buy-button");
buyButton.textContent ="shop now";






let verifiedEl = document.createElement("div");
verifiedEl.classList.add("verified-El");
imgDatails.appendChild(verifiedEl);


let inputEl = document.createElement("input");
inputEl.type="email";
inputEl.placeholder = "enter email";
verifiedEl.appendChild(inputEl);



let textAriaEl = document.createElement("textarea");
verifiedEl.appendChild(textAriaEl);
textAriaEl.placeholder = "enter your address";


let verifiedBtn = document.createElement("button");
verifiedEl.appendChild(verifiedBtn);
 verifiedBtn.textContent = "verified";


 buyButton.addEventListener('click',()=>{

  verifiedEl.classList.add("new-verified");


 })









verifiedBtn.addEventListener('click',()=>{

 
  verifiedEl.classList.remove("new-verified");


  
 
let orderConfirmMsg = document.createElement("div");
orderConfirmMsg.classList.add("confrim-order");
imgDatails.appendChild(orderConfirmMsg);









let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

orderConfirmMsg.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

orderConfirmMsg.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

orderConfirmMsg.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

orderConfirmMsg.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})

  


})






}





function sixProduct(){

   let productDetails = document.createElement("div");
   mainProductVisible.appendChild(productDetails);
   productDetails.classList.add("product-datails");

   mainProductVisible.style.height = "90%" 
   


   productOne.style.display = "none";
    productTwo.style.display = "none";
     productTree.style.display = "none";
      productFour.style.display = "none";
       productFive.style.display = "none";
        productSix.style.display = "none";


// add img tag for show more related itm for user and itm details

        let imgShowBtn = document.createElement("div");
        productDetails.appendChild(imgShowBtn);
        imgShowBtn.classList.add("img_show");

        let firstImg = document.createElement("img");
        imgShowBtn.appendChild(firstImg);
        firstImg.src = "aseets/product/product7.jpg";
        firstImg.style.width = "100%";
        firstImg.style.height = "85%";


        // add onather container for varities off how many itm  and details

        let increessEl = document.createElement("div");
        imgShowBtn.appendChild(increessEl);
        increessEl.classList.add("incressEl");


        let btnElOne = document.createElement("button");
        increessEl.appendChild(btnElOne);
        btnElOne.classList.add("mashine-btn1")
     


        
        let btnElTwo = document.createElement("button");
        increessEl.appendChild(btnElTwo);
        btnElTwo.classList.add("mashine-btn2")
        


        
        let btnElTree = document.createElement("button");
        increessEl.appendChild(btnElTree);
        btnElTree.classList.add("mashine-btn3")
       


        
        let btnElFour = document.createElement("button");
        increessEl.appendChild(btnElFour);
        btnElFour.classList.add("mashine-btn4")
       


        
        let btnElFive = document.createElement("button");
        increessEl.appendChild(btnElFive);
        btnElFive.classList.add("mashine-btn5")

        


        btnElOne.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/product7.jpg"
        })


        btnElTwo.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/mashine1.jpg";
        })


        btnElTree.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/mashine2.jpg";
        })

        
        btnElFour.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/mashine3.jpg";
        })


        btnElFive.addEventListener('mousemove',()=>{

           firstImg.src = "aseets/product/mashine4.jpg";
        })







        
        



        let imgDatails = document.createElement("div");
        imgDatails.classList.add("img-datails")
        productDetails.appendChild(imgDatails);



        let productName = document.createElement("h2");
        imgDatails.appendChild(productName);
        productName.textContent = "Beauty On The Fly | Hair Finishing Stick | Anti Frizz Baby Hair Fixer";



        let myPara  = document.createElement("p");
        imgDatails.appendChild(myPara);
        myPara.textContent = "Anti-Flyaway Wand: Our Hair Finishing stick is your go-to for conquering frizz, flyaways, and baby hairs in a snap. Get ready to flaunt any hairstyle with just a few swipes.active";



        let priceCont = document.createElement("div");
        imgDatails.appendChild(priceCont);
        priceCont.classList.add("price-cont");



        let buttonElMinus = document.createElement("button");
        buttonElMinus.textContent = "-";
        priceCont.appendChild(buttonElMinus);


        let countEl = document.createElement("p")
        countEl.textContent = 1;
        priceCont.appendChild(countEl);



        let buttonElPlus = document.createElement("button");
        buttonElPlus.textContent = "+";
        priceCont.appendChild(buttonElPlus);

        let ruppes = document.createElement("b")
        ruppes.textContent = "₹";
        priceCont.appendChild(ruppes);


        let totalPrice = document.createElement("span");
        totalPrice.textContent = 299;
        priceCont.appendChild(totalPrice);


        let result = 1;

buttonElMinus.addEventListener('click',()=>{

  

  result = result-1;

 

 if(result < 1 ){

   alert("please add atlest one")
 }
 else{
   countEl.textContent  = result;

   totalPrice.textContent  = 299*result;
 

 }



})
        

buttonElPlus.addEventListener('click',()=>{

   result = result+1;
if(result>0){

   countEl.textContent = result;

   totalPrice.textContent = 299*result;

    }
})

let buyButton = document.createElement("button");
imgDatails.appendChild(buyButton);
buyButton.classList.add("buy-button");
buyButton.textContent ="shop now";






let verifiedEl = document.createElement("div");
verifiedEl.classList.add("verified-El");
imgDatails.appendChild(verifiedEl);


let inputEl = document.createElement("input");
inputEl.type="email";
inputEl.placeholder = "enter email";
verifiedEl.appendChild(inputEl);



let textAriaEl = document.createElement("textarea");
verifiedEl.appendChild(textAriaEl);
textAriaEl.placeholder = "enter your address";


let verifiedBtn = document.createElement("button");
verifiedEl.appendChild(verifiedBtn);
 verifiedBtn.textContent = "verified";


 buyButton.addEventListener('click',()=>{

  verifiedEl.classList.add("new-verified");


 })









verifiedBtn.addEventListener('click',()=>{

 
  verifiedEl.classList.remove("new-verified");


  
 
let orderConfirmMsg = document.createElement("div");
orderConfirmMsg.classList.add("confrim-order");
imgDatails.appendChild(orderConfirmMsg);









let imgEl = document.createElement("img");
imgEl.src = "aseets/done png.png";

orderConfirmMsg.appendChild(imgEl)
imgEl.classList.add("done-logo");




// create a h1 for add thank uhh massage 



let thankMgs = document.createElement("h1");

orderConfirmMsg.appendChild(thankMgs);
thankMgs.textContent = "thank you";



// create a paragraph tag for order submit massge


let orderMsg = document.createElement("p");

orderConfirmMsg.appendChild(orderMsg);
orderMsg.textContent = "your order will be submit wait for confirmation!!!";




// create a ok buuton for back main  to the main page

let okButton = document.createElement("button");

okButton.classList.add("ok-button");

orderConfirmMsg.appendChild(okButton);

okButton.textContent = "OK"


// click the ok button visible the main product page
okButton.addEventListener('click',()=>{

location.reload();

})

  


})






}