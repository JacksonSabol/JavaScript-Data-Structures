// Import dependencies - Chai 'Expect' Guide: https://www.chaijs.com/guide/styles/#expect
import { expect } from "chai";
import AssociativeArray from "../associative-array";

// Describe the tests for a properly functioning Associative Array
describe("Associative Array", () => {
    // Create a new Associative Array to set some key-value pairs on
    const cats = new AssociativeArray();
    // Set some intial key-value pairs
    cats.set("Prismo", "tortoise-shell");
    cats.set("Blueberry", "tortoise-shell");
    cats.set("George", "mackerel tabbie");
    cats.set("Gloria", "mackerel tabbie");
    cats.set("Bastet", "Egyptian mau");
    // Test the set and get methods of the Associative Array by calling keys
    it("Should retrieve the values associated with unique keys", () => {
        expect(cats.get("Prismo")).to.equal("tortoise-shell");
        expect(cats.get("George")).to.equal("mackerel tabbie");
        expect(cats.get("Blueberry")).to.equal("tortoise-shell");
    });
    // Test the ability of the Associative Array to reassign values
    it("Should reassign a new value to an existing key", () => {
        cats.set("Bastet", "Goddess");
        expect(cats.get("Prismo")).to.equal("tortoise-shell"); // No change
        expect(cats.get("George")).to.equal("mackerel tabbie"); // No change
        expect(cats.get("Bastet")).to.equal("Goddess"); // Reassigned
    });
    // Test the ability of the Associative Array to remove key-value pairs
    it("Should remove a key-value pair", () => {
        cats.remove("Blueberry");
        expect(cats.get("Prismo")).to.equal("tortoise-shell"); // No change
        expect(cats.get("George")).to.equal("mackerel tabbie"); // No change
        expect(cats.get("Blueberry")).to.equal(false); // Removed
    });
    // Test the ability of the Associative Array constructor to avoid collisions by adding anagrams
    it("Should avoid collisions from anagrams", () => {
        cats.set("isabel", "russian blue");
        cats.set("blaise", "savannah cat");
        expect(cats.get("isabel")).to.equal("russian blue");
        expect(cats.get("blaise")).to.equal("savannah cat");
    });
    // Test the case sensitivity of the Associative Array's hash function
    it("Should avoid collisions from capitalized/uncapitalized keys", () => {
        expect(cats.get("isabel")).to.equal("russian blue");
        expect(cats.get("Isabel")).to.equal(false);
        expect(cats.get("Prismo")).to.equal("tortoise-shell");
        expect(cats.get("prismo")).to.equal(false);
    });
    // Test the ability of the Associative Array's hash function to handle non-string inputs
    it("Should be able to accept non-string primitive data types in the hash function", () => {
        cats.set(1234, "forest cat");
        cats.set(4321, "reverse forest cat");
        cats.set(true, "truthy toothy cat");
        cats.set(false, "falsy froath cat");
        cats.set([1, 2, 3, 4], "array cat");
        cats.set([4, 3, 2, 1], "reverse array cat");
        expect(cats.get(1234)).to.equal("forest cat");
        expect(cats.get(4321)).to.equal("reverse forest cat");
        expect(cats.get(true)).to.equal("truthy toothy cat");
        expect(cats.get(false)).to.equal("falsy froath cat");
        expect(cats.get([1, 2, 3, 4])).to.equal("array cat");
        expect(cats.get([4, 3, 2, 1])).to.equal("reverse array cat");
    });
});