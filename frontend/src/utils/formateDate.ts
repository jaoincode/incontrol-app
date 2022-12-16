const formateDate = (date: string) => {
  const dateSplit = date.slice(0, 10).replace("-", "/").replace("-", "/");

  let reverseDate = [
    dateSplit[8],
    dateSplit[9],
    dateSplit[7],
    dateSplit[5],
    dateSplit[6],
    dateSplit[4],
    dateSplit[0],
    dateSplit[1],
    dateSplit[2],
    dateSplit[3],
  ];

  return reverseDate.join("");
};

export default formateDate;
