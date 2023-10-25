const currency_arr = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100],
];

for (let i = 0; i < currency_arr.length; i++) {
  currency_arr[i][1] *= 100;
}

currency_arr.reverse();

function checkCashRegister(price, cash, cid) {
  price = Math.ceil(price * 100);
  cash = Math.ceil(cash * 100);

  // console.log(price, cash);

  let diff = cash - price;

  let total = 0;

  for (let i = 0; i < cid.length; i++) {
    cid[i][1] = Math.ceil(cid[i][1] * 100);
    total += cid[i][1];
  }

  // console.log(diff, total);

  let result = {
    status: "",
    change: [],
  };

  if (diff == total) {
    result.status = "CLOSED";
    for (let i = 0; i < cid.length; i++) {
      cid[i][1] /= 100;
    }
    result.change = [...cid];
    return result;
  }

  cid.reverse();

  let new_cid = [];

  for (let i = 0; i < currency_arr.length; i++) {
    let occurs = cid[i][1] / currency_arr[i][1];

    if (currency_arr[i][1] > diff) continue;

    let sum = 0;

    while (diff > 0 && occurs > 0 && diff >= currency_arr[i][1]) {
      diff -= currency_arr[i][1];
      sum += currency_arr[i][1];
      occurs--;
    }

    new_cid.push([cid[i][0], sum / 100]);
  }

  if (diff == 0) {
    result.status = "OPEN";
    result.change = [...new_cid];
  } else {
    result.status = "INSUFFICIENT_FUNDS";
    result.change = [];
  }

  return result;
}
