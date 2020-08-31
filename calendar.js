'use strict';

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let saveMonth; //Хранит указанный месяц
let saveYear;  //Хранит указанный год

function createCalendar() {
    let container = document.createElement('div')
    container.style.margin = '20px'
    document.body.prepend(container);
    let contentHtml = `<div class="content">
        <div class="indate">
            <label for="month">Month: </label>
            <input id="month" class="month" type="text">
            <label for="year">Year: </label>
            <input id="year" type="text">
            <input id="generateDate" type="button" class="button" value="Generate">
        </div>
        <div id="control">
            <div id="checkDay" class="check-day"></div>
            <div id="bkNav">
                <a href="#" id="btnUp" class="btnNav">&#8743;</a>
                <a href="#" id="btnDown" class="btnNav">&#8744;</a>
            </div>
        </div>
        <div class="calendar" id="calendar">
            <div class="days">Пон</div>
            <div class="days">Вт</div>
            <div class="days">Ср</div>
            <div class="days">Чет</div>
            <div class="days">Пят</div>
            <div class="days">Сб</div>
            <div class="days">Вос</div>
        </div>
    </div>`;
    container.insertAdjacentHTML('afterbegin', contentHtml);

}

function addCalendarStyles() {
    let content = document.querySelector('.content');
    content.style.marginBottom = '20px'
    content.style.backgroundColor = 'linen'
    content.style.width = '500px'
    content.style.padding = '20px'

    let indate = document.querySelector('.indate')
    indate.style.border = '1px solid #000'
    //indate.style.marginBottom = '20px'
    indate.style.padding = '15px'
    indate.style.display = 'flex'
    indate.style.flexWrap = 'wrap'
    indate.style.justifyContent = 'center'
    indate.style.borderRadius = '10px'

    let month = document.getElementById('month')
    month.style.marginRight = '30px'

    let btn = document.querySelector('.button')
    btn.style.marginTop = '10px'
    btn.style.width = '400px'
    btn.style.clear = 'both'

    let control = document.getElementById('control')
    control.style.display = 'flex'
    control.style.justifyContent = 'space-between'
    control.style.alignItems = 'center'

    let chkDay = document.querySelector('.check-day')
    chkDay.style.margin = '10px 0'
    chkDay.style.padding = '10px'

    let blockNav = document.getElementById('bkNav')
    blockNav.style.width = '100px'
    blockNav.style.height = '30px'
    blockNav.style.display = 'none'
    blockNav.style.justifyContent = 'space-around'

    let btnNav = document.querySelectorAll('.btnNav')
    btnNav.forEach(item => {
        item.style.color = '#000'
        item.style.fontWeight = '500'
        item.style.textDecoration = 'none'
        item.style.display = 'flex'
        item.style.alignItems = 'center'
        item.style.justifyContent = 'center'
        item.style.width = '30px'
        item.style.height = '30px'
        item.addEventListener('mouseover', function () {
            item.style.backgroundColor = 'lightcyan'
            item.style.fontWeight = '700'
            item.style.outline = '2px solid blueviolet'
        })
        item.addEventListener('mouseout', function () {
            item.style.backgroundColor = 'inherit'
            item.style.fontWeight = '500'
            item.style.outline = 'none'
        })
    })

    let cal = document.getElementById('calendar')
    cal.style.border = '1px solid #000'
    cal.style.borderRadius = '10px'
    cal.style.padding = '15px'
    cal.style.display = 'grid'
    cal.style.gridTemplateColumns = 'repeat(7, 1fr)'
    cal.style.gridTemplateRows = 'repeat(6, 40px)'
    cal.style.gridGap = '5px'
    cal.style.textAlign = 'center'
}

/**
 * Задание основных свойств для стилей чисел
 * @returns {function(*): Map<any, any>}
 */
function days() {
    const dBlock = new Map()
    dBlock.set('background', 'lightseagreen')
    dBlock.set('borderRadius', '5px')
    dBlock.set('color', '#fff')
    dBlock.set('fontWeight', '600')
    dBlock.set('fontSize', '20px')
    dBlock.set('textAlign', 'center')
    dBlock.set('justifyContent', 'center')
    dBlock.set('lineHeight', '40px')

    return function (colorBlock) {
        if (colorBlock.toLowerCase() === 'green') {
            dBlock.set('background', 'lightgreen')
            dBlock.set('color', '#000')
        }
        if (colorBlock.toLowerCase() === 'grey') {
            dBlock.set('background', 'lightgrey')
            dBlock.set('color', '#000')
        }
        if (colorBlock.toLowerCase() === 'blue') {
            dBlock.set('background', 'dodgerblue')
            dBlock.set('color', '#fff')
        }
        if (colorBlock.toLowerCase() === 'red') {
            dBlock.set('background', 'lightsalmon')
            dBlock.set('color', '#000')
        }
        return dBlock;
    }
}

