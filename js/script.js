function changeBackground1(){
    var element = document.getElementById('first');
    //element.style.background="#17a2b8";
    element.setAttribute('class','alert alert-info text-white');
}
function changeBackground2(){
    var element = document.getElementById('second');
    //element.style.background="green";
    element.setAttribute('class','alert alert-success text-white');
}
function changeBackground3(){
    var element = document.getElementById('third');
    //element.style.background="red";
    element.setAttribute('class','alert alert-danger text-white');
   
}
function increaseFont(){
    var elements = document.getElementsByClassName('alert');
    for(i=0;i<elements.length;++i){
        elements[i].setAttribute('class','alert alert-warning h1');
    }
}
function setJumbotronClass(){
    var element = document.getElementById('rgb');
    element.setAttribute('class','jumbotron');
    //element.setAttribute('class','alert alert-primary text-white');
}
function rgb(){
    var red = document.getElementsByClassName('red');
    for(i=0;i<red.length;++i){
        red[i].style.color="red";
    }
    var green = document.getElementsByClassName('green');
    for(i=0;i<green.length;++i){
        green[i].style.color="green";
    }
    var blue = document.getElementsByClassName('blue');
    for(i=0;i<blue.length;++i){
        blue[i].style.color="blue";
    }

}
function setValues(){
    var dropdowns = document.getElementsByTagName('select');
    for(i=0;i<dropdowns.length;++i){
        for(j=0;j<256;j++){
            option=document.createElement('option');
            option.text=option.value=j;
            dropdowns[i].appendChild(option);
        }
       

    }
}
function cmy(){
    var cyan = document.getElementsByClassName('cyan');
    for(i=0;i<cyan.length;++i){
        cyan[i].style.color="cyan";
    }
    var magenta = document.getElementsByClassName('magenta');
    for(i=0;i<magenta.length;++i){
        magenta[i].style.color="magenta";
    }
    var yellow = document.getElementsByClassName('yellow');
    for(i=0;i<yellow.length;++i){
        yellow[i].style.color="yellow";
    }

}
function displayRGBColors(){
    var red=parseInt(document.getElementById("red").value);
    var green=parseInt(document.getElementById("green").value);
    var blue=parseInt(document.getElementById("blue").value);
var color=hex(red,green,blue);
var floatvalue=float(red,green,blue);
var table, tbody,tr;
var data=[];
data.push(floatvalue);
data.push(color);
data.push("");
table=document.getElementById("output");
tbody=document.createElement("tbody");
tr=document.createElement("tr");
for(i=0;i<3;i++){
    var td= document.createElement("td");
    var cell=document.createTextNode(data[i]);
    td.appendChild(cell);
    tr.appendChild(td);
    if(i==2)
    td.style.background= color;
}
tbody.appendChild(tr);
table.appendChild(tbody);
}

function hex(r,g,b){
    r= r.toString(16);
    g=g.toString(16);
    b= b.toString(16);
    if(r.length==1)
    r="0"+r;
    if(g.length==1)
    g="0"+g;
    if(b.length==1)
    b= "0"+b;
    return "#"+r+g+b;
}
function float(r,g,b){
r= r/255.0;
g=g/255.0;
b=b/255.0;
return"("+a.toFixed(2)+","+b.toFixed(2)+","+c.toFixed(2)+")";

}
function display(r,g,b){
    background.style(r,g,b);
}
function displaycmycolors(){
    var cyan=parseInt(document.getElementById("cyan").value);
    var magenta=parseInt(document.getElementById("magenta").value);
    var yellow=parseInt(document.getElementById("yellow").value);
    var cyan= 255-cyan;
    var magenta=255-magenta;
    var yellow=255-yellow;
var color=hex(cyan,magenta,yellow);
var floatvalue=float(cyan,magenta,yellow);
var table, tbody,tr;
var data=[];
data.push(floatvalue);
data.push(color);
data.push("");
table=document.getElementById("output");
tbody=document.createElement("tbody");
tr=document.createElement("tr");
for(i=0;i<3;i++){
    var td= document.createElement("td");
    var cell=document.createTextNode(data[i]);
    td.appendChild(cell);
    tr.appendChild(td);
    if(i==2)
    td.style.background= color;
}
tbody.appendChild(tr);
table.appendChild(tbody);
}
function generateRandomColors() 
{
    table=document.getElementById('table');
    addRow(table,'RGB float value', 'RGB hexadecimal value','display');
    for(i=0;i<10;i++){
        r=Math.floor(Math.random()*256);
        g=Math.floor(Math.random()*256);
        b=Math.floor(Math.random()*256);
        hexavalue=hex(r,g,b);
        floatvalue=float(r,g,b);
        addRow(table,floatvalue,hexavalue,'');
    }
}
function addCell(tr,val){
    var td=document.createElement('td');
    td.innerHTML=val;
    tr.appendChild(td);
}
function addRow(tb1, val_1,val_2,val_3){
    var tr=document.createElement('tr');
    addCell(tr,val_1);
    addCell(tr,val_2);
    addCell(tr,val_3);
    tr.style.background=val_2;
    tb1.appendChild(tr);
}
function displaysafecolors(){}
    
     