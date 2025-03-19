function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const numbers = [];
for (let i = 0; i < 10; i++) {
  const num = getRandomInt(10);
  if (!numbers.includes(num)) {
    numbers.push(num);
  }
}
return numbers;
