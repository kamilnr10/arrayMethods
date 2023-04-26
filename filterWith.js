function filterWith(array, phrase) {
  const regex = new RegExp(phrase, "gi");
  return array.filter((item) => {
    console.log(typeof item);
    if (typeof item === "object" && item !== null) {
      for (const key in item) {
        if (filterWith([item[key]], phrase).length > 0) {
          return true;
        }
      }
    } else {
      if (item.toString().match(regex)) {
        return true;
      }
    }
    return false;
  });
}
