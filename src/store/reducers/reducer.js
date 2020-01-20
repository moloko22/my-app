const initialState = {
        orders: [],
        filterSearch: {
            city: '',
            category: '',
        },
        equipmentState: [
            {
                id: 0,
                category: 'Прототипирование',
                city: 'Москва',
                year: 2019,
                company: 'Oculus',
                date: "13.01.20",
                header: 'Вакуумная печь В-63',
                text: 'Печь произведена компанией BMI (Франция), используется для отжига, закалки и высокотемпературной цементации. Закалка ведется в масло либо азотом (сдавлением до 5 атм). Управление процессами в печах BMI осуществляетсяпрограммным обеспечением ZENON. Система управления позволяет полностьюавтоматизировать процесс термообработки с возможностью визуализации всехпроцессов.Обеспечивает нагрев в вакууме до 0.0001 мБар. Габариты садки (д*ш*в) 600*450*400 мм.Максимальная загрузка 200 кг. Максимальная температура нагрева составляет 1300 С',
                price: '3100',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'
            },
            {
                id: 1,
                category: 'Прототипирование',
                city: 'Москва',
                year: 2011,
                company: 'Priuy',
                date: "13.05.16",
                header: 'Электронно–лучевая напылительная система AngstromNexdep',
                text: 'Предназначена для напыления металлов и диэлектриков в вакуумной камере. Преимущества электронно-лучевого испарения: это в этом способе энергия подводитсянепосредственно к поверхности, где формируется поток пара. Метод позволяет достичьзначительной поверхностной плотности энергии, благодаря чему могут быть реализованы высокиескорости испарения тугоплавких металлов (тантала, молибдена и других). Так же преимуществомметода является высокая чистота осаждаемой пленки, что достигается за счет отсутствия контактаиспаряемого материала с материалом тигля.',
                price: '2980',
                img: 'data:image/jpeg;base64,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'
            },
            {
                id: 2,
                category: 'Прототипирование',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Вертикально-фрезерный обрабатывающий центр ЧПУ Haas VF-2SS',
                text: 'Трёхосевой фрезерный ЧПУ станок с шпинделем высокой мощности и большимрабочим полем позволяет производить механическую обработку материалоплотностью до 4000 кг/м3. Благодаря габаритам рабочего поля есть возможностьизготовления крупных функциональных изделий.',
                price: '2980',
                img: 'http://медком.рф/images/kategorii/med-obor.jpg'
            },
            {
                id: 3,
                category: 'Прототипирование',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'ЧПУ фрезерный станок Shopbot - PRS Alpha 96-48',
                text: 'Трёхосевой фрезерный ЧПУ станок с шпинделем высокой мощности и большимрабочим полем позволяет производить механическую обработку материаловплотностью до 4000 кг/м3. Благодаря габаритам рабочего поля есть возможностьизготовления крупных функциональных изделий.',
                price: '6900',
                img: 'https://images.ua.prom.st/292867658_w230_h230_meditsinskoe_oborudovanie.jpg'
            },
            {
                id: 4,
                category: 'Прототипирование',
                city: 'Сочи',
                year: 2015,
                company: 'Nemto',
                date: "13.05.16",
                header: 'ЧПУ токарный станок HAAS - ST-10',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '5300',
                img: 'https://mokb51.ru/uploads/__cache/400x266/95287c35578defd61db66dee84fd4971.jpg'
            },
            {
                id: 5,
                category: 'Прототипирование',
                city: 'Калининград',
                year: 2015,
                company: 'Yoto',
                date: "13.05.16",
                header: 'Установка атомно-слоевого осаждения Picosun R200 Advance',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '13300',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLr-JQu5Y1qmh3E2y6wRsTlQNwlLUwq47ErFKHEqIEXoudKwlB&s'
            },
            {
                id: 6,
                category: 'Прототипирование',
                city: 'Казань',
                year: 2015,
                company: 'Poilou',
                date: "13.05.16",
                header: 'Термовоздушная станция Quick 861DW',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '9800',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'
            },
            {
                id: 7,
                category: 'Прототипирование',
                city: 'Новосибирск',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Анализатор сигналов, спектров, частот Rigol DSA 815',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '2180',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s'
            },
            {
                id: 8,
                category: 'Прототипирование',
                city: 'Уфа',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: '3D принтер Makerbot - Replicator 5th generation',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'data:image/jpeg;base64,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',
                price: '7600',
            },
            {
                id: 9,
                category: 'Прототипирование',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: '3D принтер FlashForge Hunter',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://sapr.ru/archive/sg/2013/2/24/001.jpg',
                price: '2343',
            },
            {
                id: 10,
                category: 'Прототипирование',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Babyplast',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '11500',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLMRjtwZhEOZBYQX4QTbDTzB6kFH7tyL_78nSRRaOfw6CxRKLew&s',
            },
            {
                id: 11,
                category: 'Прототипирование',
                city: 'Уфа',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Термопластавтомат Babyplast 6/10P',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '1300',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB0x1Ra0Xthn_VfJg_pU1ZmYXh3HV6mHQnklCNDuqorKAMbh0Jeg&s',
            },
            {
                id: 12,
                category: 'Прототипирование',
                city: 'Астрахань',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Генетический анализатор (секвенатор) нового поколения Illumina MiniSeq',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT29BwTAkQgu1iBF0mmbopQ_UFPKTswQvEpUpidyqwNBkTeyttiXA&s',
                price: '11900',
            },
            {
                id: 13,
                category: 'Метрология',
                city: 'Екатеренбург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Координатно-измерительная машина Mitutoyo - Crysta Apex S574',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '5400',
                img: 'data:image/jpeg;base64,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'
            },
            {
                id: 14,
                category: 'Метрология',
                city: 'Челябинск',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'pH-метр/иономер S220-Kit в комплекте с электродом InLab Expert Pro-ISM, MettlerToledo',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '2345',
                img: 'https://mrtsurgut.ru/wp-content/uploads/2018/12/uzi-1-450x500.jpg',
            },
            {
                id: 15,
                category: 'Метрология',
                city: 'Пенза',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Bruker Optics Tensor 27',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '6670',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
            },
            {
                id: 16,
                category: 'Метрология',
                city: 'Воронеж',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Термогравиметрический анализатор NETZSCH TGA 209 F1 Iris',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '14300',
                img: 'data:image/jpeg;base64,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',
            },
            {
                id: 17,
                category: 'Метрология',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Установка измерительная для прогрузки первичным током РЕТОМ-30КА',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '5000',
                img: 'https://img.medicalexpo.ru/images_me/photo-m2/83550-14527349.jpg',
            },
            {
                id: 18,
                category: 'Метрология',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Видеоизмерительная система Norgau NVM-3020D',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
                price: '5900',
            },
            {
                id: 19,
                category: 'Метрология',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Контурограф Mitutoyo CV-2100',
                text: 'Применяется для измерений сложных как наружных, так и внутренних контуров с мелким профилем Диапазон измерений - X х Z1 = 100 х 50 ммПогрешность - X = (2,5+0,02L) мкм; Z1= (2,5 + |0,1Н|) мкмРазрешение - Х = 0,05 мкм Z1 = 0,02 мкм',
                price: '4510',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlSSRZHKDLPH3QX2AGQpxvkCiGsAbfWX4D0KF492foaxKwK3e9&s',
            },
            {
                id: 20,
                category: 'Метрология',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Двухлучевая аналитическая система FEI Versa 3D LoVac для растровой электронно-ионной микроскопии.',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
                price: '7650',
            },
            {
                id: 21,
                category: 'Метрология',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Лазерный сканирующий микроскоп ZEISS LSM 800 с технологией Airyscan',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ohPSrTGGO3XCj8BVDxuXuEJ28Tgf1uTl5ybS6_sXWNaXwSzW&s',
                price: '4300',
            },
            {
                id: 22,
                category: 'Биомедицина',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Электрофоретическая система Bioanalyzer 2100 для анализа ДНК, РНК, белков и клеток без ПК, Agilent Technologies',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '3400',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5lh06AvRdvSeTzdp5U-Bme-5U8YjLQRwMfsdXuyhaYFvC_LE&s',
            },
            {
                id: 23,
                category: 'Биомедицина',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Прибор автоматизированной пробоподготовки Biomek NXp Span-8',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://labwareguid.ru/wp-content/uploads/2018/02/GENESYS-50-angle-840-298000.jpg-650-300x200.jpg',
                price: '5760',
            },
            {
                id: 24,
                category: 'Биомедицина',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Тандемный масс-спектрометр AB Sciex 5500 QTRAP',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
                price: '1110',
            },
            {
                id: 25,
                category: 'Биомедицина',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Прибор для ультразвуковой фрагментации НК и клеток Covaris M220',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://labwareguid.ru/wp-content/uploads/2018/02/GENESYS-50-angle-840-298000.jpg-650-300x200.jpg',
                price: '12900',
            },
            {
                id: 26,
                category: 'Биомедицина',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Генетический анализатор (секвенатор) нового поколения Illumina MiniSeq',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
                price: '5460',
            },
            {
                id: 27,
                category: 'Биомедицина',
                city: 'Тюмень',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Бокс микробиологической безопасности Lamsystems Neoteric БМБ-ΙΙ-&quot;Ламинар-С&quot;-1,5',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'http://lab-metr.ru/img/sushilnyj_shkaf/2v-151.jpg',
                price: '2980',
            },
            {
                id: 28,
                category: 'Биомедицина',
                city: 'Тюмень',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Низкотемпературный морозильник Haier DW-86L388A',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
                price: '3100',
            },
            {
                id: 29,
                category: 'Биомедицина',
                city: 'Тюмень',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Термосварочная машина Euroseal 2001 Plus',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'http://shop.stomatorg.ru/upload/medialibrary/3db/3dbcd88deb85b40b4c9e1f9b6c460308.jpg',
                price: '3450',
            },
            {
                id: 30,
                category: 'Биомедицина',
                city: 'Казань',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Автоклав Tuttnauer',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://www.moslabo.ru/assets/upload/images/info07-02-17-123ae22007ea339ac91cb0d1b6ca7a88.jpg',
                price: '2780',
            },
            {
                id: 31,
                category: 'Испытания',
                city: 'Казань',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'ПЦР-амплификатор реального времени Thermo Fisher QuantStudio 5',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://gorlovka.today/images/2018/06/tramvay/medicinskiy-apparat.jpg',
                price: '2980',
            },
            {
                id: 32,
                category: 'Испытания',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Спектрометр Horiba FluoroMax 4',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'https://gorlovka.today/images/2018/06/tramvay/medicinskiy-apparat.jpg',
                price: '21450',
            },
            {
                id: 33,
                category: 'Испытания',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Частотомер 53220А',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'http://www.oborud.info/img/phorum/danube-russia_01.jpg',
                price: '1345',
            },
            {
                id: 34,
                category: 'Испытания',
                city: 'Тюмень',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Комплекс средств поверки цифровых электронных трансформаторов тока и напряжения КЭТ-61850',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                img: 'http://sterimed-rossiya.ru/images/unior.png',
                price: '24500',
            },
            {
                id: 35,
                category: 'Испытания',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Камера климатическая тепла-холода (влаги) КТХВ-1700',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '2980',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqtLh_aMebTr9P6CdCumHcRWIrWtcN504r4CaWtCXHZCJW1EnX7A&s',
            },
            {
                id: 36,
                category: 'Испытания',
                city: 'Казань',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Gotech HV 2000A - аппарат для оценки теплостойкости по Вика',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '1400',
                img: 'https://img.medicalexpo.ru/images_me/photo-m2/70731-14488595.jpg',
            },
            {
                id: 37,
                category: 'Испытания',
                city: 'Новосибирск',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Секундомер-измеритель электронный временных параметров реле ивыключателей ИВПР-203М',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '3450',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5kBS2TdJGIb1Anzf-ganxBqnXIGIjU3PL2RHdBKlcjyoDmCQHw&s',
            },
            {
                id: 38,
                category: 'Испытания',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Gotech 7045 MDL - копер для определения ударной вязкости по Шарпи',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '5600',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
            },
            {
                id: 39,
                category: 'Испытания',
                city: 'Санкт-Петербург',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Универсальная испытательная машина Gotech AI 7000M',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '9800',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfZCLU0WyGOeB4IVbmvLuPFJ3IAmVd7jh5cq11PrjamF1BB5l&s',
            },
            {
                id: 40,
                category: 'Испытания',
                city: 'Казань',
                year: 2015,
                company: 'Okit',
                date: "13.05.16",
                header: 'Gotech 7045 MDL - копер для определения ударной вязкости по Шарпи',
                text: 'Токарный двухосевой обрабатывающий центр Haas позволяет выполнятьширокий диапазон задач: -нарезание наружной и внутренней резьбы; -обработка различных поверхностей тел вращения (точение, подрезка торца,отрезка и обработка канавок).Центр оснащён многопозиционным сменщиком инструмента (до 12 позиций) инепрерывным подводом смазывающе-охлаждающей жидкости в зону обработки,что позволяет эффективно производить удаление материала и добиватьсявысоких точностей обработки.Максимальный обрабатываемый диаметр заготовки: 180 ммМаксимальная длина обработки: 270 ммМаксимальная мощность/крутящий момент шпинделя: 11.2 кВт/ 102 НмВес обрабатывающего центра: 3.5 т',
                price: '8800',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw5kBS2TdJGIb1Anzf-ganxBqnXIGIjU3PL2RHdBKlcjyoDmCQHw&s',
            },
        ],
        categoryState: [
            {id: 1, category:'Прототипирование', name: 'Прототипирование', titles:['Бесконтактная обработка', '3D прототипирование', 'Точная механобработка', 'Функциональные покрытия']},
            {id: 2, category:'Биомедицина', name: 'Биомедицина', titles:['Клинические исследования', 'Генетические исследования', 'Биобанкирование', 'Стерилизация']},
            {id: 3, category:'Метрология', name: 'Метрология', titles:['Микроанализ', 'Материаловедение', 'Нефтехимия и оргсинтез', 'Линейно-угловые измерения, формы, шереховатости']},
            {id: 4, category:'Испытания', name: 'Испытания', titles:['Механические испытания', 'Климатические испытания', 'Электромагнитные испытания', 'Микробиологические испытания']}
        ],
        filtersState: {
            city: ['Все города', 'Москва', 'Пенза', 'Сочи', 'Уфа', 'Новосибирск', 'Казань', 'Санкт-Петербург', 'Тюмень', 'Воронеж','Челябинск' , 'Екатеренбург', 'Астрахань', 'Калининград'],
            category: ['Все категории', 'Прототипирование', 'Биомедицина', 'Метрология', 'Испытания'],
        },
        inputValue: '',
};


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'CLEAR_FILTER_TO_DEFAULT': {
            console.log('Я ТУТ');
            const newObject = Object.assign({}, initialState);
            newObject.filterSearch.city = '';
            newObject.filterSearch.category = '';
            newObject.filtersState.city = ['Все города', 'Москва', 'Пенза', 'Сочи', 'Уфа', 'Новосибирск', 'Казань', 'Санкт-Петербург', 'Тюмень', 'Воронеж','Челябинск' , 'Екатеренбург', 'Астрахань', 'Калининград'];
            newObject.filtersState.category =['Все категории', 'Прототипирование', 'Биомедицина', 'Метрология', 'Испытания'];
            console.log(newObject);
            return newObject;
        }
        case 'CLEAR_ORDER_LIST': {
            const newObject = Object.assign({}, initialState);
            newObject.orders = [];
            return newObject;
        }
        case 'ORDER_REQUEST': {
            console.log(action.payload);
            const newObject = Object.assign({}, initialState);
            action.payload.status = 'Заявка отправлена';
            newObject.orders.push(action.payload);
            return newObject;
        }
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
            if ((action.payload.city === 'Все города' || action.payload.city === '') && (action.payload.category !== 'Все категории' && action.payload.category !== '') && action.payload.text ) {
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
            if ((action.payload.city !== 'Все города' && action.payload.city !== '') && action.payload.text && (action.payload.category === 'Все категории' || action.payload.category === '')) {
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
            console.log('МЕНЯЮ ФИЛЬТР.');
            console.log(action.payload);
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