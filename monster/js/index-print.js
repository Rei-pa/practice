var now = new Date(); //目前時間，為了抓當下的年份與月份
nowYearPrint = now.getFullYear(); //當下年份
// console.log("nowYear資料型態=" + typeof (nowYearPrint));
nowMonthPrint = now.getMonth(); //目前的月份，之後用此值在陣列中找出正確的天數

var baseYear = now.getFullYear();
var baseMonth = now.getMonth();

//找出每個月份的第一天為禮拜幾,再從陣列中找出那個月有幾天
// var startDate = new Date(nowYear,nowMonth,1);

printDate = new Array();

function init() {
    //註冊年月按鈕
    // nextYear = document.querySelector('#timeBox--year .arrow--right');
    // lastYear = document.querySelector('#timeBox--year .arrow--left');

    nextMonthPrint = document.querySelector('#timeBox__print--month .arrow--right');
    lastMonthPrint = document.querySelector('#timeBox__print--month .arrow--left');
    // console.log(nextMonthPrint);
    // console.log(lastMonthPrint);

    nextMonthPrint.onclick = addMonth;
    lastMonthPrint.onclick = minusMonth;


    var classDatePrint = document.getElementsByClassName('print__class--dates');
    //將li裡面的日期放入陣列
    for (let i = 0; i < classDatePrint.length; i++) {
        printDate.push(classDatePrint[i].innerHTML);
    }

    runDatePrint();
}

var daysPrint = document.getElementsByClassName('days--print'); //註冊所有td當成日期欄
function runDatePrint() {
    // console.log("days數量為" + days.length);
    var showYear = document.getElementById('titleYear--print'); //年份欄
    var showMonth = document.getElementById('titleMonth--print'); //月份欄

    var monthAmount = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //月份的天數  
    // console.log("第一格為" + daysPrint[0].innerHTML);
    //先清空月曆
    for (a = 0; a <= daysPrint.length - 1; a++) {
        daysPrint[a].innerHTML = "";
        daysPrint[a].classList.remove("noShowClass--index");
        if (daysPrint[a].classList.contains("showClass--index") == true) {
            daysPrint[a].classList.remove("showClass--index");
        }
    }
    showYear.innerHTML = nowYearPrint; //放到年份欄
    // console.log(showYear);
    showMonth.innerHTML = (nowMonthPrint + 1) + "月";
    // console.log(showMonth);
    // console.log(nowMonthPrint + "＋1為目前的月份");

    //檢查閏月
    if (nowYearPrint % 4 == 0 && nowYearPrint % 100 != 0) {
        monthAmount[1] = 29;
    } else if (nowYearPrint % 400 == 0) {
        monthAmount[1] = 29;
    }
    // console.log("此年二月天數為" + parseInt(monthAmount[1]));
    startDate = new Date(nowYearPrint, nowMonthPrint, 1);
    //找出每個月份的第一天為禮拜幾,再從陣列中找出那個月有幾天
    var first = startDate.getDay(); //0~6
    // console.log("該月1號為星期" + first);

    //用迴圈將那個月的每一天依序帶入第一天之後的td空格
    for (var i = 1; i <= monthAmount[nowMonthPrint]; i++) {
        // console.log("該月天數為" + parseInt(monthAmount[nowMonthPrint]));
        // console.log("daysPrint[first + (i - 1)]" + (first + (i - 1)));
        daysPrint[first + (i - 1)].innerHTML = i;
        daysPrint[first + (i - 1)].classList.add("noShowClass--index");
    }
    // 帶入有課的日期，標示不同
    for (let j = 0; j < printDate.length; j++) {
        if (parseInt(printDate[j].split("-")[0]) == parseInt(nowYearPrint) && parseInt(printDate[j].split("-")[1]) == parseInt(nowMonthPrint) + 1) {
            //抓到所屬td格
            var showClassPrint = daysPrint[first + parseInt(printDate[j].split("-")[2]) - 1];
            // console.log(parseInt(printDate[j].split("-")[2]));
            // console.log(showClassPrint);

            showClassPrint.classList.remove("noShowClass--index");
            showClassPrint.classList.add("showClass--index");
        }
    }

    //檢查最後一週的欄位是否為空白，空白的話隱藏
    // var weeks = document.getElementsByClassName('week--print');
    // var lastRow = weeks[weeks.length - 1];
    // console.log(lastRow.toString());
    // var checkTds = lastRow.getElementsByClassName('days--print');
    // console.log("最後一欄總共" + checkTds.length + "個td");

    // if (checkTds[0].innerHTML == "") {
    //     lastRow.style.display = "none";
    // } else {
    //     lastRow.style.display = "table-row";
    // }
}

function addMonth() {
    nowMonthPrint += 1;
    if (nowMonthPrint > 11) {
        nowMonthPrint = 0;
        nowYearPrint++;
        // console.log("新查詢年份為" + nowYearPrint);
    }
    // console.log("新查詢月份為" + nowMonthPrint + 1);
    runDatePrint();
}

function minusMonth() {
    if (nowMonthPrint == baseMonth && nowYearPrint == baseYear) {
        return false;
    } else {
        nowMonthPrint -= 1;
        if (nowMonthPrint < 0) {
            nowMonthPrint = 11;
            nowYearPrint--;
            // console.log("新查詢年份為" + nowYearPrint);
        }
        runDatePrint();
    }
}

window.onload = init();