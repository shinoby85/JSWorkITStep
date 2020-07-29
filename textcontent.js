'use strict';
let masNews = [
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad architecto dolorem ea earum eius fugiat illo inventore ipsa laudantium modi molestias nobis placeat quas sed sint totam veritatis, vitae!'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis cupiditate maiores non porro sequi. Animi cupiditate dicta dolorem eum expedita illo iusto, nam nihil nisi nobis, recusandae soluta ullam velit?'
    },
    {
        title: 'Lorem ipsum dolor sit amet.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum maiores sunt voluptate. Accusantium culpa cumque delectus doloribus eos esse, est et ex excepturi maxime nulla quae quidem recusandae vitae voluptatibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid aut beatae blanditiis debitis dicta dolores enim excepturi exercitationem fugiat iure nulla officia, quasi qui quidem quis recusandae repellendus velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at consequuntur eaque earum ex, facilis id maiores nostrum numquam quaerat qui quos voluptate voluptatibus. Adipisci asperiores cupiditate distinctio doloribus enim expedita hic illo illum, incidunt iusto labore magnam magni natus nostrum odio, quaerat quidem quod, rem sit tempora ullam vel voluptate voluptatem voluptates voluptatum. Alias architecto dolor explicabo facere ipsa iusto neque numquam! Ad alias asperiores atque aut cum delectus deleniti dicta dolores eligendi enim facere fuga hic magnam molestias nam nesciunt non nostrum omnis perspiciatis quae qui, reprehenderit rerum sed, temporibus vel. Alias amet consequuntur cumque cupiditate, esse exercitationem illo inventore iste laborum magnam modi molestias, mollitia nesciunt nihil obcaecati placeat porro possimus ratione reiciendis rem repellat repudiandae suscipit tempore voluptatibus, voluptatum! Accusantium alias architecto at culpa delectus deserunt dolores eaque error et, exercitationem facere harum hic ipsam iure nesciunt, nisi, nobis optio perspiciatis praesentium quibusdam quod quos similique tempore vel velit voluptatem voluptatibus. Ad, cum dicta libero maiores natus nihil obcaecati perferendis, possimus quas rem velit voluptas voluptatibus voluptatum. Ad aliquam distinctio excepturi illo itaque iure labore numquam quam unde ut. Ad aut corporis dicta eligendi esse et labore optio perspiciatis, provident quia ratione, repellendus sit veritatis voluptatum.'
    },
    {
        title: 'Юрист о выборах после 9 августа: Тихановская использует царские полномочия, о которых говорил Лукашенко',
        content: 'Светлана Тихановская как кандидат в президенты заявляет, что после своего прихода к власти назначит новые президентские выборы, в которых будут участвовать все желающие альтернативные кандидаты. По закону выборы президента назначаются парламентом, а не президентом. Юрист и политолог Юрий Чаусов в комментарии TUT.BY рассказал, как Тихановская сможет провести в стране новые выборы.\n' +
            'Читать полностью:  https://news.tut.by/economics/694306.html'
    },
    {
        title: '«Не хочу быть причастна к махинациям». Семь человек написали заявление на членов избирательной комиссии ',
        content: 'Семеро жителей агрогородка Лесной в Минском районе подали коллективное заявление в милицию. Они просят правоохранителей разобраться: как получилось, что в списки избирателей, которые выдвигали членов участковой комиссии по выборам, кто-то без ведома внес их личные данные, а также подделал подписи.\n' +
            'Читать полностью:  https://news.tut.by/society/694102.html'
    },
    {
        title: 'Дожди и похолодание в конце июля. Погода в Могилеве на неделе\n' +
            'Читать полностью:  https://news.tut.by/society/694233.html',
        content: 'Дожди и похолодание — таким будет конец июля в Могилеве. Начало недели будет еще теплым, да и дождливо будет не круглые сутки. Но погода, скажем честно, совсем не пляжная. По предварительным данным pogoda.by, в выходные тоже будет не по-летнему прохладно, ожидаются дожди. Но не расстраивайтесь — более точный прогноз узнаем в пятницу.\n' +
            'Читать полностью:  https://news.tut.by/society/694233.html'
    },
    {
        title: 'В водоеме в Белыничском районе утонул 10-летний мальчик',
        content: 'Об утонувшем ребенке возле деревни Антонова Буда спасателям сообщили днем 26 июля.\n' +
            'Как рассказали TUT.BY в Могилевском областном ОСВОД, 10-летний Андрей пошел с четырьмя приятелями рыбачить на берег водоема. Возможно, это пожарный водоем: он неглубокий, площадью примерно 50×40 метров, заросший камышами.\n' +
            'Дети рассказали, что рыбачили на берегу. Когда стало жарко, решили искупаться. Кто-то плескался у берега, а Андрей отошел дальше. По словам детей, они видели, как мальчик стоял в воде по шею, потом отвлеклись, а затем Андрей пропал из виду. Дети вызвали спасателей.\n' +
            'Читать полностью:  https://news.tut.by/accidents/694227.html'
    },
    {
        title: '«Три женщины стали за народ»',
        content: 'Кандидат в президенты Беларуси Светлана Тихановская продолжает тур по городам страны. 25 июля она со своей командой, в том числе с Вероникой Цепкало и Марией Колесниковой, провела митинги в Могилевской области. По приблизительным оценкам, в Могилеве на встречу с «женским триумвиратом» пришли около 4 тысяч человек. В Бобруйске, по некоторым данным, на стадионе собралось около 6 тысяч человек.\n' +
            'Читать полностью:  https://news.tut.by/society/694162.html'
    },
    {
        title: 'Премьер Беларуси рассказал, сколько доплатили медикам за коронавирус',
        content: 'Недавно президент Беларуси Александр Лукашенко рассказал, что борьба с коронавирусом обошлась бюджету страны почти в полмиллиарда рублей. В вечернем воскресном эфире «Беларусь 1» премьер-министр Роман Головченко пояснил, на что пошли эти деньги, а также рассказал, как Беларусь справляется с экономическими последствиями пандемии. Напомним, наша страна не закрывалась на карантин.\n' +
            'Читать полностью:  https://news.tut.by/economics/694203.html'
    }
];