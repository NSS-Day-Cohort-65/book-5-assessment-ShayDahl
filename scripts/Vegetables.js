import { getVeggies, setVeggie } from "./database.js"

const veggies = getVeggies()

document.addEventListener(
    "change", 
    (event) => {
    if (event.target.name === "vegetable") {
        setVeggie(parseInt(event.target.value))
    }
})

export const Veggies = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = veggies.map(
        veggie => {
            return `<li>
                <input type="radio" name="vegetable" value="${veggie.id}" /> ${veggie.type}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}
