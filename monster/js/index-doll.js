var now = new Date(); //目前時間，為了抓當下的年份與月份
nowYearDoll = now.getFullYear(); //當下年份
// console.log("nowYearDoll資料型態=" + typeof (nowYearDoll));
nowMonthDoll = now.getMonth(); //目前的月份，之後用此值在陣列中找出正確的天數

var baseYear = now.getFullYear();
var baseMonth = now.getMonth();

// console.log(nowMonthDoll);
// console.log(baseMonth);
// console.log(nowYearDoll);
// console.log(baseYear);


// var classDateDoll = document.getElementsByClassName('doll__class--dates');
//將li裡面的日期放入陣列
dollDate = new Array();


//找出每個月份的第一天為禮拜幾,再從陣列中找出那個月有幾天
// var startDate = new Date(nowYear,nowMonth,1);
    
function init() {
    //註冊年月按鈕
    // nextYear = document.querySelector('#timeBox--year .arrow--right');
    // lastYear = document.querySelector('#timeBox--year .arrow--left');
    
    nextMonthDoll = document.querySelector('#timeBox__doll--month .arrow--right');
    lastMonthDoll = document.querySelector('#timeBox__doll--month .arrow--left');
    // console.log(nextMonthDoll);
    // console.log(lastMonthDoll);
    
    nextMonthDoll.onclick = addMonth;
    lastMonthDoll.onclick = minusMonth;
    
    // getDollClassDateDoll();
    // showClass();
    var classDateDoll = document.getElementsByClassName('doll__class--dates');
    //將li裡面的日期放入陣列
    for (let f = 0; f < classDateDoll.length; f++) {
        dollDate.push(classDateDoll[f].innerHTML);
    }

    runDateDoll();
}
    
var daysDoll = document.getElementsByClassName('days--doll'); //註冊所有td當成日期欄
function runDateDoll() {
        
        // console.log("days數量為" + days.length);
        var showYear = document.getElementById('titleYear--doll'); //年份欄
        var showMonth = document.getElementById('titleMonth--doll'); //月份欄
        
        var monthAmount = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31); //月份的天數  
        // console.log("第一格為" + daysDoll[0].innerHTML);
    //先清空月曆
    for (a = 0; a <= daysDoll.length - 1; a++) {
        daysDoll[a].innerHTML = "";
        daysDoll[a].classList.remove("noShowClass--index");
        if (daysDoll[a].classList.contains("showClass--index") == true) {
            daysDoll[a].classList.remove("showClass--index");
        }
        // console.log(daysDoll[a].innerHTML);
    }
    showYear.innerHTML = nowYearDoll; //放到年份欄
    // console.log(showYear);
    showMonth.innerHTML = (nowMonthDoll + 1) + "月";
    // console.log(showMonth);
    // console.log(nowMonthDoll + "＋1為目前的月份");

    //檢查閏月
    if (nowYearDoll % 4 == 0 && nowYearDoll % 100 != 0) {
        monthAmount[1] = 29;
    } else if (nowYearDoll % 400 == 0) {
        monthAmount[1] = 29;
    }
    // console.log("此年二月天數為" + parseInt(monthAmount[1]));
    startDate = new Date(nowYearDoll, nowMonthDoll, 1);
    //找出每個月份的第一天為禮拜幾,再從陣列中找出那個月有幾天
    var first = startDate.getDay(); //0~6
    // console.log("該月1號為星期" + first);

    //用迴圈將那個月的每一天依序帶入第一天之後的td空格
    for (var i = 1; i <= monthAmount[nowMonthDoll]; i++) {
        // console.log("該月天數為" + parseInt(monthAmount[nowMonthDoll]));
        // console.log("daysDoll[first + (i - 1)]" + (first + (i - 1)));
        daysDoll[first + (i - 1)].innerHTML = i;
        daysDoll[first + (i - 1)].classList.add("noShowClass--index");
    }

    // 帶入有課的日期，標示不同
    for (let j = 0; j < dollDate.length; j++) {
        if (parseInt(dollDate[j].split("-")[0]) == parseInt(nowYearDoll) && parseInt(dollDate[j].split("-")[1]) == parseInt(nowMonthDoll) + 1){
            //抓到所屬td格
            var showClassDoll = daysDoll[first + parseInt(dollDate[j].split("-")[2]) - 1];
            // console.log(parseInt(dollDate[j].split("-")[2]));
            // console.log(showClassDoll);

            showClassDoll.classList.remove("noShowClass--index");
            showClassDoll.classList.add("showClass--index");
        }
    }

    //檢查最後一週的欄位是否為空白，空白的話隱藏
    // var weeks = document.getElementsByClassName('week--doll');
    // var lastRow = weeks[weeks.length - 1];
    // console.log(lastRow.toString());
    // var checkTds = lastRow.getElementsByClassName('days--doll');
    // console.log("最後一欄總共" + checkTds.length + "個td");

    // if (checkTds[0].innerHTML == "") {
    //     lastRow.style.display = "none";
    // } else {
    //     lastRow.style.display = "table-row";
    // }

}

function addMonth() {
    nowMonthDoll += 1;
    if (nowMonthDoll > 11) {
        nowMonthDoll = 0;
        nowYearDoll++;
        // console.log("新查詢年份為" + nowYearDoll);
    }
    // console.log("新查詢月份為" + nowMonthDoll + 1);
    runDateDoll();
}

function minusMonth() {
    if (nowMonthDoll == baseMonth && nowYearDoll == baseYear){
        return false;
    }else{
        nowMonthDoll -= 1;
        if (nowMonthDoll < 0) {
            nowMonthDoll = 11;
            nowYearDoll--;
        }
        //重新跑月曆
        runDateDoll();
    }
}

window.onload = init();