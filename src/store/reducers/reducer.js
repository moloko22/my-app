const initialState = {
        equipmentState: [
            {category:'Прототипирование', year: 2018, company: 'OOO-Oculus', date: '20.01.20', city: 'Москва', header: 'Fortus 900MC - промышленный 3D принтер c самой большой рабочей зоной', id: 1, price: 2500,  text: 'Рабочая зона - 914х609х914 мм', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Биомедицина>', year: 2013, company: 'OOO-Poilu', date: '26.01.20', city: 'Одесса', header: 'Titan Themis - просвечивающий электронный микроскоп', id: 2, price: 2500, text: 'Ускоряющее напряжение - 300кв', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Метрология', year: 1998, company: 'OOO-Sberbank', date: '20.01.20', city: 'Сочи', header: 'Oxford System 100 Pro - кластерная установка с камерой осаждения атомных слоев', id: 3, price: 2500, text: 'text', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Испытания', year: 2001, company: 'OOO-Kiumat', date: '13.01.20', city: 'Москва', header: 'V780 - вибрационный стенд ', id: 4, text: 'Проведение ударных и вибрационных испытаний изделий весом до 100км ', price: 2500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'}
        ],
        categoryState: [
            {id: 1, name: 'Прототипирование', titles:['Бесконтактная обработка', 'Точная механобработка', 'Доступ в Hardware Hackspace']},
            {id: 2, name: 'Биомедицина', titles:['Доступ к оборудованию SkBioLab', 'Доклинические исследования', 'Клинические исследования']},
            {id: 3, name: 'Метрология', titles:['Линейно-угловые измерения, формы, шерховатости', 'Химические исследования', 'Квантовая оптика']},
            {id: 4, name: 'Испытания', titles:['Электрохимичиские испытания', 'Микробиологические испытания', 'Мониторинг "чистых производственных помещений"']}
        ],
        filtersState: {
            city: ['Москва', 'Одесса', 'Сочи'],
            category: ['First', 'Second', 'Third'],
        },
        filters: {
            city: '',
            category: '',
        },
        inputValue: '',
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_LIST':
            return state;
        case 'FILTER_BY_CITY': {
            const newArray = state.equipmentState.slice();
            newArray.filter(elem => elem.city === action.payload.city);
            return newArray;
        }
        case 'FILTER_BY_CATEGORY' : {
            const newArray = state.equipmentState.slice();
            newArray.filter(elem => elem.category === action.payload.category);
            return newArray;
        }
        case 'BOTH_FILTERS' : {
            const newArray = state.equipmentState.slice();
            newArray.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
            return newArray;
        }
        case 'BOTH_FILTERS_AND_INPUT': {
            const newArray = state.equipmentState.slice();
            newArray.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
            newArray.filter(elem => elem.action.payload.text);
            return newArray;
        }
        case 'SEARCH': {
            const newArray = state.equipmentState.slice();
            if(!state.filters){
                newArray.filter(elem => elem.header === action.payload.text)
            }
            break;
        }
        case 'ADD_FILTER': {
            const newObject = Object.assign({}, state);
            if(action.payload[1] === 'category' && action.payload[0] !== 'Все города'){
                newObject.filters.category = action.payload[0];
                return newObject;
            }
            if(action.payload[1] === 'city' && action.payload[0] !== 'Все категории'){
                newObject.filters.city = action.payload[0];
                return newObject;
            }
            return state;
        }
        case 'CHANGE_INPUT_VALUE': {
            const newObject = Object.assign({}, state);
            newObject.inputValue = action.payload;
            return newObject;
        }
        default : return state;
    }
}