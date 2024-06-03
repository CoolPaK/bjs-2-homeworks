function getArrayParams(...arr) {
  const min = Math.min(...arr); 
  const max = Math.max(...arr); 
  const sum = arr.reduce((acc, curr) => acc + curr, 0); 
  const avg = (sum / arr.length).toFixed(2); 
  return { min, max, avg: Number(avg) }; 
}

function summElementsWorker(...arr) {
 if (arr.length === 0) return 0;
 return arr.reduce((acc, curr) => acc + curr, 0);
}

function differenceMaxMinWorker(...arr) {
 if (arr.length === 0) return 0;
  const max = Math.max(...arr);
  const min = Math.min(...arr);
 return max - min;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0; 
    let sumEvenElement = 0;
    let sumOddElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
    } else {
      sumOddElement += num;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
    let sumEvenElement = 0;
    let countEvenElement = 0;
  for (let num of arr) {
    if (num % 2 === 0) {
      sumEvenElement += num;
      countEvenElement++;
    }
  }
  if (countEvenElement === 0) return 0;
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
