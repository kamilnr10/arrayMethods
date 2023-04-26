const isArray = (array) => {
  return Array.isArray(array);
};

const isFunction = (callback) => {
  return callback instanceof Function;
};

const forEachFn = (array, callback) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");

  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
};

const mapFn = (array, callback) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");

  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  const mapArray = [];

  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    mapArray.push(result);
  }

  return mapArray;
};

console.log([1, 2, 3, 4].entries());

const entriesFn = (array) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      // [i, array[i]];  tuple
      //   obj[array[i][0]] = array[i][1];
      const tuple = [i, array[i]];
      newArray.push(tuple);
    }
  }
  return newArray;
};

console.log(entriesFn(1, 2, 3, 4));

const filterFn = (array, callback) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  const filterArr = [];
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i], i, array);
    if (result) filterArr.push(array[i]);
  }
  return filterArr;
};

const reduceFn = (array, callback, initial) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  if (array.length === 0)
    throw new Error("Array should have at least one element");

  let accumulator = initial === undefined ? 0 : initial;
  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], array);
  }
  return accumulator;
};

const everyFn = (array, callback) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  for (let i = 0; i < array.length; i += 1) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
};

const someFn = (array, callback) => {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
};

// master reduce

const mapReducer = (mappedArray, currentItem, callback) => {
  if (!isArray(mappedArray))
    throw new Error("First parameter should be an array");

  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");

  mappedArray.push(callback(currentItem));
  return mappedArray;
};

function mapFn(array, callback) {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  const initialArray = [];

  return array.reduce(mapReducer, initialArray);
}

function filterFn(array, callback) {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");
  const initialArray = [];

  const filterReducer = (filteredArray, item) => {
    const filteredItem = callback(item);
    if (filteredItem) {
      filteredArray.push(item);
    }
    return filteredArray;
  };
  return array.reduce(filterReducer, initialArray);
}

function everyFn(array, callback) {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");

  // how to break reduce
  const everyReducer = (accumulator, currentItem, index, array) => {
    if (accumulator === false) {
      array.splice(index);
    }
    return accumulator && callback(currentItem);
  };
  return array.reduce(everyReducer, true);
}

function someFn(array, callback) {
  if (!isArray(array)) throw new Error("First parameter should be an array");
  if (!isFunction(callback))
    throw new Error("Second parameter should be a function");

  const someReducer = (accumulator, currentItem, index, array) => {
    if (accumulator === false) {
      array.splice(index);
    }
    return accumulator || callback(currentItem);
  };
  return array.reduce(someReducer, false);
}

// chunk Array
const chunkArray = (chunkedArray) => {
  const newArray = chunkedArray.reduce((accumulator, currentItem, index) => {
    let randomIndex = Math.floor(Math.random() * (8 - 4) + 4);
    accumulator.push(chunkedArray.splice(index, randomIndex));
    return accumulator;
  }, []);
  return newArray;
};

//generate PESEL

const generatePesel = (date) => {
  if (typeof date !== "string") throw new Error("Date should be in quotes");
  if (!date.length) throw new Error("You need to pass a date in quotes");
  const formatedDate = new Date(date);
  let mmStr = null;
  const ddStr = String(formatedDate.getDate()).padStart(2, "0");
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
  const pesel = yyStr + mmStr + ddStr + seriesNumber + lastDigit;
  return pesel;
};
