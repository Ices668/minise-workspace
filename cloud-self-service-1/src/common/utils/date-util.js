import { format, addHours, subHours, subMinutes, differenceInMinutes } from 'date-fns';

const DATE_FORMAT = `yyyy-MM-dd`;

const DATETIME_FORMAT = `yyyy-MM-dd HH:mm:ss`;

const SHORT_DATETIME_FORMAT = `yyyy-MM-dd HH:mm`;

const DELAY = 18; // 图像数据延迟时间，单位分钟

const toUTC = (date) => {
    return addHours(date, date.getTimezoneOffset() / 60);
}

const fromUTC = (date) => {
    return subHours(date, date.getTimezoneOffset() / 60);
}

const formatDate = (date, formatStr) => {
    if (!date) {
        return '';
    }
    return format(date, formatStr);
}

const getSpanDate = (interval, startDate = new Date(), latestDate = null) => {
    if (latestDate && startDate <= latestDate && startDate.getMinutes() % interval === 0 && startDate.getSeconds() === 0 && startDate.getMilliseconds() === 0) {
        return startDate;
    }

    const date = differenceInMinutes(new Date(), startDate) > DELAY ? startDate : subMinutes(startDate, DELAY);
    date.setSeconds(0);
    date.setMilliseconds(0);

    let minuteCeil = Math.ceil(date.getMinutes() / interval) * interval;
    let minuteFloor = Math.floor(date.getMinutes() / interval) * interval;
    if (minuteCeil - date.getMinutes() < date.getMinutes() - minuteFloor) {
        date.setMinutes(minuteCeil);
    } else {
        date.setMinutes(minuteFloor);
    }
    return date;
}

const getVerifySpanDate = (interval, startDate, latestDate, forecastHours) => {
    if (!latestDate) {
        latestDate = new Date();
    }

    const forwardTime = forecastHours * 60 + DELAY;
    let date = differenceInMinutes(latestDate, startDate) > forwardTime ? startDate : subMinutes(latestDate, forwardTime);
    date = getSpanDate(interval, date);
    return startDate < date ? startDate : date;
}

const getNearestTime = (time, interval) => {
    const newTime = new Date(time);
    const minute = newTime.getMinutes();
    const nearestMinute = Math.round(minute / interval) * interval;
    newTime.setMinutes(nearestMinute);
    return newTime;
}


export default {
    DATE_FORMAT,
    DATETIME_FORMAT,
    SHORT_DATETIME_FORMAT,
    formatDate,
    getSpanDate,
    getVerifySpanDate,
    getNearestTime,
    toUTC,
    fromUTC
}