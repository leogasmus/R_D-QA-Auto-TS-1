const value = 42;

if (typeof value === "number") {
    console.log("Value is a number.");
} else if (typeof value === "string") {
    console.log("Value is a string.");
} else if (typeof value === "boolean") {
    console.log("Value is a boolean.");
} else if (value === null) {
    console.log("Value is null.");
} else if (typeof value === "undefined") {
    console.log("Value is undefined.");
} else if (typeof value === "bigint") {
    console.log("Value is a BigInt.");
} else if (typeof value === "symbol") {
    console.log("Value is a Symbol.");
} else if (typeof value === "object") {
    console.log("Value is an Object.");
} else {
    console.log("Unknown type.");
}
