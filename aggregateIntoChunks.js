function aggregateIntoChunks(arr) {
  const chunks = [];
  let i = 0;
  let arrayLength = arr.length;
  while (i < arr.length) {
    let chunkSize = Math.floor(Math.random() * 4) + 4;
    if (
      arrayLength % chunkSize === 0 ||
      (arrayLength % chunkSize >= 4 && arrayLength % chunkSize <= 7)
    ) {
      chunks.push(arr.slice(i, i + chunkSize));
      arrayLength -= chunkSize;
      i += chunkSize;
    }
  }
  return chunks;
}
