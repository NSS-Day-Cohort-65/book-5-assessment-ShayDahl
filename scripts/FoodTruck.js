import { addCustomOrder } from "./database.js"
import { Sales } from "./Sales.js"
import { Entrees } from "./Entrees.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

document.addEventListener(
    "click", 
    (event) => {
    if (event.target.id === "purchase") {
        addCustomOrder()
    }
})

export const FoodTruck = () => {
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">
            <section class="choices__base options">
                <h2>Base Dish</h2>
                ${Entrees()}
            </section>
            <section class="choices__sides options">
                <h2>Sides</h2>
                ${Sides()}
            </section>
            <section class="choices__veggies options">
                <h2>Vegetables</h2>
                ${Veggies()}
            </section>
        </article>

        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${Sales()}
        </article>

    `
}
