// Import dependencies - Chai 'Expect' Guide: https://www.chaijs.com/guide/styles/#expect
const expect = require("chai").expect;
const AssociativeArray = require("../associative-array");

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
    it("Should reassign a new value to an existing key", () => {
        cats.remove("Blueberry");
        expect(cats.get("Prismo")).to.equal("tortoise-shell"); // No change
        expect(cats.get("George")).to.equal("mackerel tabbie"); // No change
        expect(cats.get("Blueberry")).to.equal(false); // Removed
    });
});