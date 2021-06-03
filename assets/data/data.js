import image1 from '../Images/food-banner1.jpg'

export const foods = [
    {
        id: 1,
        title: "Lamb and pineapple korma",
        description: "Mild korma made with succulent lamb and fresh pineapple",
        price: 99.99,
        image: image1
    },
    {
        id: 2,
        title: "Eel and sorrel risotto",
        description: "Creamy risotto rice with eel and sorrel",
        price: 99.99,
        image: image1
    },
    {
        id: 3,
        title: "Prune tart with garlic sauce",
        description: "A rich pastry case filled with prune and served with garlic sauce",
        price: 99.99,
        image: image1
    },
    {
        id: 4,
        title: "Prune and stilton muffins",
        description: "Fluffy muffins made with fresh prune and stilton",
        price: 99.99,
        image: image1
    },
    {
        id: 5,
        title: "Feijoa and red onion salad",
        description: "A crunchy salad featuring fresh feijoa and dried red onion",
        price: 99.99,
        image: image1
    },
]

export function getFoodByID(id) {
    return foods.find((food) => food.id === id)

}