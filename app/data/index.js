export const categories = [

    {
        id: 1,
        title: "Cappuccino",
    },

    {
        id: 2,
        title: "Latte",
    },

    {
        id: 3,
        title: "Espresso",
    },

    {
        id: 4,
        title: "Mocha",
    },

    {
        id: 5,
        title: "Americano",
    },


]

export const coffeeItems = [
    {
        id: 1,
        name: 'Black Cappuccino',
        price: '25.50',
        volume: '116 ml',
        stars: '4.6',
        image: require('../../assets/images/mocha.png'),
        desc: "The taste of coffee can vary depending on factors such as the type of beans, roast etc...",
    },

    {
        id: 2,
        name: 'Iced Latte',
        price: '25.50',
        volume: '116 ml',
        stars: '4.6',
        image: require('../../assets/images/americano.png'),
        desc: "The taste of coffee can vary depending on factors such as the type of beans, roast etc...",
    },

    {
        id: 3,
        name: 'Double Shot Espress',
        price: '25.50',
        volume: '116 ml',
        stars: '4.6',
        image: require('../../assets/images/cappuccino.png'),
        desc: "The taste of coffee can vary depending on factors such as the type of beans, roast etc...",
    },

    {
        id: 4,
        name: 'Iced White Mocha',
        price: '25.50',
        volume: '116 ml',
        stars: '4.6',
        image: require('../../assets/images/espresso.png'),
        desc: "The taste of coffee can vary depending on factors such as the type of beans, roast etc...",
    },

    {
        id: 5,
        name: 'Hot Americano',
        price: '25.50',
        volume: '116 ml',
        stars: '4.6',
        image: require('../../assets/images/lattee.png'),
        desc: "The taste of coffee can vary depending on factors such as the type of beans, roast etc...",
    },



]

export default { categories, coffeeItems };
