function rot13(str) {
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    let add = ascii + 13;
    if (add > 90) {
      add -= 90;
      add += 65;
      add--;
    }
    if (str[i] >= "A" && str[i] <= "Z") {
      res += String.fromCharCode(add);
    } else if (ascii == 32) {
      res += String.fromCharCode(ascii);
    } else {
      res += str[i];
    }
    // console.log(ascii, add);
  }

  return res;
}
