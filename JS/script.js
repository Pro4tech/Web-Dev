function disDate(){
    console.log("Hi There")
    alert('Date is Written');
    document.getElementById('p4').innerHTML=Date();
}
function sendAlert(message){
    alert(message);
}
function textdect(){
    alert('Hello There '+document.getElementById('i1').value)
}
function vanish(){
    document.write('Erased')
}
function replace(){
    document.write('<!DOCTYPE html><html lang="en"><head><title>Document</title></head><body><p>New Text000</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, veniam.</p></body></html>')
}