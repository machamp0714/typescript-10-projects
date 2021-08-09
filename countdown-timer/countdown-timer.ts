// CountDown

const newYears = new Date('2022-01-01');

const setCountdown = () => {
  const currentDate = new Date();

  const diffDates = Math.floor(
    (newYears.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000)
  );
  const diffHours = 24 - currentDate.getHours();
  const diffMinutes = 60 - currentDate.getMinutes();
  const diffSeconds = 60 - currentDate.getSeconds();

  const dates = document.getElementById('days');
  const hours = document.getElementById('hours');
  const mins = document.getElementById('mins');
  const seconds = document.getElementById('seconds');

  if (dates) dates.innerText = diffDates.toString();
  if (hours) hours.innerText = diffHours.toString();
  if (mins) mins.innerText = diffMinutes.toString();
  if (seconds) seconds.innerText = diffSeconds.toString();
};

const countdown = () => {
  setInterval(setCountdown, 1000);
};

countdown();
