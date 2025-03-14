function getRandomInt(max: number): number {
  return Math.floor(Math.random() * Math.floor(max));
}

const randomNumber = getRandomInt(10);
console.log(randomNumber);
