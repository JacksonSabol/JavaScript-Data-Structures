import AssociativeArray from "./associative-array";
// Instantiate a new AssociativeArray
const cats = new AssociativeArray();
// Set some intial key-value pairs
cats.set("Prismo", "tortoise-shell");
cats.set("Blueberry", "tortoise-shell");
cats.set("George", "mackerel tabbie");
cats.set("Gloria", "mackerel tabbie");
cats.set("Bastet", "Egyptian mau");
// Test the set and get methods of the Associative Array by calling keys
test('Should retrieve the values associated with unique keys', () => {
    expect(cats.get("Prismo")).toBe("tortoise-shell");
    expect(cats.get("George")).toBe("mackerel tabbie");
    expect(cats.get("Blueberry")).toBe("tortoise-shell");
});
// Test the ability of the Associative Array to reassign values
test('Should reassign a new value to an existing key', () => {
    cats.set("Bastet", "Goddess");
    expect(cats.get("Prismo")).toBe("tortoise-shell"); // No change
    expect(cats.get("George")).toBe("mackerel tabbie"); // No change
    expect(cats.get("Bastet")).toBe("Goddess"); // Reassigned
});
