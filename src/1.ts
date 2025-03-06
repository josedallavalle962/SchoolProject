function getRandomNumber(min: number, max: number): number {
  const diff = max - min;
  return Math.floor(Math.random() * diff + min);
}

const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);
