function isValidParenthesis(str) {
    if (typeof str != "string") {
      return false;
    } else if (str === null || str.length <= 0) {
      return true;
    }
  
    const stringToArr = str.split("");
    let arr = [];
  
    for (let char of stringToArr) {
      if (char === "[") {
        arr.push("]");
      } else if (char === "{") {
        arr.push("}");
      } else if (char === "(") {
        arr.push(")");
      } else if (arr.length === 0 || char !== arr.pop()) return false;
    }
    if (arr.length === 0) return true;
    return false;
  }


  console.log("Input:  ()" );
  console.log("Output: ",isValidParenthesis( "()" ));
 
  console.log("Input: ()[]{}" );
  console.log("Output: ",isValidParenthesis( "()[]{}" ));

  console.log("Input: (]" );
  console.log("Output: ",isValidParenthesis( "(]" )); 
  
  console.log("Input: ([)]" );
  console.log("Output: ",isValidParenthesis( "([)]" ));

  console.log("Input: {[]}" );
  console.log("Output: ",isValidParenthesis( "{[]}" ));
  
