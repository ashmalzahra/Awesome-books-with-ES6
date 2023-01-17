import { DateTime } from 'luxon';

export default function currenTime(timeElement) {
    const dt = DateTime.now();
    timeElement.innerHTML = `${dt.toFormat('DDD tt')}`;
    timeElement.setAttribute('datetime', dt.toISO());
  }