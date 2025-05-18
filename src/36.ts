// Example of how to use TypeScript with this file

class MyClass {
  constructor(private value: number) {}

  getValue(): number {
    return this.value;
  }
}

const myInstance = new MyClass(42);
console.log(myInstance.getValue()); // Output: 42
