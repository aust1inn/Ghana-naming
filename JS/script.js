function check () {
    let inputtedDay = document.getElementById("day").value;
    let inputtedMonth = document.getElementById("month").value;
    let inputtedYear = document.getElementById("year").value;
    let gender = document.getElementById("gender").value;


    let stringDay = inputtedDay.toString();
    let stringMonth = inputtedMonth.toString();
    let stringYear = inputtedYear.toString();

    let ourDay = stringMonth + "-" + stringDay + "-" + stringYear;
    let p = new Date(ourDay)
    let dayWeek = p.getDay();

    // alert (dayWeek)
    // alert(gender)
    
    if (dayWeek==0 && gender=="female") {
        alert("yo")
    }
    else if (dayWeek==1 && gender=="female") {
        
    }

    else if (dayWeek==1 && gender=="female") {
        
    }

    else if (dayWeek==1 && gender=="female") {
        
    }

    else if (dayWeek==1 && gender=="female") {
        
    }

    
    else if (dayWeek==1 && gender=="female") {
        
    }

    else if (dayWeek==1 && gender=="female") {
        
    }

    else if (dayWeek==1 && gender=="male") {
        
    }

    else if (dayWeek==1 && gender=="male") {
        
    }

    else if (dayWeek==1 && gender=="male") {
        
    }

    else if (dayWeek==1 && gender=="male") {
        
    }

    else if (dayWeek==1 && gender=="male") {
        
    }

    else if (dayWeek==1 && gender=="male") {
        
    }
    else {
        
    }

}