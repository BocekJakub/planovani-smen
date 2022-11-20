let vstup = "";
let pole = [];
const months = [31,28,31,30,31,30,31,31,30,31,30,31];
let date = new Date;
let day = 1//date.getDate();
let month = date.getMonth();
let mesic = 0;
let year = date.getFullYear();
const day_week = ["ne","po","út","st","čt","pá","so"];
const months_name = ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"]

function loop_days(class_name, num_day){
    let parentDOM = document.querySelector(class_name);
    vstup = parentDOM.querySelectorAll(num_day);
    return vstup;
};

function dates_in_month(){
    date.setDate(1);
    let month = date.getMonth();
    let year = date.getFullYear();
    let den = date.getDay();
    for(let a = 0; a < (months[month] + 1); a++){
        cell_name = loop_days("#day-date",`.d${a}`);
        if(a === 0){
            let pre_datum = new Date(year, month, 0); 
            cell_name[0].innerHTML = pre_datum.getDate();
        } else {
            datum = new Date(`${month + 1}, ${a}, ${year}`);
            den = datum.getDay();  
            cell_name[0].innerHTML = datum.getDate();
        }
    };
}

function days_in_month(){
    date.setDate(1);
    let month = date.getMonth();
    let year = date.getFullYear();
    let den = date.getDay();
    for(let a = 0; a < (months[month] + 1); a++){
        cell_name = loop_days("#name-days",`.d${a}`);
        if(a === 0){
            let pre_datum = new Date(year, month, 0); 
            den = pre_datum.getDay();
            cell_name[0].innerHTML = day_week[den];
        } else {
            datum = new Date(`${month + 1}, ${a}, ${year}`);
            den = datum.getDay();  
            cell_name[0].innerHTML = day_week[den];
        }
    };
};

function hide_empty_element(){
    date.setDate(1);
    let month = date.getMonth();
    let year = date.getFullYear();
    let index = months[month] + 1;
    for(let a = 0; a < 32; a++){
        let parentDOM = document.querySelector(".calendar");
        vstup = parentDOM.querySelectorAll(`.d${a}`);
        for(let i = 0; i < (vstup.length); i++){  
            vstup[i].style.visibility = "visible";
        }
    }
    while(index < 32){
        let parentDOM = document.querySelector(".calendar");
        vstup = parentDOM.querySelectorAll(`.d${index}`);
        for(let i = 0; i < vstup.length; i++){
            vstup[i].style.visibility = "hidden";
        }
        
        index++;
    }
}

function clear_calendar(){
    for(let a = 0; a < 32; a++){
        let parentDOM = document.querySelector(".calendar");
        vstup = parentDOM.querySelectorAll(`.d${a}`);
        for(let i = 0; i < (vstup.length); i++){  
            vstup[i].innerHTML = "";
            vstup[i].style.backgroundColor = "";
        }
    }
}
function shifts_in_month(){
    date.setDate(1);
    let month = date.getMonth();
    let year = date.getFullYear();
    let porovnavaci_datum = new Date(2022, 1, 1);

    for(let a = 0; a < (months[month] + 1); a++){
        pole[2] = a;
        pole[1] = month;
        pole[0] = year;
        let days = 0;
        let i = 0;
        let srovnavaci_datum = new Date(pole[0], pole[1], pole[2])
        days = ((Math.floor((srovnavaci_datum - porovnavaci_datum) / 86400000)));

        O1_elements = loop_days(".calendars-O1", `.d${a}`);
        for(let i = 0; i < O1_elements.length; i++){
                if(((days % 8) === 0) || ((days % 8) === 1)){
                    O1_elements[i].textContent = `D`;
                    O1_elements[i].style.backgroundColor = "yellow";
                } else if(((days % 8) === 2) || ((days % 8) === 3)){
                    O1_elements[i].textContent = `N`;
                    O1_elements[i].style.backgroundColor = "lightgrey";
                };
        };

        O2_elements = loop_days(".calendars-O2", `.d${a}`);
        for(let i = 0; i < O2_elements.length; i++){
                if(((days % 8) === 2) || ((days % 8) === 3)){
                    O2_elements[i].textContent = `D`;
                    O2_elements[i].style.backgroundColor = "yellow";
                } else if(((days % 8) === 4) || ((days % 8) === 5)){
                    O2_elements[i].textContent = `N`;
                    O2_elements[i].style.backgroundColor = "lightgrey";
                };
        };

        O3_elements = loop_days(".calendars-O3", `.d${a}`);
        for(let i = 0; i < O3_elements.length; i++){
                if(((days % 8) === 4) || ((days % 8) === 5)){
                    O3_elements[i].textContent = `D`;
                    O3_elements[i].style.backgroundColor = "yellow";
                } else if(((days % 8) === 6) || ((days % 8) === 7)){
                    O3_elements[i].textContent = `N`;
                    O3_elements[i].style.backgroundColor = "lightgrey";
                };
            };

        O4_elements = loop_days(".calendars-O4", `.d${a}`);
        for(let i = 0; i < O4_elements.length; i++){
                if(((days % 8) === 6) || ((days % 8) === 7)){
                    O4_elements[i].textContent = `D`;
                    O4_elements[i].style.backgroundColor = "yellow";
                } else if(((days % 8) === 0) || ((days % 8) === 1)){
                    O4_elements[i].textContent = `N`;
                    O4_elements[i].style.backgroundColor = "lightgrey";
                };
        };
    }
}


function weekend_days(){
    date.setDate(1);
    let month = date.getMonth();
    let year = date.getFullYear();
    for(let a = 0; a < (months[month] + 1); a++){
        cell_name = loop_days("#name-days",`.d${a}`);
        if(cell_name[0].innerHTML == "so"){
            find_divs = document.querySelectorAll(`.d${a}`);
            for(let j = 0; j < find_divs.length; j++){
                find_divs[j].style.backgroundColor = "#ffd700"
            };
        } else if(cell_name[0].innerHTML == "ne"){
            find_divs = document.querySelectorAll(`.d${a}`);
            for(let j = 0; j < find_divs.length; j++){
                find_divs[j].style.backgroundColor = "#ffa500"
            };
        };
    };
};

function set_month(){
    date.setDate(1);
    let month = date.getMonth();
    let year = date.getFullYear();
    document.querySelector("#month").innerHTML = months_name[month];
    document.querySelector("#year").innerHTML = year;
};

let x = 0;

document.querySelector(".left-arrow").addEventListener("click", (event) => {
    if(x > -12){
        date.setMonth(date.getMonth() - 1);
        x -= 1;
    } else {
        date.setMonth(date.getMonth());
    }
    clear_calendar();
    dates_in_month();
    days_in_month();
    weekend_days();
    shifts_in_month();
    set_month();
    hide_empty_element();
});

document.querySelector(".right-arrow").addEventListener("click",(event) => {
    if(x < 12){
        date.setMonth(date.getMonth() + 1);
        x += 1
    } else {
        date.setMonth(date.getMonth());
    }
    clear_calendar();
    dates_in_month();
    days_in_month();
    weekend_days();
    shifts_in_month();
    set_month();
    hide_empty_element();
});


dates_in_month();
days_in_month();
weekend_days();
shifts_in_month();
set_month();
hide_empty_element();