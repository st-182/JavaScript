let postcode1 = `12345`;
let postcode2 = `123abc`;
let postcode3 = `abc123`;

function checkPostcodeValue(string) {
  console.log(string.length);
  console.log(string.length === Number);
  for (let i = 0; i < string.length; i++) {
    if ((string.length = 5 && string.length === Number)) {
      // (string.length <= 6 && string.length === Number)
      return true;
    } else if (
      string.charAt(3) === !Number(string) &&
      string.charAt(4) === !Number(string)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkPostcodeValue(postcode3));