let styleDay = days();

window.onload = function () {
    createCalendar();
    addCalendarStyles();
    let genDate = document.getElementById('generateDate')
    genDate.addEventListener('click', generateDate);
    setBtnNav()
}

/**
 * Генерирует поле календаря
 */
function generateDate() {
    //Отображает блок навигации при первичной генерации чисел
    let blockNav = document.getElementById('bkNav');
    if (blockNav.style.display === 'none') {
        blockNav.style.display = 'flex'
    }
    // clearDays('dBlockGrey');
    clearDays('dBlock');
    let fullDays = 42;
    let month = document.getElementById('month').value;
    saveMonth = month;
    let year = document.getElementById('year').value;
    saveYear = year;
    let date = new Date(year, month - 1, 1);
    let prevDate = new Date(year, month - 2, 1);
    let nextDate = new Date(year, month, 1);
    addDate(date.getMonth(), date.getFullYear());
    //alert(`date.getDay()=${date.getDay()},date.getDate()=${date.getDate()}`);

    months[1] = bigYear(date.getFullYear());
    let prevMonth = getPrevMonth(date.getMonth());
    if (date.getDay() !== 1) {
        let prevDay;
        if (date.getDay() !== 0) {
            prevDay = months[prevMonth] - date.getDay()+2;
            fullDays -= addDaysToCalendar(prevDay, date.getDay()-1, 'grey', prevDate);
        }
        else {
            prevDay = months[prevMonth] - 5;
            fullDays -=addDaysToCalendar(prevDay, 6, 'grey', prevDate);
        }

    }
    fullDays -= addDaysToCalendar(1, months[Number(month - 1)], 'green', date);
    addDaysToCalendar(1, fullDays, 'grey', nextDate);

}

/**
 * Возвращает количество дней февраля в зависимости от высокосного года
 * @param year Текущий год
 * @returns {number} Количество дней в феврале
 */
function bigYear(year) {
    return (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) ? 29 : 28;
}

/**
 * Добавляет на страницу месяц и год
 * @param month Номер месяца
 * @param year Год
 */
function addDate(month, year) {
    const nameMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let checkDay = document.getElementById('checkDay')
    checkDay.innerText = `${nameMonths[month]}, ${year}`;
    checkDay.style.fontWeight = '700';
}

/**
 * Возвращает предыдущий месяц
 * @param month Текущий месяц
 * @returns {number} Предыдущий месяц
 */
function getPrevMonth(month) {
    return Number(month) === 0 ? 11 : month - 1;
}

/**
 * Добавляет дни недели в календарь
 * @param numDay С какой даты идет добавление
 * @param count Количество дней необходимо добавить
 * @param styleBlock Класс со стилями для данного числа
 * @returns {number} Количество добавленных блоков
 */
function addDaysToCalendar(numDay, count, color, date) {
    let flagDayNow = null;
    let styles;
    let dateNow = new Date()
    if (date.getMonth() === dateNow.getMonth() && date.getFullYear() === dateNow.getFullYear()) {
        flagDayNow = dateNow.getDate() - 1;
    }
    styles = styleDay(color);
    let calendar = document.getElementById('calendar');
    for (let i = 0; i < count; i++) {
        let elem = document.createElement('div');
        date.setDate(Number(numDay) + i);
        if (date.getDay() === 0 || date.getDay() === 6) {
            styles = styleDay('red');
        }
        if (i === flagDayNow) {
            styles = styleDay('blue');
        }
        for (const item of styles.keys()) {
            elem.style[item] = styles.get(item);
        }
        if (i === flagDayNow || date.getDay() === 0 || date.getDay() === 6) {
            styles = styleDay(color);
        }
        elem.classList.add('dBlock');
        elem.innerText = Number(numDay) + i;
        calendar.append(elem);
    }
    return count;
}

/**
 * Очищает колендарь от блоков, с указанным классом
 * @param block Наименование класса
 */
function clearDays(block) {
    let elements = document.querySelectorAll(`.${block}`);
    if (elements.length !== 0) {
        for (const item of elements) {
            item.parentNode.removeChild(item);
        }
    }

}

/**
 * Задает обработку событий для навигационных кнопок
 */
function setBtnNav() {
    let btnUp = document.getElementById('btnUp')
    let btnDown = document.getElementById('btnDown')

    btnDown.addEventListener('click', function () {
        saveMonth++;
        if (saveMonth > 12) {
            saveMonth = 1
            saveYear++;
        }
        month.value = saveMonth
        year.value = saveYear
        generateDate()
    })
    btnUp.addEventListener('click', function () {
        saveMonth--;
        if (saveMonth < 1) {
            saveMonth = 12
            saveYear--;
        }
        month.value = saveMonth
        year.value = saveYear
        generateDate()
    })
}