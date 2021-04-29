// /*
// LECTURE 268
// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 3);
// console.log(price, tq);

console.log('Importing module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('milk', 6);
// console.log(ShoppingCart.totalPrice);

//NOTE It is possible to mix default and named imports, as in the line below, but in practice this is never done
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, { cart } from './shoppingCart.js';
add('pizza', 3);
add('bread', 5);
add('bananas', 36);

console.log(cart);
// */
// LECTURE 269
/*
const ShoppingCart2 = (function () {
	const cart = [];
	const shippingCost = 10;
	const totalPrice = 237;
	const totalQuantity = 23;

	const addToCart = function (product, quantity) {
		cart.push({ product, quantity });
		if (quantity > 1) {
			console.log(
				`${quantity} ${product} were added to the cart. Shipping cost is ${shippingCost}.`
			);
		} else {
			console.log(
				`${quantity} ${product} was added to the cart. Shipping cost is ${shippingCost}.`
			);
		}
	};

	const orderStock = function (product, quantity) {
		console.log(`${quantity} ${product} ordered from supplier`);
	};

	return {
		addToCart,
		cart,
		totalPrice,
		totalQuantity,
	};
})();

ShoppingCart2.addToCart('Aubergines', 10);
ShoppingCart2.addToCart('Watermelon', 1);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost); // Not available because it was not returned
*/
// LECTURE 270
/*
// NOTE A look at CommonJS modules as used in node.js and NPM
// Export
export.addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    if (quantity > 1) {
        console.log(
            `${quantity} ${product} were added to the cart. Shipping cost is ${shippingCost}.`
        );
    } else {
        console.log(
            `${quantity} ${product} was added to the cart. Shipping cost is ${shippingCost}.`
        );
    }
};

// Import
const {addToCart} = require('./shoppingCart.js')
*/

// LECTURE 272

// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';

const state = {
	cart: [
		{ product: 'bread', quantity: 5 },
		{ product: 'milk', quantity: 3 },
		{ product: 'potatoes', quantity: 12 },
	],
	user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

if (module.hot) {
	module.hot.accept();
}
