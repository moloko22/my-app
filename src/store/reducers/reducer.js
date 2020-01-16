const initialState = {
        filterSearch: {
            city: '',
            category: '',
        },
        equipmentState: [
            {category:'Прототипирование', year: 2018, company: 'OOO-Oculus', date: '20.01.20', city: 'Москва', header: 'Fortus 900MC - промышленный 3D принтер c самой большой рабочей зоной', id: 1, price: 2500,  text: 'Рабочая зона - 914х609х914 мм', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Биомедицина', year: 2013, company: 'OOO-Poilu', date: '26.01.20', city: 'Одесса', header: 'Titan Themis - просвечивающий электронный микроскоп', id: 2, price: 2500, text: 'Ускоряющее напряжение - 300кв', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Метрология', year: 1998, company: 'OOO-Sberbank', date: '20.01.20', city: 'Сочи', header: 'Oxford System 100 Pro - кластерная установка с камерой осаждения атомных слоев', id: 3, price: 2500, text: 'text', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Испытания', year: 2001, company: 'OOO-Kiumat', date: '13.01.20', city: 'Москва', header: 'V780 - вибрационный стенд ', id: 4, text: 'Проведение ударных и вибрационных испытаний изделий весом до 100км ', price: 2500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'}
        ],
        categoryState: [
            {id: 1, category:'Прототипирование', name: 'Прототипирование', titles:['Бесконтактная обработка', 'Точная механобработка', 'Доступ в Hardware Hackspace']},
            {id: 2, category:'Биомедицина', name: 'Биомедицина', titles:['Доступ к оборудованию SkBioLab', 'Доклинические исследования', 'Клинические исследования']},
            {id: 3, category:'Метрология', name: 'Метрология', titles:['Линейно-угловые измерения, формы, шерховатости', 'Химические исследования', 'Квантовая оптика']},
            {id: 4, category:'Испытания', name: 'Испытания', titles:['Электрохимичиские испытания', 'Микробиологические испытания', 'Мониторинг "чистых производственных помещений"']}
        ],
        filtersState: {
            city: ['Все города', 'Москва', 'Одесса', 'Сочи'],
            category: ['Все категории', 'Прототипирование', 'Биомедицина', 'Метрология', 'Испытания'],
        },
        inputValue: '',
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_BY_CATEGORY' : {
            const newObject = Object.assign({}, initialState);
            newObject.equipmentState = newObject.equipmentState.filter(elem => elem.category === action.payload ? elem : null);
            newObject.filterSearch.category = action.payload;
            return newObject;
        }
        case 'FILTER_BY_CITY' : {
            const newObject = Object.assign({}, initialState);
            newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload ? elem : null);
            return newObject;
        }
        case 'SEARCH' : {
            const newObject = Object.assign({}, initialState);
            console.log(newObject);
            // поиск по категории и городу
            if (action.payload.city !== 'Все города' && action.payload.category !== 'Все категории' && !action.payload.text && action.payload.city !== '') {
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
                return newObject;
                console.log(newObject.equipmentState);
            }
            // поиск по категории и городу и инпуту
            if (action.payload.city !== 'Все города' && action.payload.category !== 'Все категории' && action.payload.text && action.payload.city !== '' && action.payload.category !== '') {
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
                newObject.equipmentState = newObject.equipmentState.map(elem => elem.header.toLowerCase().indexOf(action.payload.text) === -1 ? elem : null);
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.header === action.payload.text);
                console.log(newObject.equipmentState);
                return newObject;
            }
            // поиск по категории и инпуту
            if (action.payload.city === 'Все города' && action.payload.category !== 'Все категории' && action.payload.text) {
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
                newObject.equipmentState = newObject.equipmentState.map(elem => elem.header.toLowerCase().indexOf(action.payload.text) === -1 ? elem : null);
                console.log(newObject.equipmentState);
                return newObject;
            }

            // поиск по городу и инпуту
            if (action.payload.city !== 'Все города' && action.payload.text && action.payload.category === 'Все категории') {
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city);
                newObject.equipmentState = newObject.equipmentState.map(elem => elem.header.toLowerCase().indexOf(action.payload.text) === -1 ? elem : null);
                console.log(newObject.equipmentState);
                return newObject;
            }
            //поиск по инпуту
            if ((action.payload.city === '' || action.payload.city === 'Все города') && (action.payload.category === '' || action.payload.category === 'Все категории') && action.payload.text) {
                const newArrayStringsItem = newObject.equipmentState.map(elem => {
                    return elem.header.split(' ')
                });
                newObject.equipmentState.map((elem, i) => elem.arrayStrings = newArrayStringsItem[i]);
                const newArray = [];
                newObject.equipmentState.forEach((elem, i) => {
                    newArray.push(elem.arrayStrings.filter(item => item.toLocaleString().toLowerCase() === action.payload.text.toLocaleString().toLowerCase() ? elem : null));
                });
                newObject.equipmentState = newArray.map(elem => elem.length > 0);
                console.log(newObject.equipmentState);
                return newObject;
            }
            //по городу
            if (action.payload.city !== 'Все города' && (action.payload.caregory === 'Все города' || action.payload.category === '') && !action.payload.text) {
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload);
                console.log(newObject.equipmentState);
                return newObject;
            }
            //по категории
            if ((action.payload.city === 'Все города' || action.payload.city === '') && action.payload.category !== 'Все категории' && !action.payload.text) {
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.category === action.payload.category ? elem : null);
                newObject.filterSearch.category = action.payload;
                console.log(newObject.equipmentState);
                return newObject;
            }
            return newObject;
        }
        case 'ADD_FILTER': {
            const newObject = Object.assign({}, initialState);
            if(action.payload[0] !== 'Все города' || action.payload[0] !== 'Все категории'){
                const index = newObject.filtersState[action.payload[1]].indexOf(action.payload[0]);
                const element = newObject.filtersState[action.payload[1]].splice(index, 1);
                newObject.filterSearch[action.payload[1]] = element[0];
                newObject.filtersState[action.payload[1]].unshift(element);
                return newObject;
            }
            if(action.payload[0] === 'Все категории' || action.payload[0] === 'Все города'){
                const index = newObject.filtersState[action.payload[1]].indexOf(action.payload[0]);
                const element = newObject.filtersState[action.payload[1]].splice(index, 1);
                newObject.filterSearch[action.payload[1]] = '';
                newObject.filtersState[action.payload[1]].unshift(element);
                return newObject;
            }
            return newObject;
        }
        case 'CHANGE_INPUT_VALUE': {
            const newObject = Object.assign({}, initialState);
            newObject.inputValue = action.payload;
            return newObject;
        }
        default : return state;
    }
}