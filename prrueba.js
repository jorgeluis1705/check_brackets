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

  // Iterating in the Expression
  for (let i = 0; i < str.length; i++) {
    let x = str[i];

    if (x == "(" || x == "[" || x == "{") {
      // Push the element in the array ig the condition is correct
      stack.push(x);
      continue;
    }

    // If current character is not opening
    // bracket, then it must be closing.
    // So array cannot be empty at this point.
    if (stack.length == 0) return false;

    let check = "";
    switch (x) {
      case ")":
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
