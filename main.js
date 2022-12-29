
const dates = [
    ['01.01.2000', '01.01.2016'],
    ['01.01.2016', '01.08.2016'],
    ['01.11.2015', '01.02.2017'],
    ['17.12.2016', '16.01.2017'],
    ['01.01.2016', '01.01.2016'],
    ['28.02.2015', '13.04.2018'],
    ['28.01.2015', '28.02.2015'],
    ['17.03.2022', '17.03.2023'],
    ['17.02.2024', '17.02.2025'],
];

// Receive string of dates one after each other
function outputDate(dates) {
    const difference = {
        inDays: (d1, d2) => {
            return Math.floor((d2.getTime() - d1.getTime()) / (24 * 3600 * 1000));
        },
        inMonths: (d1, d2) => {
            return parseInt((((difference.inDays(d1, d2) / 365) - difference.inYears(d1, d2)) * 365) / 30);
        },
        inYears: (d1, d2) => {
            return d2.getFullYear() - d1.getFullYear() - (d2.getMonth() < d1.getMonth() ? 1 : 0);
        }
    }

    let date0 = dates[0].split('.');
    let date1 = dates[1].split('.');
    date0 = new Date(date0[1] + '-' + date0[0] + '-' + date0[2]);
    date1 = new Date(date1[1] + '-' + date1[0] + '-' + date1[2]);

    const days = difference.inDays(date0, date1);
    const months = difference.inMonths(date0, date1);
    const years = difference.inYears(date0, date1);
             
    return (years ? years + " year" + (years > 1 ? "s" : "") : "")
        + (months % 12 > 0 && (days !== 30 || days === 0) ? ((years ? ", " : "") + (months % 12)) + (months % 12 == 1 ? " month" : " months") : "")
        + (days > 1 && days !== 30 ? ", " : "")
        + "total " + days + " days";
}
