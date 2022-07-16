function integer(a,b) {

    if(typeof a !== 'number' || typeof b!== 'number' ) {
        document.write("Please add 2 valid numbers");
    } else {
      if(a==b) {
        document.write("Two equals number");
       }  else {
        document.write("The larger number is " + (a > b ? a : b ));
       }
      }
    } 

    function conditional(){
        let input1 = parseInt(prompt("Enter first number:"));
        let input2 = parseInt(prompt("Enter second number:"));

        if (input1 == input2) {
            document.write(input1 + " is equal to " + input2);
        } else if (input1 > input2) {
            document.write(input1 + " is larger than " + input2);
        } else {
            document.write(input1 + " is less than " + input2);
        }
    }

    setTimeout(function(){
        location.reload();
     }, 6500);