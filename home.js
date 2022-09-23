function fun1(){
    document.getElementById("dt1").style.backgroundColor = "white";
    document.getElementById("dt2").style.backgroundColor = "gray";
    document.getElementById("dt3").style.backgroundColor = "gray";
    // document.getElementsById("img_para para3").style.display="block";
    // document.getElementsById("para").style.display="none";


   
}
function fun2(){
    document.getElementById("dt2").style.backgroundColor = "white";
    document.getElementById("dt1").style.backgroundColor = "gray";
    document.getElementById("dt3").style.backgroundColor = "gray";
    document.getElementById("para1").style.display = "none";
    document.getElementById("para3").style.display = "none";
    document.getElementById("para2").style.display = "block";


   
}
function fun3(){
    document.getElementById("dt3").style.backgroundColor = "white";
    document.getElementById("dt2").style.backgroundColor = "gray";
    document.getElementById("dt1").style.backgroundColor = "gray";
    // document.getElementsById("img_para para3").style.opacity="1";
    document.getElementById("para1").style.display = "none";
    document.getElementById("para2").style.display = "none";
    document.getElementById("para3").style.display = "block";

   
}