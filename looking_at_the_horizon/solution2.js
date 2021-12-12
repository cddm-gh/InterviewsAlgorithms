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

class Queue {
  elements = [];

  size() {
    return this.elements.length;
  }

  pushFront(element) {
    this.elements.push(element);
  }

  popFront() {
    this.elements.pop();
  }

  front() {
    return this.elements[0];
  }
}

function solveCase(myCase) {
  const queue = new Queue();
  let answer = [];
  // we start from right to left
  for (let i = myCase.N - 1; i >= 0; i--) {
    // this will be met only when is not the first building on the right (the one with clear sight)
    while (queue.size() > 0 && myCase.A[i] >= queue.front()) {
      queue.popFront();
    }
    // when is the first building on the right it has clear sight hence we return -1
    answer[i] = queue.size() === 0 ? -1 : queue.front();
    queue.pushFront(myCase.A[i]);
  }
  for (let i = 0; i < myCase.N; i++) {
    console.log(answer[i]);
  }
}

function main() {
  for (let i = 0; i < inputData.C; i++) {
    console.log(`\nCase #${i + 1}: `);
    solveCase(inputData.cases[i]);
  }
}

main();
