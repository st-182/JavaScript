
let postcode1 =`12345`;
let postcode2 =`123abc`;
let postcode3 =`abc123`;
function checkPostcodeValue(string){
​​​​​​​​console.log(string.length)
    for(let i =0; i < string.length; i++){​​​​​​​​
if(string.length<=6&& string.length===Number){​​​​​​​​
returntrue;
}​​​​​​​​else if(string.charAt(3)===!Number(string)&& string.charAt(4)===!Number(string)){​​​​​​​​
return true;
}​​​​​​​​ else{​​​​​​​​
return false;
}​​​​​​​​
}​​​​​​​​
}​​​​​​​​
    
console.log(checkPostcodeValue(postcode3));

