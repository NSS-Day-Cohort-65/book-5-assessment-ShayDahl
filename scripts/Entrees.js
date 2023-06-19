import { getEntrees, setEntree } from "./database.js"

const entrees = getEntrees()

document.addEventListener(
    "change",
     (event) => {
        if (event.target.name === "entree") {
            setEntree(parseInt(event.target.value))
        }
})

// Requirement: The radio input elements that this component funcion renders must all have a name of "entree"
export const Entrees = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = entrees.map(
        entree => {
            return `<li>
                <input type="radio" name="entree" value="${entree.id}" /> ${entree.name}
            </li>`
        }
    )


    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}