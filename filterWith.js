function filterWith(array, phrase) {
  if (!Array.isArray(array))
    throw new Error("First argument should be an array");
  if (typeof phrase !== "string" && phrase.length === 0)
    throw new Error("Second argument should be a string");
  const regex = new RegExp(phrase, "gi");

  return array.filter((item) => {
    console.log(item);
    // if (item === 'object') => Object.prototype.toString.call(element) === "[object Object]" => Object.values()
    if (Object.prototype.toString.call(item) === "[object Object]") {
      filterWith(Object.values(item), phrase);
    }
    // if array => Array.isArray => array
    if (Array.isArray(item)) {
      filterWith(item, phrase);
    }
    // if string or number
    if (typeof item === "string") {
      if (item.toString().match(regex)) {
        return true;
      }
    } else return false;
  });
}
