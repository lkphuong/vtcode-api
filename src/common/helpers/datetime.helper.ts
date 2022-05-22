import * as moment from 'moment';

export const getDateNow = () => new Date(Date.now());

export const getCurrentMonth = () => moment().month();

export const getCurrentYear = () => moment().year();

export const getDateNowFormat = (format?: string) => {
  if (!format) {
    format = 'DD-MM-YYYY';
  }

  return moment().format(format);
};

export const getStartToday = () => moment().startOf('day').toDate();

export const getStartTomorrow = () =>
  moment().add(1, 'day').startOf('day').toDate();

export const getStartYesterday = () =>
  moment().subtract(1, 'day').startOf('day').toDate();

export const getDateInThisWeek = (day: number) =>
  moment()
    .startOf('week')
    .add(day + 1, 'day')
    .toDate();

export const getDateInLastWeek = (day: number) =>
  moment()
    .startOf('week')
    .subtract(6 - day, 'day')
    .toDate();
