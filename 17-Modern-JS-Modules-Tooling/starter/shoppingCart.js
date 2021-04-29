// LECTURE 268

// Exporting Module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
	cart.push({ product, quantity });
	if (quantity > 1) {
		console.log(`${quantity} ${product} were added to the cart`);
	} else {
		console.log(`${quantity} ${product} was added to the cart`);
	}
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };

export default function (product, quantity) {
	cart.push({ product, quantity });
	if (quantity > 1) {
		console.log(`${quantity} ${product} were added to the cart`);
	} else {
		console.log(`${quantity} ${product} was added to the cart`);
	}
}
