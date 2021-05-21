// This file mimics an API, i.e. it returns a Promise with the data we need,
// just like an external API.

// Imports the images for all products
import appleImg from "../../assets/apple.jpg";
import orangeImg from "../../assets/orange.jpg";
import pearImg from "../../assets/pear.jpg";
import strawberryImg from "../../assets/strawberry.jpg";

export function fetchProducts() {

    // Mock data for this web shop. This is the data that would normally be fetched from an external API.
    const productsData = [
        {
            name: 'apple',
            img: appleImg,
            price: 2.50
        },
        {
            name: 'orange',
            img: orangeImg,
            price: 4
        },
        {
            name: 'pear',
            img: pearImg,
            price: 3.50
        },
        {
            name: 'strawberry',
            img: strawberryImg,
            price: 0.10
        },
    ];

    // Returns a Promise, like an actual API call would, with the above data.
    return new Promise((resolve, reject) =>
        setTimeout(() => {

            // This reject function can be used to test if the .rejected action runs properly at fail.
            // reject();

            resolve({data: productsData})
        }, 2000)
    );
}
