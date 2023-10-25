function telephoneCheck(str) {
  let arr = [
    "555-555-5555",
    "(555)555-5555",
    "(555) 555-5555",
    "555 555 5555",
    "5555555555",
  ];

  let flag = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == str.length) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        let arr_ascii = arr[i].charCodeAt(j);
        let str_ascii = str.charCodeAt(j);
        if (
          arr_ascii >= 48 &&
          arr_ascii <= 57 &&
          str_ascii >= 48 &&
          str_ascii <= 57
        ) {
          count++;
        } else if (arr_ascii == str_ascii) {
          count++;
        }
      }

      //   console.log(count, str.length, "\n");

      if (count == str.length) {
        flag = 1;
        break;
      }
    }
  }

  let first = str[0];
  str = str.substring(1).trim();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == str.length) {
      let count = 0;
      for (let j = 0; j < arr[i].length; j++) {
        let arr_ascii = arr[i].charCodeAt(j);
        let str_ascii = str.charCodeAt(j);
        if (
          arr_ascii >= 48 &&
          arr_ascii <= 57 &&
          str_ascii >= 48 &&
          str_ascii <= 57
        ) {
          count++;
        } else if (arr_ascii == str_ascii) {
          count++;
        }
      }

      //   console.log(count, str.length, "\n");

      if (count == str.length && first == "1") {
        flag = 1;
        break;
      }
    }
  }

  if (flag == 1) {
    return true;
  } else {
    return false;
  }
}
