import { random } from 'mathjs';

const getRandomTsCode = () => {
  const code = Math.floor(Math.random() * 1000) + 1;
  return code;
};
