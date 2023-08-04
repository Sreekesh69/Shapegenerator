let count=1;
let temp=1;
function fun_click() {
    var shape=document.getElementsByName('value');
for (let i = 0; i < shape.length; i++) {
    if(shape[i].checked)
        ans=shape[i].value;
}
const peter=document.querySelector('#num');
let val=parseInt(peter.value);
    if(ans==='circle'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const output=document.querySelector('#output');
            const selectedcolor=document.querySelector("#color");
            const finalcolor=selectedcolor.value;
            output.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:100px; heigth:700px; border-radius:50%; background:${finalcolor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:15px;");
        }
    }
    else if(ans=='square'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const output=document.querySelector('#output');
            const selectedcolor=document.querySelector("#color");
            const finalcolor=selectedcolor.value;
            output.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:100px; heigth:700px;  background:${finalcolor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:15px;")
        }
    }
    else if(ans=='rectangle'){
        for (let i = count ; i <=val; i++) {
            const cir=document.createElement("div");
            const para=document.createElement("div");
            const output=document.querySelector('#output');
            const selectedcolor=document.querySelector("#color");
            const finalcolor=selectedcolor.value;
            output.appendChild(cir);
            cir.appendChild(para);
            cir.setAttribute("style",`width:250px; heigth:700px;  background:${finalcolor};`);
            para.innerHTML=`${temp++}`;
            para.setAttribute("style","display:flex; align-items:center; justify-content:center; font-size:10px; height:100px;")
        }
    }    
}
