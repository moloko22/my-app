import { combineReducers } from 'redux'
import equipment from "./equipment";
import category from "./category";
import filters from "./filters";

const reducer = combineReducers({
    equipment, filters, category,
});

export default reducer;