const _ = require("lodash");
const assert = require("assert");

/*

1. Use fake data or APIs you have worked with in previous projects or google fake data you can use. - [ ] Either make a fetch or save it in a few variables.
2. Console.log the output of each lodash method called on the fake data.
3. Use at least these methods: _.chunk(), _.reverse(), _.without(), _.shuffle().
4. Create unit tests with Mocha for each function you build.

*/

const numArr = [
  2, 55, 63, 43, 1, 2, 78, 1000, 5678, 7, 98, 99, 45, 78, 42, 42, 42, 42, 43,
  50,
];

// _.chunk(array, [size=1])
// Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.

const test = _.chunk(numArr, [(size = 5)]);
console.log(test); // looks good; splits array into nested arrays of length 5. No chunks because length is divisible by 5.

// _.reverse()
const animalArr = ["pig", "goat", "sheep", "cat", "dog", "lion"];
console.log(_.reverse(animalArr)); // [ 'lion', 'dog', 'cat', 'sheep', 'goat', 'pig' ]

// _.without(array, [values])
// Creates an array excluding all given values using SameValueZero for equality comparisons.

const newTestArr = [1, 2, 3, 1, 2, 3, 4];
console.log(_.without(newTestArr, 1, 2)); // [ 3, 3, 4 ]

// _.shuffle(collection)
// _.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
console.log(_.shuffle(newTestArr));
console.log(newTestArr);

const unTailed = [1, 2, 3, 4, 5];
const tail = _.tail(unTailed);
console.log(tail); // [ 2, 3, 4, 5 ]

if (typeof describe === "function") {
  // Returns an objet representing the frequencies of each letter in string.
  describe("lodash tests", () => {
    it("should chunk then input array into separate arrays", () => {
      const testChunk = _.chunk(numArr, [(size = 5)]);
      assert.equal(testChunk[0][0], 2);
    });
    it("should reverse then input array", () => {
      const reverseArr = _.chunk(animalArr);
      assert.equal(reverseArr[0], "lion");
    });
    it("should return array without specified values", () => {
      const filterArr = _.without(
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3],
        1
      );
      assert.equal(filterArr[0], 2);
    });
    it("should shuffle order of values", () => {
      const test1 = [1, 2, 3];
      const test2 = _.shuffle(test1);
      assert.equal(test1.length, test2.length);
    });
    it("should find the tail of an array", () => {
      const test1 = [1, 2, 3];
      const tail = _.tail(test1);
      assert.equal(tail.length, 2);
    });
  });
}
