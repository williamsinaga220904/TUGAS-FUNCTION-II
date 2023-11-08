function minimal(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(minimal(1, 4)); // Output: 1
console.log(minimal(3, 2)); // Output: 2
console.log(minimal(3, 3)); // Output: 3
