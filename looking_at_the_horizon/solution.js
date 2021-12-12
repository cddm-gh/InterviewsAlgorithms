const inputData = {
  C: 3,
  cases: [
    {
      N: 10,
      A: [4, 2, 1, 6, 3, 2, 5, 3, 1, 4],
    },
    {
      N: 3,
      A: [1, 1, 2],
    },
    {
      N: 6,
      A: [3, 3, 2, 2, 1, 1],
    },
  ],
};

function solveCase(myCase) {
  for (let i = 0; i < myCase.N; i++) {
    let answer = -1;
    for (let j = i + 1; j < myCase.N; j++) {
      /**
       * j will never start at or before i
       * building at i should be smaller than building at j
       */
      if (myCase.A[i] < myCase.A[j]) {
        answer = myCase.A[j];
        break;
      }
    }
    console.log(answer);
  }
}

function main() {
  for (let i = 0; i < inputData.C; i++) {
    console.log(`\nCase #${i + 1}: `);
    solveCase(inputData.cases[i]);
  }
}

main();
