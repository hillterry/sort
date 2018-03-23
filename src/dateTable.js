export function dateTable(year, month, day) {
    let days = [];
    let today = new Date();
    if (!year) {
        year = today.getFullYear();
        month = today.getMonth() + 1;
        day = today.getDay();
    }
    let currentDay = new Date(year, month - 1, 1).getDay();
    let currentDate = new Date(year, month, 0).getDate();
    let prevDate = new Date(year, month - 1, 0).getDate();

    for (let index = 0; index < currentDay; index++) {
        let prevDay = prevDate - currentDay + 1 + index;
        days.push(prevDay);
    }
    for (let currenIndex = 0; currenIndex < currentDate; currenIndex++) {
        days.push(currenIndex + 1);
    }
    let nowArray = days.length;
    for (let nextIndex = 0; nextIndex < 42 - nowArray; nextIndex++) {
        days.push(1 + nextIndex);
    }
    return days;
}
