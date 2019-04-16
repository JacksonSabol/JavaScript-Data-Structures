// Define a class AssociativeArray as a constructor
export default class AssociativeArray {
    constructor() {
        // Define the buckets to be filled by the constructor
        this.buckets = [];
    }
    // Define the hash function
    hash(key) {
        // √ √ √ √ √ √ Passes all 6 tests
        // Cast to string so hash function can accept non-string primitize data types as keys
        key = key.toString();
        // Define a polynomial string hash derived from the Rabin-Karp algorithm - https://en.wikipedia.org/wiki/Rabin%E2%80%93Karp_algorithm
        let n = key.length - 1;
        let prime = 179424691;
        let hash = Array.from(key);
        for (let i = 0; i < key.length; i++) {
            hash += (key.charCodeAt(i) * (prime ^ n)) % key.length;
            n--
        }
        return hash;
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