import { DateTime } from 'luxon';

export default function currentTime(timeElement) {
    const dt = DateTime.now();
    timeElement.innerHTML = `${dt.toFormat('DDD tt')}`;
    timeElement.setAttribute('datetime', dt.toISO());
  }