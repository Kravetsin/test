function multiplyMatrices(A, B) {
  const n = A.length;
  const C = new Array(n).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        C[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return C;
}

const A = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const B = [
  [10, 11, 12],
  [13, 14, 15],
  [16, 17, 18],
];

console.log(multiplyMatrices(A, B));
