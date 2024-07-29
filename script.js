function add(){
    var text=document.getElementById("text").value;
    var para1=document.getElementById("para1");
    var para2=document.getElementById("para2");
    count++;
    para1.innerHTML=count;
    para2.innerHTML=50-count;
    if(count>=50){
        alert("limit exist")
    }
        
}
let count=0;
