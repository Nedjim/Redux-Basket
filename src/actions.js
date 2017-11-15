import {
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	EMPTY_CART,
	SET_QUANTITY
} from "./constants";

export const addProduct = product => {
	return {
		type: ADD_PRODUCT,
		product
	};
};

export const removeProduct = productId => {
	return {
		type: ADD_PRODUCT,
		productId
	};
};

export const emptyCart = () => {
	return {
		type: EMPTY_CART
	};
};

export const setQuantity = (setQuantityType, quantity) => {
	return {
		type: SET_QUANTITY,
		setQuantityType,
		quantity
	};
};
