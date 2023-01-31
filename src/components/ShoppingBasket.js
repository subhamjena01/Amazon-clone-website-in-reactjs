import './ShoppingBasket.scss';
import {useStateValue} from './StateProvider';
import Rating from "./Rating";

const ShoppingBasket = (props) =>{
    const { rating } = props
    const { myReducer } = useStateValue();
    const [state, dispatch] = myReducer;
    
    const clickHandler = (id) =>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }
    
    return(
        <div className="shoppingBasket">
            <h2>Your Shopping Basket</h2>
            <hr/>
            <ul className="list">
                {state.cartList.map((item, index) => (<li key= {index}>
                    <div className="imageHolder">
                        <img src={item.imageURL} alt=''/>
                    </div>
                    <div className="itemDetails">
                        <div>{item.title}</div>
                        <p><strong>${item.price}</strong></p>
                        <div><p className="starRating"> <Rating rating={ rating }/></p></div>
                        <button onClick = {()=>clickHandler(item.id)}>Remove from Cart</button>
                    </div>
                </li>))}
                
            </ul>
        </div>

    )
}
export default ShoppingBasket;