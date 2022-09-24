var first = document.getElementById("dt1");
var second = document.getElementById("dt2");
var third = document.getElementById("dt3");

var para1 = document.getElementById("para1");
var para2 = document.getElementById("para2");
var para3 = document.getElementById("para3");





function fun1(){
    first.style.backgroundColor = "white";
    second.style.backgroundColor = "gray";
    third.style.backgroundColor = "gray";
    para1.style.transform="translateX(0%)"
    para2.style.transform="translateX(100%)"
    para3.style.transform="translateX(101%)"
}

function fun2(){
    second.style.backgroundColor = "white";
    first.style.backgroundColor = "gray";
    third.style.backgroundColor = "gray";
    // para1.style.display = "none";
    // para3.style.display = "none";
    // para2.style.display = "block";
    para1.style.transform="translateX(-100%)"
    para2.style.transform="translateX(0%)"
    para3.style.transform="translateX(100%)"


    
}

function fun3(){
    third.style.backgroundColor = "white";
    second.style.backgroundColor = "gray";
    first.style.backgroundColor = "gray";
    // para1.style.display = "none";
    // para2.style.display = "none";
    // para3.style.display = "block";
    para1.style.transform="translateX(-200%)"
    para2.style.transform="translateX(-100%)"
    para3.style.transform="translateX(0%)"
   
}