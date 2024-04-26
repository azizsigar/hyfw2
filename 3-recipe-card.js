/**
 * Ever wondered how to make a certain meal? Let's create a recipe list with JavaScript!
 *   
 *   Declare a variable that holds an empty object literal (your meal recipe).
 *   Give the object 3 properties: a title (string), a servings (number) and an ingredients (array of strings) property.
 *   Log each property out separately, using a loop (for, while or do/while)
 *   
 * Expected result:
 *   
 *   Meal name: Omelette
 *   Serves: 2
 *   Ingredients: 4 eggs, 2 strips of bacon, 1 tsp salt/pepper
 */

let meal = {
    title: "doner",
    serving: 2,
    ingredients: [
        "300gr cow meat",
        "300ml ayran",
        "500gr salad",
        "1tsp salt",
    ]
}

for (const i in meal) {
    if (i === "title") {
        console.log(`Todays menu:  ${meal.title}`)

    } else if (i==="serving"){
        console.log(`for ${meal.serving} peoples.`)
    } else {
        console.log(meal.ingredients.join(','))
    }
}