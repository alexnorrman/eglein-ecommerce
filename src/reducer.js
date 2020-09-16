export const initialState = {
    user: null,
    shoppingBag: [],
    wishlist: [],
    products: [],
};
//
//selector
export const getShoppingBagTotalPrice = (shoppingBag) => 
    shoppingBag?.reduce((sum, item) => sum + (item.price * item.quantity),0);

export const getShoppingBagTotalItems = (shoppingBag) => 
    shoppingBag?.reduce((sum, item) => sum + item.quantity,0);

export const getSpecificProduct = (products, id) => {
    const indexExists = products.findIndex((item) => item.id ===id);
    if(indexExists >= 0){
        return products[indexExists];
    }
    else{
        console.warn(`Can't find product (id: ${id})`)
    }
}


function reducer(state, action) {
    console.log(action);
    let newShoppingBag;
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }
        case 'SET_PRODUCTS':
            return{
                ...state,
                products: action.products
            }
        case 'ADD_TO_SHOPPING_BAG':
            
            newShoppingBag = [...state.shoppingBag];
            const indexExists = state.shoppingBag.findIndex((shoppingItem) => shoppingItem.id === action.item.id);
            if(indexExists >= 0){
                /*console.log(Date.now()+"before..."+newShoppingBag[indexExists].quantity);
                newShoppingBag = Object.assign({}, state.shoppingBag);
                newShoppingBag[indexExists].quantity++;

                console.log(Date.now()+"after...."+newShoppingBag[indexExists].quantity);
                return {
                    ...state,
                    shoppingBag: Object.assign({}, ...state.shoppingBag, {
                        quantity: action.filter
                      })
                }*/
                return {
                    ...state,
                    shoppingBag: state.shoppingBag.map(shoppingItem =>
                        shoppingItem.id === action.item.id
                        ? {...shoppingItem, quantity: shoppingItem.quantity + action.item.quantity}
                        : shoppingItem,
                    ),
                  };
            } else{
                return {
                    ...state,
                    shoppingBag: [...state.shoppingBag, action.item],
                }
            }
            
        case 'REMOVE_FROM_SHOPPING_BAG':
            //let newShoppingBag = [...state.shoppingBag];
            newShoppingBag = [...state.shoppingBag];
            const indexToRemove = state.shoppingBag.findIndex((shoppingItem) => shoppingItem.id === action.item.id);

            if(indexToRemove >= 0) {
                newShoppingBag.splice(indexToRemove, 1);
            }else{
                console.warn(`Can't remove product (id: ${action.item.id}) as it's not in the shopping bag.`)
            }
            return {
                ...state,
                shoppingBag: newShoppingBag,
            }
        case 'ADD_TO_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.item],
            }
        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                wishlist: [...state.wishlist, action.item],
            }
        default:
            return state;
    }
    
}

export default reducer;