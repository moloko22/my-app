case 'FILTER_BY_CITY': {
    const newObject = Object.assign({}, state);
    newObject.equipmentState.filter(elem => elem.city === action.payload);
    return newObject;
}
case 'FILTER_BY_CATEGORY' : {
    const newObject = Object.assign({}, state);
    newObject.equipmentState.filter(elem => elem.category === action.payload);
    return newObject;
}
case 'BOTH_FILTERS' : {
    const newObject = Object.assign({}, state);
    newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
    return newObject;
}
case 'BOTH_FILTERS_AND_INPUT': {
    const newObject = Object.assign({}, state);
    newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
    newObject.equipmentState.filter(elem => elem.header === action.payload.text);
    return newObject;
}
case 'SEARCH': {
    const newObject = Object.assign({}, state);
    if(!state.filters && !state.inputValue){
        return newObject;
    }
    return newObject;
}
case 'SEARCH_BY_INPUT_VALUE': {
    const newObject = Object.assign({}, state);
    newObject.equipmentState.filter(elem => elem.header === action.payload.text);
    return newObject;
}