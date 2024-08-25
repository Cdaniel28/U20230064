const date1 = new Date(2024, 0, 1);
const date2 = new Date(2024, 7, 25);

const differenceInTime = date2.getTime() - date1.getTime();
const differenceInDays = differenceInTime / (1000 * 3600 * 24);
console.log(differenceInDays);
