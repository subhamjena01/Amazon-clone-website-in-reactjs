import './productList.scss';
import Card from './Card';
import {useStateValue} from './StateProvider';

const ProductList = () => {
    const { initialState } = useStateValue();   
    return <div className="productList">
        {
            initialState.productList.map((item, index) => <Card key={index} {...item}/>)
        }
        </div>
}

export default ProductList;