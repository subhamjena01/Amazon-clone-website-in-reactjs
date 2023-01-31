import './CheckoutAd.scss';
import { useStateValue } from './StateProvider';

const CheckoutAd = () =>{
    const { myReducer } = useStateValue();
    const [state] = myReducer;

    const getTotalAmount = ()=>{
        let total = 0;
        state.cartList.map( item => {
            return total=Number(total) + Number(item.price);
        })
        return total;
    }
    return(
        <div className='checkoutAd'>
            <div className='leftSide'>
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""/>
            </div>
            <div className='rightSide'>
                <div className='subTotal'>
                    <p>Subtotal({state.cartList.length} items): <strong>${getTotalAmount()}</strong></p>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutAd;