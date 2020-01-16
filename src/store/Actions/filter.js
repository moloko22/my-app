import { actionCreator } from 'redux-action-creator';
const { filter, addFilter } = actionCreator('FILTER', 'ADD_FILTER');



export const  filterSearch = (obj) => {
    console.log(obj);
        let newArray = Object.assign({}, obj.cards);
        const dispatchFilter = {
            type: filter,
            payload: newArray,
        };
        // поиск по категории и городу
        if (obj.city !== 'Все города' && obj.category !== 'Все категории' && !obj.text && obj.city !== '') {
            obj.cards = obj.cards.filter(elem => elem.city === obj.city && elem.category === obj.category);
        }

        // поиск по категории и городу и инпуту
        if (obj.city !== 'Все города' && obj.category !== 'Все категории' && obj.text && obj.city !== '' && obj.category !== '') {
            obj.cards = obj.cards.filter(elem => elem.city === obj.city && elem.category === obj.category);
            obj.cards = obj.cards.map(elem => elem.header.toLowerCase().indexOf(obj.text) === -1 ? elem : null);
            newArray = obj.cards.filter(elem => elem.header === obj.text);
        }

        // поиск по категории и инпуту
        if (obj.city === 'Все города' && obj.category !== 'Все категории' && obj.text) {
            obj.cards = obj.cards.filter(elem => elem.city === obj.city && elem.category === obj.category);
            newArray = obj.cards.map(elem => elem.header.toLowerCase().indexOf(obj.text) === -1 ? elem : null);
        }


// поиск по городу и инпуту
        if (obj.city !== 'Все города' && obj.text && obj.category === 'Все категории') {
            obj.cards = obj.cards.filter(elem => elem.city === obj.city);
            newArray = obj.cards.map(elem => elem.header.toLowerCase().indexOf(obj.text) === -1 ? elem : null);
        }

        //поиск по инпуту
        if ((obj.city === '' || obj.city === 'Все города') && (obj.category === '' || obj.category === 'Все категории') && obj.text) {
            const newArrayStringsItem = obj.cards.map(elem => {
                return elem.header.split(' ')
            });
            obj.cards.map((elem, i) => elem.arrayStrings = newArrayStringsItem[i]);
            const arr = [];
            obj.cards.forEach((elem, i) => {
                arr.push(elem.arrayStrings.filter(item => item.toLocaleString().toLowerCase() === obj.text.toLocaleString().toLowerCase() ? elem : null));
            });
            newArray = arr.map(elem => elem.length > 0);
        }

        //по городу
        if (obj.city !== 'Все города' && (obj.caregory === 'Все города' || obj.category === '') && !obj.text) {
            newArray = obj.cards.filter(elem => elem.city === obj.city);
        }

        //по категории
        if ((obj.city === 'Все города' || obj.city === '') && obj.category !== 'Все категории' && !obj.text) {
            obj.cards = obj.cards.filter(elem => elem.category === obj.category ? elem : null);
            newArray.filterSearch.category = obj.category;
        }
        console.log('ololo');
        dispatch(dispatchFilter);
    }
};

export const addFilterSearch = (obj) => {
    return dispatch => {
        const filtersState = {};
        if(obj.value !== 'Все города' || obj.value !== 'Все категории'){
            const index = filtersState[filter].indexOf(obj.value);
            const element = filtersState[filter].splice(index, 1);
            filtersState[filter] = element[0];
            filtersState[filter].unshift(element);
        }
        if(obj.value === 'Все категории' || obj.value === 'Все города'){
            const index = filtersState[filter].indexOf(obj.value);
            const element = filtersState[filter].splice(index, 1);
            filtersState[filter] = '';
            filtersState[filter].unshift(element);
        }
        console.log(filtersState);
        dispatch(addFilter(filtersState))
    };
};








