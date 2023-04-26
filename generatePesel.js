const generatePesel = (date) => {
  if (typeof date !== "string") throw new Error("Date should be in quotes");

  const formatedDate = new Date(date);
  const ddStr = String(formatedDate.getDate()).padStart(2, "0");
  let mmStr = null;
  const yy = formatedDate.getFullYear();
  const yyStr = String(formatedDate.getFullYear()).substr(2);
  if (yy >= 1800 && yy < 1900) {
    mmStr = String(formatedDate.getMonth() + 81);
  }
  if (yy >= 1900 && yy < 2000) {
    mmStr = String(formatedDate.getMonth() + 1).padStart(2, "0");
  }
  if (yy >= 2000 && yy < 2100) {
    mmStr = String(formatedDate.getMonth() + 21);
  }
  if (yy >= 2100 && yy < 2200) {
    mmStr = String(formatedDate.getMonth() + 41);
  }
  const seriesNumber = Math.random().toString().substr(2, 4);
  const lastDigit = Math.floor(Math.random() * 10);

  return yyStr + mmStr + ddStr + seriesNumber + lastDigit;
};
