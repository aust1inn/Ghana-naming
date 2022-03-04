const btn = document.getElementById("bttn");


function check (e) {
    e.preventDefault()
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


    let result = document.getElementById("result");
    let description = document.getElementById("description")
    let form = document.getElementById("form")
    
    

    // conditions for naming
    if (inputtedDay>31 || inputtedDay<1) {
      alert("day must be between 1 and 31")
    }

    else if (inputtedMonth>12 || inputtedMonth<1) {
      alert("month value must be between 1 and 12")
    }
    
    else if (inputtedYear=="") {
      alert("input year")
    }
    else if (dayWeek==0 && gender=="female") {
        result.innerHTML = "Your Akan name is Akosua"
    }
    else if (dayWeek==1 && gender=="female") {
      result.innerHTML = "Your Akan name is Adwoa"
 
    }

    else if (dayWeek==2 && gender=="female") {
      result.innerHTML = "Your Akan name is Abenaa"

    }

    else if (dayWeek==3 && gender=="female") {
      result.innerHTML = "Your Akan name is Akua"

    }

    else if (dayWeek==4 && gender=="female") {
      result.innerHTML = "Your Akan name is Yaa"

    }

    
    else if (dayWeek==5 && gender=="female") {
      result.innerHTML = "Your Akan name is Afua"

    }

    else if (dayWeek==6 && gender=="female") {
      result.innerHTML = "Your Akan name is Ama"

    }

    else if (dayWeek==0 && gender=="male") {
      result.innerHTML = "Your Akan name is Kwasi"

    }

    else if (dayWeek==1 && gender=="male") {
      result.innerHTML = "Your Akan name is Kwadwo"

    }

    else if (dayWeek==2 && gender=="male") {
      result.innerHTML = "Your Akan name is Kwabena"

    }

    else if (dayWeek==3 && gender=="male") {
      result.innerHTML = "Your Akan name is Kwaku"

    }

    else if (dayWeek==4 && gender=="male") {
      result.innerHTML = "Your Akan name is Yaw"

    }

    else if (dayWeek==5 && gender=="male") {
      result.innerHTML = "Your Akan name is Kofi"

    }
    else if (dayWeek==6 && gender=="male"){
      result.innerHTML = "Your Akan name is Kwame"

    }
   
   
    // form.style.display= "none"
    description.style.display= "none"
  }
  btn.addEventListener('click', check);