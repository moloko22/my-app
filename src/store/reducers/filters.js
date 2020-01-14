const filtersState = {
    city: ['Все города','Москва', 'Одесса', 'Сочи'],
    category: ['Все категории', 'First', 'Second', 'Third'],
};


export default function filters(state = filtersState, action){
    switch(action.type) {
        case('CITY_FILTER'): {
         return
        }
        default: return state;
    }
}