import {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    EMPTY_CART,
    SET_QUANTITY,
    INCREMENT,
    DECREMENT
} from "./constants";

const initialState = {
    products: [],
    cart: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.product]
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                cart: state.cart.filter(
                    product => product.id !== action.productId
                )
            };
        case EMPTY_CART:
            return {
                ...state,
                cart: []
            };
        case SET_QUANTITY:
            switch (action.setQuantityType) {
                case INCREMENT:
                    return {
                        ...state,
                        cart: state.cart.map(product => {
                            if (product.id === action.productId) {
                                return {
                                    ...product,
                                    quantity: product.quantity + action.quantity
                                };
                            } else {
                                return product;
                            }
                        })
                    };
                case DECREMENT:
                    return {
                        ...state,
                        cart: state.cart.map(product => {
                            if (product.id === action.productId) {
                                return {
                                    ...product,
                                    quantity: product.quantity - action.quantity
                                };
                            } else {
                                return product;
                            }
                        })
                    };
                default:
                    return {
                        ...state,
                        cart: state.cart.map(product => {
                            if (product.id === action.productId) {
                                return {
                                    ...product,
                                    quantity: action.quantity
                                };
                            } else {
                                return product;
                            }
                        })
                    };
            }
        default:
            return state;
    }
};
