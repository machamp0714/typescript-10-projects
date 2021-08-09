// CountDown

const newYears = '1 Jan 2022';

const setCountdown = () => {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate.getTime() - currentDate.getTime()) / 1000;

  const dates = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  const datesEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('mins');
  const secondsEl = document.getElementById('seconds');

  if (datesEl) datesEl.innerText = format(dates);
  if (hoursEl) hoursEl.innerText = format(hours);
  if (minsEl) minsEl.innerText = format(mins);
  if (secondsEl) secondsEl.innerText = format(seconds);
};

export const format = (time: number) => {
  const result = time < 10 ? `0${time}` : time.toString();

  return result;
};

const countdown = () => {
  setInterval(setCountdown, 1000);
};

countdown();
