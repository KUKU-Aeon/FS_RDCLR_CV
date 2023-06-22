'use strict'

document.addEventListener('DOMContentLoaded', function (){

    const Content = [
        {   header: `Привет! Я обладаю знаниями в HTML, CSS, JavaScript и фреймворках, таких как React и Vue.js.тремлюсь всегда улучшать свои навыки владения вышеописанными технологиями, а также
            не боюсь использовать что-то новое, тем самым расширяя свой стек используемых технологий.`,
            education: ` <h1>Образование</h1><h2>Воронежский Государсвенный Университет</h2><p>Прикладная информатика, математика и механика</p>
            <p>2018-2020, 2021-н.в.</p> <h2>Red Collar School</h2><p>Frontend-разработчик</p><p>2019</p>`,
            hard_skills: `<h1>Навыки</h1><ul><li>HTML</li><li>CSS, SASS</li><li>JS, TS</li><li>Vue.js, React</li></ul>`
        },
        {
            header: `Привет! Я обладаю знаниями в HTML, CSS, JavaScript и фреймворках, таких как React и Vue.js. Стремлюсь всегда улучшать свои навыки владения вышеописанными технологиями, а также
            не боюсь использовать что-то новое, тем самым расширяя свой стек используемых технологий. Своими позитивными качествами могу назвать: коммуникабельность, стерссоустойчивость, умение работать в команде, самокритичность.
            Из отрицательных черт могу назвать страх причинять неудобство своим коллегам. Я так же умею работать с различными инструменатми и библиотеками, такими как: Sass, Firebase, TypeScript, Node.js и др.. Всегда готов покорить новые вершины и бросать вызов сложным проектам! Настроен на дальнейшее развитие в своей профессии с 2021 года.       `,
            education: ` <h1>Образование</h1><h2>Воронежский Государсвенный Университет</h2><p>Прикладная информатика, математика и механика</p>
            <p>2018-2020, 2021-н.в.</p> <h2>Red Collar School</h2><p>Frontend-разработчик</p><p>2019</p>`,
            career: `<h1>Карьера</h1><h2>Воронежский Государственный Университет</h2><p>Факультет Международных отношений</p><p>Frontend-разработчик</p><p>2022-2023</p>`,
            hard_skills: `<h1>Навыки</h1><ul><li>HTML</li><li>CSS, SASS</li><li>JS, TS</li><li>Vue.js, React</li></ul>`

        },
        {   header: `Привет! Меня зовут Дмитрий, я фронтенд разработчик с опытом работы 2 года. Я люблю создавать интуитивно понятный любому пользователю UI, постоянно слежу за новыми тенденциями в разработке UI, чтобы максимизировать удобство пользователя при работе с UI дать им лучший UX. <br><br> Несколько фактов обо мне:<br><br> <ul><li>Я выпускник RDCLR.SCHOOL 2019 г.</li><li>Я умею работать с различными языками программирования: Python3, C#, JS(TS), и технологиями, такими как: HTML, CSS(Sass), React, Vue, Node.js</li></ul><br><br>
            Некоторые из моих достижений и проектов: <br><br> <ul><li>Разработал <a href="http://ir.vsu.ru/">веб-сайт для факультета международных отношений ВГУ</a></li><li>В данный момент занимаюсь разработкой веб-сайта для театра <a href="https://vk.com/teatrfestru">Театральный Фестиваль</a></li></ul>`,
            education: ` <h1>Образование</h1><h2>Воронежский Государсвенный Университет</h2><p>Прикладная информатика, математика и механика</p>
            <p>2018-2020, 2021-н.в.</p> <h2>Red Collar School</h2><p>Frontend-разработчик</p><p>2019</p>`,
            career: `<h1>Карьера</h1><h2>Воронежский Государственный Университет</h2><p>Факультет Международных отношений</p><p>Frontend-разработчик</p><p>2022-2023</p>`,
            hard_skills: `<h1>Навыки</h1><ul><li>HTML</li><li>CSS, SASS</li><li>JS, TS</li><li>Vue.js, React</li></ul>`
        }
    ]

    const block = document.querySelector('article');
    let id = Number(block.id);

    function ShowContent(id)
    {
        let insertBlock = document.getElementById('insert')
        let textHeader = document.querySelector('.decsr-n')
        textHeader.innerHTML = `${Content[id].header}`;
        insertBlock.innerHTML = `${Content[id].education}${Content[id].career}${Content[id].hard_skills}`;
    }

    ShowContent(id);

    document.getElementById('arrow').addEventListener('click', function (){
        id + 1 === Content.length ? id = 0 : id += 1 ;
        block.id = id;
        ShowContent(id);
    })


    window.addEventListener("resize", function (){
        let glases = document.querySelector('.glasses')
        let photo = document.querySelector('.contacts');
        let photo_height = photo.clientHeight;
        let photo_width = photo.clientWidth;
        console.log(photo_height)
        glases.style.top = photo_height /3.640 + 'px';
        glases.style.left = photo_width * 0.635 + 'px'
    })



});