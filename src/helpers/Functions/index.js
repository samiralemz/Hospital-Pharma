export const dateToPtBr = (date) => {
  return date?.split("-")?.reverse()?.join("/");
};

export const dateAniversario = (date) => {
  return date?.split("-")?.reverse()?.join("/").substr(0, 5);
};

export const range = (start, end) => {
  return Array(end - start + 1)
    .fill()
    .map((n, index) => start + index);
};

const pages1 = range(0, 49);
const pages2 = range(50, 99);
const pages3 = range(100, 149);
const pages4 = range(150, 199);
const pages5 = range(200, 249);
const pages6 = range(250, 299);
const pages7 = range(300, 349);
const pages8 = range(350, 399);
const pages9 = range(400, 449);
const pages10 = range(450, 499);
const pages11 = range(500, 549);
const pages12 = range(550, 599);
const pages13 = range(600, 659);

export const pageModal = (valorId) => {
  if (pages1.includes(valorId)) {
    return 1;
  } else if (pages2.includes(valorId)) {
    return 2;
  } else if (pages3.includes(valorId)) {
    return 3;
  } else if (pages4.includes(valorId)) {
    return 4;
  } else if (pages5.includes(valorId)) {
    return 5;
  } else if (pages6.includes(valorId)) {
    return 6;
  } else if (pages7.includes(valorId)) {
    return 7;
  } else if (pages8.includes(valorId)) {
    return 8;
  } else if (pages9.includes(valorId)) {
    return 9;
  } else if (pages10.includes(valorId)) {
    return 10;
  } else if (pages11.includes(valorId)) {
    return 11;
  } else if (pages12.includes(valorId)) {
    return 12;
  } else if (pages13.includes(valorId)) {
    return 13;
  } else {
    return 1;
  }
};
