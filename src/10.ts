function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

const numbers = Array(10).fill(null).map(() => getRandomInt(10));
console.log(numbers);
