function palindrome(str) {
  let new_str = "";

  for (let i = 0; i < str.length; i++) {
    if (
      (str[i] >= "a" && str[i] <= "z") ||
      (str[i] >= "A" && str[i] <= "Z") ||
      (str[i] >= "0" && str[i] <= "9")
    ) {
      new_str += str[i].toUpperCase();
    } else {
      continue;
    }
  }

  let flag = 1;

  let len = new_str.length;

  for (let i = 0; i < len / 2; i++) {
    if (new_str[i] != new_str[len - i - 1]) {
      flag = 0;
      break;
    }
  }

  if (flag == 1) {
    return true;
  } else {
    return false;
  }

  //   return new_str;
}
