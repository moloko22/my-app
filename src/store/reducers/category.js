const categoryState = [
    {id: 1, name: 'Прототипирование', titles:['Бесконтактная обработка', 'Точная механобработка', 'Доступ в Hardware Hackspace']},
    {id: 2, name: 'Биомедицина', titles:['Доступ к оборудованию SkBioLab', 'Доклинические исследования', 'Клинические исследования']},
    {id: 3, name: 'Метрология', titles:['Линейно-угловые измерения, формы, шерховатости', 'Химические исследования', 'Квантовая оптика']},
    {id: 4, name: 'Испытания', titles:['Электрохимичиские испытания', 'Микробиологические испытания', 'Мониторинг "чистых производственных помещений"']}
];

export default function category(state = categoryState, action){
    switch(action.type){
        case('GET_ALL_CATEGORY'): return state;
        case('GET_ONCE_CATEGORY'): {
            const newArray = state.slice();
            newArray.filter(elem => elem.category === action.payload);

            return newArray;
        }
        default: return state;
    }
}