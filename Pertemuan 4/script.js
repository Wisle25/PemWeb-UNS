// Product Struct
class Product {
    constructor(name, price, discount, amount) {
        this.name = name
        this.price = price
        this.discount = discount
        this.amount = amount

        this.calculateTotalPrice()
    }

    calculateTotalPrice() {
        this.discountPrice = this.price * (1 - this.discount / 100)
        this.total         = this.discountPrice * this.amount
    }
}

// Array to store the products
const products = []

// Form submit, Add to the array
const onFormSubmit = (e) => {
    e.preventDefault()

    // Get all inputs from the form
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const discount = document.getElementById("discount").value
    const amount = document.getElementById("amount").value

    // Construct new product and then append to products
    products.push(new Product(name, price, discount, amount))

    // Reset
    e.target.reset()

    // ...
    const lastIdx = products.length - 1
    addList(lastIdx, products[lastIdx])
    calculateAllProducts()
}

const addList = (key, product) => {
    // Get the table list
    const list = document.getElementById("product-list")

    // Create a new table row element (<tr>)
    const newRow = document.createElement("tr")

    // Create cells (<td>) for each product property
    /** Name */
    const nameCell = document.createElement("td")
    nameCell.textContent = product.name
    nameCell.setAttribute("class", "p-2")
    newRow.appendChild(nameCell)

    /** Discount price  */
    const discountPriceCell = document.createElement("td")
    discountPriceCell.textContent = `Rp${product.discountPrice}`
    discountPriceCell.setAttribute("class", "p-2")
    newRow.appendChild(discountPriceCell)

    /** Amount cell */
    const amountCell = document.createElement("td")
    amountCell.textContent = product.amount
    amountCell.setAttribute("class", "p-2")
    newRow.appendChild(amountCell)

    /** Total Price cell */
    const totalPriceCell = document.createElement("td")
    totalPriceCell.textContent = `Rp${product.total}`
    totalPriceCell.setAttribute("class", "p-2")
    newRow.appendChild(totalPriceCell)

    // Finally, append the newly created row to the product-list
    list.appendChild(newRow)
}

const calculateAllProducts = () => {
    let result = 0

    // Calculate all
    for (let i = 0; i < products.length; ++i) {
        const element = products[i]
        
        result += element.total
    }
    // Show the result to the screen
    const resultDOM = document.getElementById("total-price")
    resultDOM.textContent = `Rp${result}`
}
