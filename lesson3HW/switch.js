const value = 42;

switch (typeof value) {
    case "number":
        console.log("Value is a number.");
        break;
    case "string":
        console.log("Value is a string.");
        break;
    case "boolean":
        console.log("Value is a boolean.");
        break;
    case "bigint":
        console.log("Value is a BigInt.");
        break;
    case "symbol":
        console.log("Value is a Symbol.");
        break;
    case "undefined":
        console.log("Value is undefined.");
        break;
    case "object":
        if (value === null) {
            console.log("Value is null.");
        } else {
            console.log("Value is an Object.");
        }
        break;
    default:
        console.log("Unknown type.");
}
