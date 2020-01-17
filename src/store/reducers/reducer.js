const initialState = {
        orders: [
            {status:  'Заявка отправлена',date: '16 февраля', category:'Прототипирование', year: 2018, company: 'OOO-Oculus', city: 'Москва', header: 'Fortus 900MC - промышленный 3D принтер c самой большой рабочей зоной', id: 1, price: 2500,  text: 'Прибор для ультразвуковой фрагментации, обеспечивает быструю и надежную фрагментацию ДНК до длин, оптимальных для приготовления библиотек для NGS (секвенирования нового поколения). Диапазон длин фрагментов – от 150 до 5000 пар нуклеотидов', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'}
        ],
        filterSearch: {
            city: '',
            category: '',
        },
        equipmentState: [
            {category:'Прототипирование', year: 2018, company: 'OOO-Oculus', date: '20.01.20', city: 'Москва', header: 'Fortus 900MC - промышленный 3D принтер c самой большой рабочей зоной', id: 1, price: 2500,  text: 'Прибор для ультразвуковой фрагментации, обеспечивает быструю и надежную фрагментацию ДНК до длин, оптимальных для приготовления библиотек для NGS (секвенирования нового поколения). Диапазон длин фрагментов – от 150 до 5000 пар нуклеотидов', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Биомедицина', year: 2013, company: 'OOO-Poilu', date: '26.01.20', city: 'Одесса', header: 'Titan Themis - просвечивающий электронный микроскоп', id: 2, price: 2500, text: 'Прибор для ультразвуковой фрагментации, обеспечивает быструю и надежную фрагментацию ДНК до длин, оптимальных для приготовления библиотек для NGS (секвенирования нового поколения). Диапазон длин фрагментов – от 150 до 5000 пар нуклеотидов', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Метрология', year: 1998, company: 'OOO-Sberbank', date: '20.01.20', city: 'Сочи', header: 'Oxford System 100 Pro - кластерная установка с камерой осаждения атомных слоев', id: 3, price: 2500, text: 'Прибор для ультразвуковой фрагментации, обеспечивает быструю и надежную фрагментацию ДНК до длин, оптимальных для приготовления библиотек для NGS (секвенирования нового поколения). Диапазон длин фрагментов – от 150 до 5000 пар нуклеотидов', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'},
            {category:'Испытания', year: 2001, company: 'OOO-Kiumat', date: '13.01.20', city: 'Москва', header: 'V780 - вибрационный стенд ', id: 4, text: 'Прибор для ультразвуковой фрагментации, обеспечивает быструю и надежную фрагментацию ДНК до длин, оптимальных для приготовления библиотек для NGS (секвенирования нового поколения). Диапазон длин фрагментов – от 150 до 5000 пар нуклеотидов', price: 2500, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'}
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
    console.log('ДАННЫЕ НА ВХОДЕ');
    console.log(action.payload);
    switch (action.type) {
        case 'FILTER_BY_CATEGORY' : {
            const newObject = Object.assign({}, initialState);
            newObject.equipmentState = newObject.equipmentState.filter(elem => elem.category === action.payload.text ? elem : null);
            const index = newObject.filtersState[action.payload.category].indexOf(action.payload.text);
            const element = newObject.filtersState[action.payload.category].splice(index, 1);
            newObject.filterSearch[action.payload.category] = element[0];
            newObject.filtersState[action.payload.category].unshift(element[0]);
            newObject.filterSearch.category = action.payload.text;
            return newObject;
        }
        case 'FILTER' : {
            // поиск по категории и городу
            if (action.payload.city !== 'Все города' && action.payload.category !== 'Все категории' && !action.payload.text && action.payload.category !== '' && action.payload.city !== '') {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по категории и городу');
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
                return newObject;
            }
            // поиск по категории и городу и инпуту
            if (action.payload.city !== 'Все города' && action.payload.category !== 'Все категории' && action.payload.category !== '' && action.payload.text && action.payload.city !== '') {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по категории и городу и инпуту');
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city && elem.category === action.payload.category);
                let newArray = newObject.equipmentState;
                newArray = newArray.filter(elem => elem.header.toLowerCase().includes(action.payload.text.toLowerCase()));
                newObject.equipmentState = newArray;
                return newObject;
            }
            // поиск по категории и инпуту
            if ((action.payload.city === 'Все города' || action.payload.city === '') && action.payload.category !== 'Все категории' && action.payload.text ) {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по категории и инпуту');
                let newArrayCategory = [];
                newArrayCategory = newObject.equipmentState.filter(elem => elem.category === action.payload.category);
                let newArray = newArrayCategory;
                newArray = newArray.filter(elem => elem.header.toLowerCase().includes(action.payload.text.toLowerCase()));
                newObject.equipmentState = newArray;
                return newObject;
            }

            // поиск по городу и инпуту
            if (action.payload.city !== 'Все города' && action.payload.text && (action.payload.category === 'Все категории' || action.payload.category === '')) {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по инпуту и городу');
                let newArrayCity = [];
                newArrayCity = newObject.equipmentState.filter(elem => elem.city === action.payload.city);
                let newArray = newArrayCity;
                newArray = newArray.filter(elem => elem.header.toLowerCase().includes(action.payload.text.toLowerCase()));
                newObject.equipmentState = newArray;
                return newObject;
            }
            //поиск по инпуту
            if ((action.payload.city === '' || action.payload.city === 'Все города') && (action.payload.category === '' || action.payload.category === 'Все категории') && action.payload.text) {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по инпуту');
                let newArray = newObject.equipmentState;
                newArray = newArray.filter(elem => elem.header.toLowerCase().includes(action.payload.text.toLowerCase()));
                newObject.equipmentState = newArray;
                return newObject;
            }
            //по городу
            if (action.payload.city !== 'Все города' && (action.payload.category === 'Все города' || action.payload.category === '') && !action.payload.text && action.payload.city !== '') {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по городу');
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.city === action.payload.city);
                newObject.filterSearch.city = action.payload.city;
                return newObject;
            }
            //по категории
            if ((action.payload.city === 'Все города' || action.payload.city === '') && action.payload.category !== 'Все категории' && !action.payload.text && action.payload.category !== '') {
                const newObject = Object.assign({}, initialState);
                console.log('поиск по категории');
                newObject.equipmentState = newObject.equipmentState.filter(elem => elem.category === action.payload.category ? elem : null);
                newObject.filterSearch.category = action.payload.category;
                return newObject;
            }
            console.log('ОТДАЛ ВЕСЬ СПИСОК');
            console.log(initialState);
            return initialState;
        }
        case 'ADD_FILTER': {
            const newObject = Object.assign({}, initialState);
            if(action.payload.text !== 'Все города' || action.payload.text !== 'Все категории'){
                const index = newObject.filtersState[action.payload.category].indexOf(action.payload.text);
                const element = newObject.filtersState[action.payload.category].splice(index, 1);
                newObject.filterSearch[action.payload.category] = element[0];
                newObject.filtersState[action.payload.category].unshift(element[0]);
                return newObject;
            }
            if(action.payload.text === 'Все категории' || action.payload.text === 'Все города'){
                const index = newObject.filtersState[action.payload.category].indexOf(action.payload.text);
                const element = newObject.filtersState[action.payload.category].splice(index, 1);
                newObject.filterSearch[action.payload.category] = '';
                newObject.filtersState[action.payload.category].unshift(element[0]);
                return newObject;
            }
            return state;
        }
        case 'CHANGE_INPUT_VALUE': {
            const newObject = Object.assign({}, initialState);
            newObject.inputValue = action.payload;
            return newObject;
        }
        default : return state;
    }
}