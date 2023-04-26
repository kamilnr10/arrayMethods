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
