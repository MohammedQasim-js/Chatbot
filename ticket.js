let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px"){
        menuList.style.maxHeight = "300px";
        menuList.style.zIndex = "10";
    }
    else{
        menuList.style.maxHeight = "0px"
    }
}


// ticket counter

const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    price = document.querySelector('.price'),
    num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
      price.innerText = a * 350;
    });
    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
        price.innerText = a * 350;
      }
    });