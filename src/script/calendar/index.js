var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById('year');
var selectMonth = document.getElementById('month');

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// 10보다 작은 숫자 앞에 0 붙이는 함수
function zeroAdd(number) {
    var customNumber = number + 1;

    if (customNumber < 10) {
        customNumber = '0' + customNumber;
    }

    return customNumber;
}

var calendarContainer = document.querySelector('article.calendar-container');

if (calendarContainer !== null) {
    var calendarWrapperBox = document.querySelector('article.calendar-container .wrap .box');
    var monthAndYear = document.getElementById('monthAndYear');
    showCalendar(currentMonth, currentYear);

    var previousBtn = document.querySelector('article.calendar-container button#previous');
    var nextBtn = document.querySelector('article.calendar-container button#next');

    if (previousBtn !== null || nextBtn !== null) {
        previousBtn.addEventListener('click', previous);
        nextBtn.addEventListener('click', next);
    }

    function next() {
        currentYear = currentMonth === 11 ? currentYear + 1 : currentYear;
        currentMonth = (currentMonth + 1) % 12;
        showCalendar(currentMonth, currentYear);
    }

    function previous() {
        currentYear = currentMonth === 0 ? currentYear - 1 : currentYear;
        currentMonth = currentMonth === 0 ? 11 : currentMonth - 1;
        showCalendar(currentMonth, currentYear);
    }

    function showCalendar(month, year) {
        var firstDay = new Date(year, month).getDay();
        var daysInMonth = 32 - new Date(year, month, 32).getDate();

        var calendar = document.getElementById('calendar');
        var tbl = document.getElementById('calendar-body'); // body of the calendar

        // clearing all previous cells
        tbl.innerHTML = '';

        // filing data about month and in the page via DOM.
        monthAndYear.innerHTML = year + ' &nbsp;-&nbsp; ' + zeroAdd(month);
        // monthAndYear.innerHTML = year + ' &nbsp;-&nbsp; ' + (currentMonth + 1);

        // creating all cells
        var date = 1;
        for (var i = 0; i < 6; i++) {
            // creates a table row
            var row = document.createElement('tr');

            //creating individual cells, filing them up with data.
            for (var j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    var cell = document.createElement('td');
                    var cellText = document.createTextNode('');
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                } else if (date > daysInMonth) {
                    break;
                } else {
                    var cell = document.createElement('td');
                    // date number
                    var dateEle = document.createElement('span');
                    var cellText = document.createTextNode(date);
                    // contents box
                    var contentsBox = document.createElement('div');

                    if (
                        date === today.getDate() &&
                        year === today.getFullYear() &&
                        month === today.getMonth()
                    ) {
                        dateEle.classList.add('bg-info');
                    } // color today's date

                    cell.appendChild(dateEle);
                    dateEle.appendChild(cellText);
                    cell.appendChild(contentsBox);

                    // 데이터가 있을 때
                    for (var i = 0; i < 4; i++) {
                        var content = document.createElement('p');
                        content.innerText = '2019 하반기 기말고사 평가 더 길어지게';
                        contentsBox.appendChild(content);
                    }
                    row.appendChild(cell);
                    date++;
                }
            }

            tbl.appendChild(row); // appending each row into calendar body.
        }

        /*
        캘린더의 특정 날짜 클릭 팝업 이벤트
    */
        var tdElements = Array.from(
            document.querySelectorAll('table#calendar tbody#calendar-body tr td')
        );

        if (calendar !== null) {
            tdElements.map(t => {
                t.addEventListener('click', function() {
                    var popContainer = document.createElement('div');
                    popContainer.setAttribute('class', 'pop-container');
                    var popWrap = document.createElement('div');
                    popWrap.setAttribute('class', 'pop-wrap');
                    var popTitle = document.createElement('div');
                    popTitle.setAttribute('class', 'pop-title');
                    popTitle.innerHTML =
                        monthAndYear.innerText +
                        ' &nbsp;-&nbsp; ' +
                        zeroAdd(t.children[0].innerText - 1);
                    var popContents = document.createElement('div');
                    popContents.setAttribute('class', 'pop-contents');
                    var popClose = document.createElement('div');
                    popClose.setAttribute('class', 'pop-close');

                    var contentData = Array.from(t.children[1].children);

                    contentData.map(v => {
                        var dataBox = document.createElement('p');
                        dataBox.innerText = v.innerText;
                        popContents.appendChild(dataBox);
                    });

                    popTitle.appendChild(popClose);
                    popWrap.appendChild(popTitle);
                    popWrap.appendChild(popContents);
                    popContainer.appendChild(popWrap);
                    calendarWrapperBox.appendChild(popContainer);

                    if (popClose !== null) {
                        popClose.addEventListener('click', function() {
                            calendarWrapperBox.removeChild(popContainer);
                        });
                    }
                });
            });
        }
    }

    /*
    기본 칼린더와 관계 없는 평가일정, 힐탑일정 클릭 이벤트
*/

    var scheduleSwich = Array.from(
        document.querySelectorAll('.calendar-container .kind .bundle p')
    );

    if (scheduleSwich !== null) {
        scheduleSwich.map(swich => {
            swich.addEventListener('click', () => {
                scheduleSwich.map(active => {
                    if (swich === active) {
                        active.classList.add('active');
                    } else {
                        active.classList.remove('active');
                    }
                });
            });
        });
    }
}
