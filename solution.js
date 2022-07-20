const isBalancedString = (str = "") => {
  // If we recibe an empty string  we return false
  if (!str.length) return false;

  // check if there is any in parentheses
  if (
    !str.includes("[") &&
    !str.includes("{") &&
    !str.includes("(") &&
    !str.includes("]") &&
    !str.includes("}") &&
    !str.includes(")")
  ) {
    return true;
  }

  // Create an empty array to storage the matches
  let stack = [];

  // Iterating in the Epression
  for (let i = 0; i < str.length; i++) {
    // create a current item in the array
    let currentItem = str[i];

    if (currentItem == "(" || currentItem == "[" || currentItem == "{") {
      // Push the element in the array ig the condition is correct
      stack.push(currentItem);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So array cannot be empty at this point.
    if (stack.length == 0) return false;

    //check the last item in the array
    let check = "";
    // evaluate the current item in some cases
    switch (currentItem) {
      case ")":
        //  assigned the last item in the array and delete that
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  // Check Empty array and return the result of the condition True or False
  return stack.length == 0;
};
const a = "{}",
  b = ")(",
  c = "{{}",
  d = '""',
  e = "{abc}",
  f = "]",
  g = "{",
  h = "]";

const words = [a, b, c, d, e, f, g, h];

for (let i = 0; i < words.length; i++) {
  console.log(isBalancedString(words[i]));
}
