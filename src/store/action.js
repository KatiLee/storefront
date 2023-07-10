export const changeProducts =(category) => {
    return {
        type: 'CHANGE_PRODUCTS',
        payload: category,
    }
}

export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product,
    }
}

export const removeFromCart = (porduct) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: product,
    }
}

export const reset = () => {
    return {
        type: 'RESET',
        payload: {}
    }
}