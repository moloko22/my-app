const equipmentState = [
    {header: 'Fortus 900MC - промышленный 3D принтер c самой большой рабочей зоной', id: 1, price: 2500,  text: 'Рабочая зона - 914х609х914 мм', img: '#'},
    {header: 'Titan Themis - просвечивающий электронный микроскоп', id: 2, price: 2500, text: 'Ускоряющее напряжение - 300кв', img: '#'},
    {header: 'Oxford System 100 Pro - кластерная установка с камерой осаждения атомных слоев', id: 3, price: 2500, text: 'text', img: 'link'},
    {header: 'V780 - вибрационный стенд ', id: 4, text: 'Проведение ударных и вибрационных испытаний изделий весом до 100км ', price: 2500, img: 'link'}
];



export default function equipment (state = equipmentState, action){
    switch(action.type){
        case ('GET_LIST'): return state;
        default: return state;
    }
}