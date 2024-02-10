import {selector} from 'recoil'
import {cartItemsState} from '../atoms/cart'

export const totalCost = selector({
    key: "totalCost",
    get: ({get})=>{
        const cartItems = get(cartItemsState)
        const noOfItems = cartItems.filter(i=>i.checked).length;
        let itemsTotal =0;
        cartItems.forEach(i=>i.checked?itemsTotal+=(i.quantity*i.price): itemsTotal+=0)
        const tax = (itemsTotal*0.15).toFixed(2);
        const deliveryCost = itemsTotal ? 100 : 0;
        const totalPayment = (parseFloat(itemsTotal) + parseFloat(tax) + parseFloat(deliveryCost)).toFixed(2);
        return {noOfItems, itemsTotal,tax,deliveryCost,totalPayment}
    },
})