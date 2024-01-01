import {selector} from 'recoil'
import {cartItemsState} from '../atoms/cart'

export const deleteCartItems = selector({
    key: 'deleteCartItems',
    get: (({get})=>{
        const cartItems = get(cartItemsState)
        cartItems.push()
    })
})