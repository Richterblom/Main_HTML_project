
function evenOdd(){

let number = prompt("Enter a number: ");

if(number % 2 == 0) {
    document.write("This number is even.");
}else {
    document.write("This number is odd.");
    }
}
setTimeout(function(){
    window.location.reload();
 }, 6000);