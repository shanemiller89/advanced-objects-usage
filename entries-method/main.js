let foodContainer = document.querySelector(".food")

let favoriteFoods = [
    {
        name: "Hot Chicken",
        style: "Southern"
    },
    {
        name: "Chicken Casserole",
        style: "Mid-West"
    },
    {
        name: "Pizza",
        style: "Italian"
    }

]

favoriteFoods.forEach(food => {
    foodContainer.innerHTML += "<hr/>"

    for (const entry of Object.entries(food)) {
        foodContainer.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})