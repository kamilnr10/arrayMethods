const generateRandomChunk = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const checkChunkSize = (arrayLength, chunkSize) => {

  const abc = arrayLength % chunkSize === 0 

  return abc ||
    (arrayLength % chunkSize >= 4 && arrayLength % chunkSize <= 7)
};

const createChunk = (array, newArray, sliceFrom, sliceTo) => {
  newArray.push(array.slice(sliceFrom, sliceTo));
};

function aggregateIntoChunks(arr) {
  const chunks = [];
  let i = 0;
  const min = 4;
  const max = 7;
  let arrayLength = arr.length;
  while (i < arr.length) {
    const chunkSize = Math.floor(Math.random() * 4) + 4;
    console.log("i " + i);
    if (checkChunkSize(arrayLength, chunkSize)) {
      const sliceFrom = i;
      const sliceTo = i + chunkSize;
      createChunk(arr, chunks, sliceFrom, sliceTo);
      //   chunks.push(arr.slice(i, i + chunkSize));
      arrayLength -= chunkSize;
      //   console.log(arrayLength + " array length");
      i += chunkSize;
      //   console.log(i + " i");
    } else {
      console.log("else");
    }
  }
  return chunks;
}

function aggregateIntoChunks(arr) {
  const chunks = [];
  let i = 0;
  const min = 4;
  const max = 7;
  let arrayLength = arr.length;
  while (i < arr.length) {
    const chunkSize = Math.floor(Math.random() * 4) + 4;
    console.log("i " + i);
    if (
      arrayLength % chunkSize === 0 ||
      (arrayLength % chunkSize >= 4 && arrayLength % chunkSize <= 7)
    ) {
      chunks.push(arr.slice(i, i + chunkSize));
      arrayLength -= chunkSize;
      console.log(arrayLength + " array length");
      i += chunkSize;
      console.log(i + " i");
    }
  }
  return chunks;
}

// arr.length = 10, 7

const min = 100;
const max = 101;

// 1000 => 100 
// 900 => 101
// 799 => ...
// 92
function aggregateIntoChunks(arr) {
// if min max
  const chunks = [];
  let i = 0;

  let arrayLength = arr.length;
  while (i < arr.length) {
    const chunkSize = generateRandomChunk(min, max);
    // console.log("i " + i);
    if (checkChunkSize(arrayLength, chunkSize)) {
      const sliceFrom = i;
      const sliceTo = i + chunkSize;
      createChunk(arr, chunks, sliceFrom, sliceTo);
      arrayLength -= chunkSize;
      //   console.log(arrayLength + " array length");
      i += chunkSize;
      //   console.log(i + " i");
    }
  }
  return chunks;
}

// możesz wpaść w nieskończoną pętlę, ten same case co wcześniej

// 10 (długość wejściowego arraya) - 7 (z pierwszego losowania) = 3

// if na linijce 7 sprawdza czy wygenerowany chunk się mieści - nigdy się nie zmieści jak będzie 3

// ogólnie liczby 4 i 7 powinny być w jakimś configu
const chunkArray = (arr) => {
  const chunks = [];
  const min = 4;
  const max = 7;
  let randomNumber = 0;
  for (let i = 0; i < arr.length; i += randomNumber) {
    console.log(randomNumber);
    randomNumber = Math.floor(Math.random() * min) + 4;
    chunks.push(arr.slice(i, i + randomNumber));
    console.log("i " + i);
    if (arr.length - i <= min + max) {
        chunks.push(arr.slice(i, max %))
    }
  }
  return chunks;
};

////

let chunkArray = (arr) => {
  const chunks = [];
  const min = 4;
  const max = 7;
  let randomNumber = Math.floor(Math.random() * min) + 4;
  let arrayLength = arr.length;

  for (let i = 0; i < arr.length; i += randomNumber) {
    // console.log("array length: " + arrayLength);
    // console.log(i);

    const chunkSize = Math.floor(Math.random() * 4) + 4;
    console.log(randomNumber);
    if (arrayLength <= min + max) {
      if (
        arrayLength % chunkSize === 0 ||
        (arrayLength % chunkSize >= 4 && arrayLength % chunkSize <= 7)
      ) {
      }
      console.log("arr length: " + arrayLength);
      console.log("i: " + i);
      console.log("arrayLength - chunkSize: " + (arrayLength - chunkSize));
      chunks.push(arr.slice(i, arrayLength - chunkSize));
      //   chunks.push(arr.slice(arrayLength - chunkSize, arrayLength));
    }
    arrayLength -= chunkSize;
    randomNumber = chunkSize;
    console.log("else " + arrayLength);

    chunks.push(arr.slice(i, chunkSize + i));
  }
  return chunks;
};

