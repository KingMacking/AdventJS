function countHours(year, holidays) {
    return holidays.reduce((acc,hd) => {
        return ([1, 2, 3, 4, 5].includes(new Date(hd+"/"+year).getDay())) ? acc = acc+2 : acc
    },0)
}




// 130 pts solution//

// function countHours(year, holidays) {
//     let hours = 0;
//     const date = new Date();

//     holidays.forEach(holiday => {
//         date.setTime(Date.parse(holiday + "/" + year));
//         (date.getDay() > 0 && date.getDay() < 6) && (hours +=2)
//     })
    
//     return hours
// }