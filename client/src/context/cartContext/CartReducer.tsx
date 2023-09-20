export const initialState = {
    total: JSON.parse(localStorage.getItem('currentCartTotal') || '0'),
    cartList: JSON.parse(localStorage.getItem('currentCartList') || '[]'),
}

const cartReducer = (state: any, action: any) => {
    switch (action.type) {
        case "add":
            return {
                ...state,
                cartList: action.payload,
            }
        case "remove":
            return {
                ...state,
                cartList: action.payload,
            }
        case "getTotal":
            return {
                ...state,
                total: action.payload,
            }
        default: throw new Error("Cannot find the action type")
    }
};

export default cartReducer;