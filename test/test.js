// Import dependencies - Chai 'Expect' Guide: https://www.chaijs.com/guide/styles/#expect
import { expect } from "chai";
import AssociativeArray from "../associative-array";
import Graph from "../graph";

// Describe the tests for a properly functioning Associative Array
describe("Associative Array", () => {
    // Create a new Associative Array on which to set some key-value pairs
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

// Describe the tests for a properly functioning Graph
describe("Graph", () => {
    // Create a new Graph on which to add vertices and edges
    const usMap = new Graph();
    // Add some cities to the map
    usMap.addVertex("New York City, NY");
    usMap.addVertex("St. Louis, MO");
    usMap.addVertex("Denver, CO");
    usMap.addVertex("Albuquerque, NM");
    usMap.addVertex("Phoenix, AZ");
    usMap.addVertex("San Francisco, CA");
    usMap.addVertex("Portland, OR");
    usMap.addVertex("Seattle, WA");
    usMap.addVertex("Boise, ID");
    // Test the addVertex and hasVertex methods of the Graph by calling the hasVertex method for the cities we added
    it("Should add a vertex and find a vertex", () => {
        expect(usMap.hasVertex("New York City, NY")).to.equal(true);
        expect(usMap.hasVertex("Albuquerque, NM")).to.equal(true);
        expect(usMap.hasVertex("San Francisco, CA")).to.equal(true);
    });
    // Test the addEdge and hasEdge methods of the Graph
    it("Should add an edge between two vertices if they exist and find an edge between two vertices if they and the edge exist", () => {
        // Add edges between connected cities
        usMap.addEdge("New York City, NY", "St. Louis, MO");
        usMap.addEdge("St. Louis, MO", "Denver, CO");
        usMap.addEdge("Denver, CO", "Albuquerque, NM");
        usMap.addEdge("Albuquerque, NM", "Phoenix, AZ");
        usMap.addEdge("Phoenix, AZ", "San Francisco, CA");
        usMap.addEdge("San Francisco, CA", "Portland, OR");
        usMap.addEdge("Portland, OR", "Seattle, WA");
        usMap.addEdge("Seattle, WA", "Boise, ID");
        usMap.addEdge("Boise, ID", "Denver, CO");
        expect(usMap.hasEdge("New York City, NY", "St. Louis, MO")).to.equal(true);
        expect(usMap.hasEdge("St. Louis, MO", "Denver, CO")).to.equal(true);
        expect(usMap.hasEdge("Denver, CO", "Albuquerque, NM")).to.equal(true);
        expect(usMap.hasEdge("Albuquerque, NM", "Phoenix, AZ")).to.equal(true);
        expect(usMap.hasEdge("Phoenix, AZ", "San Francisco, CA")).to.equal(true);
        expect(usMap.hasEdge("San Francisco, CA", "Portland, OR")).to.equal(true);
        expect(usMap.hasEdge("Portland, OR", "Seattle, WA")).to.equal(true);
        expect(usMap.hasEdge("Seattle, WA", "Boise, ID")).to.equal(true);
        expect(usMap.hasEdge("Boise, ID", "Denver, CO")).to.equal(true);
    });
    // Test the 'non-existent edge' case of the hasEdge method of the Graph
    it("Should return false if an edge between two vertices does not exist", () => {
        expect(usMap.hasEdge("Boise, ID", "Portland, OR")).to.equal(false);
        expect(usMap.hasEdge("San Francisco, CA", "Denver, CO")).to.equal(false);
    });
    // Test the 'non-existent vertices' case of the hasEdge method of the Graph
    it("Should return an error when trying to define an edge between one or two vertices that do not exist", () => {
        // Use an anonymous arrow function with Chai's expect to.throw to bind to 'this' of the parent scope
        expect(() => usMap.addEdge("Boise, ID", "Austin, TX")).to.throw("One or both of these vertices do not exist in the graph");
        expect(() => usMap.addEdge("Jackson, MS", "Memphis, TN")).to.throw("One or both of these vertices do not exist in the graph");
    });
    // Test the removeEdge method of the Graph by way of the hasEdge method
    it("Should remove an edge between two vertices if they and the edge exist", () => {
        // Remove edges between connected cities
        usMap.removeEdge("New York City, NY", "St. Louis, MO");
        usMap.removeEdge("St. Louis, MO", "Denver, CO");
        usMap.removeEdge("Denver, CO", "Albuquerque, NM");
        expect(usMap.hasEdge("New York City, NY", "St. Louis, MO")).to.equal(false);
        expect(usMap.hasEdge("St. Louis, MO", "Denver, CO")).to.equal(false);
        expect(usMap.hasEdge("Denver, CO", "Albuquerque, NM")).to.equal(false);
    });
    // Test the bidirectional unreferencing of the removeEdge method of the Graph
    it("Should remove an edge between two vertices on both vertices in an undirected graph", () => {
        // In other words, the edges object should be deleted from both vertices in this undirected graph
        expect(usMap.hasEdge("New York City, NY", "St. Louis, MO")).to.equal(false);
        expect(usMap.hasEdge("St. Louis, MO", "New York City, NY")).to.equal(false);
        expect(usMap.hasEdge("Denver, CO", "Albuquerque, NM")).to.equal(false);
        expect(usMap.hasEdge("Albuquerque, NM", "Denver, CO")).to.equal(false);
    });
    // Test the 'non-existent edge' case of the removeEdge method of the Graph
    it("Should return an error when trying to remove an edge when one or both vertices, or the edge, do not exist", () => {
        // Use an anonymous arrow function with Chai's expect to.throw to bind to 'this' of the parent scope
        expect(() => usMap.removeEdge("Boise, ID", "Austin, TX")).to.throw("No edge exists between those vertices");
        expect(() => usMap.removeEdge("Jackson, MS", "Memphis, TN")).to.throw("No edge exists between those vertices");
        expect(() => usMap.removeEdge("San Francisco, CA", "Denver, CO")).to.throw("No edge exists between those vertices");
    });
    // Test the removeVertex method of the Graph
    it("Should remove a vertex if it exists and unreference all of that vertex's edges", () => {
        // In other words, the edges object should be deleted from both vertices in this undirected graph
        // Remove a vertex
        usMap.removeVertex("Denver, CO");
        expect(usMap.hasVertex("Denver, CO")).to.equal(false);
        expect(() => usMap.hasEdge("Denver, CO", "Boise, ID")).to.throw("One or both of these vertices do not exist in the graph");
    });
});