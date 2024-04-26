/**
 * You're at a party and you feel thirsty! However, you've got 5 friends who are also in need of a drink. Let's go get them a drink.
 *
 * Declare a variable that holds an empty array, called drinkTray.
 * Create a loop that runs 5 times. On each iteration, push a drink into the drinkTray variable. The drinkTray can only hold at most two instances of the same drink type, for example it can only hold 2 colas, 2 lemonades, 2 waters.
 * 
 * Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!" (For example: "Hey guys, I brought a cola, cola, lemonade, lemonade, water!")
 */

// There are 3 different types of drinks:// There are 3 different types of drinks:
const drinks = ["cola", "lemonade", "water"];

// Declare a variable that holds an empty array, called drinkTray.
let drinkTray = [];

// Create a loop that runs 5 times.
for (let i = 0; i < 5; i++) {
    // On each iteration, push a drink into the drinkTray variable.
    const randomDrinkIndex = Math.floor(Math.random() * drinks.length); // Generate a random index to select a drink from the drinks array
    const drink = drinks[randomDrinkIndex]; // Get a random drink from the drinks array
    if (drinkTray.length < 5) { // Check if the drink tray is not full yet
        // Check if the selected drink already exists in the drink tray and its count is less than 2
        const drinkCount = drinkTray.filter(item => item === drink).length;
        if (drinkCount < 2) {
            drinkTray.push(drink); // Push the drink into the drink tray
        }
    }
}

// Log to the console: "Hey guys, I brought a [INSERT VALUES FROM ARRAY]!"
console.log("Hey guys, I brought a " + drinkTray.join(", ") + "!");
