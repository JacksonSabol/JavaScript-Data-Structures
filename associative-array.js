// Using ES5 notation until Babel is set up
// Define a class AssociativeArray as a constructor
class AssociativeArray {
    constructor() {
        // Define the buckets to be filled by the constructor
        this.buckets = [];
    }
    // Define the hash function
    hash(key) {
        // √ √ √ Passes all 3 tests
        // Define a polynomial string hash derived from the Rabin-Karp algorithm - https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
        let n = key.length - 1;
        let prime = 179424691;
        let hash = Array.from(key);
        for (let i = 0; i < key.length; i++) {
            hash += (key.charCodeAt(i) * (prime ^ n)) % key.length;
            n--
        }
        return hash;

        // √ √ √ Passes all 3 tests
        // Java.lang.String.hashCode method: https://www.tutorialspoint.com/java/lang/string_hashcode.htm
        // Implemented by Anatol Marezhanyi: https://github.com/e1r0nd/data-sctructures/blob/64b72ba5008c8a8c1a7ebd80f34798149d22144c/hashtable.js#L12
        // hash(key, hash = 0) {
        // for (let i = 0; i < key.length; i++) {
        //     hash = ((hash << 5) - hash) + key.charCodeAt(i) | 0;
        //     hash &= hash;
        // }
        // return hash;
    }
    // Define the set method, which takes in a key and a value
    set(key, value) {
        // Set the value associated with the key to the buckets array at the index equal to the hashed value of the key
        this.buckets[this.hash(key)] = value;
    }
    // Define the get method, which takes in a key and searches for its value
    get(key) {
        // Return the value at the "unhashed" key if it is found, or false if it is not found
        return this.buckets[this.hash(key)] || false;
    }
    // Define the remove method, which takes in a key, hashes it, and deletes the key-value pair associated with it in the buckets array
    remove(key) {
        delete this.buckets[this.hash(key)];
    }
}
// Export the class
module.exports = {
    AssociativeArray
};