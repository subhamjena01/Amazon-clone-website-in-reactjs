import Rating from "./Rating";
import { useStateValue } from "./StateProvider";
const Card = (props) => {
    const { title, price, rating, imageURL } = props
    const { myReducer } = useStateValue();
    const [,dispatch] = myReducer;
    const clickHandler = (selectedValue) =>{
        const timeStamp = new Date().getTime();
        selectedValue = {...selectedValue, id:timeStamp};
        dispatch({
            type:'ADD_TO_CART',
            payload: selectedValue
        })
    }
    
    return(
    <div className="card">
        <p className="title">{ title }</p>
        <p className="price">${ price }</p>
        <p className="starRating"> <Rating rating={ rating }/></p>
        <div className="imageHolder">
            <img src={imageURL} alt=''/>
            <br/>
            <br/>
            <button onClick={() => clickHandler(props)}>Add to Cart</button>
        </div>
    </div>
)
}
export default Card;