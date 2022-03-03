function check () {
    let inputtedDay = document.getElementById("day").value
    let inputtedMonth = document.getElementById("month").value
    let inputtedYear = document.getElementById("year").value

    let stringDay = inputtedDay.toString();
    let stringMonth = inputtedMonth.toString();
    let stringYear = inputtedYear.toString();

    let ourDay = stringDay + "-" + stringMonth + "-" + stringYear;
    let p = new Date(ourDay)
    let dayWeek = p.getDay();
    alert (dayWeek)

    
}