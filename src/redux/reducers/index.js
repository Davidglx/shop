import { combineReducers } from "redux";
import { selectedProductReducer, productReducer} from '../../redux/reducers/productReducer';

 const reducers = combineReducers({
     allProducts: productReducer,
     product: selectedProductReducer,
 })

 export default reducers;


