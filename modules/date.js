import { DateTime } from './luxon.min.js';

export default function currentTime(timeElement) {
  const dt = DateTime.now();
  timeElement.innerHTML = `${dt.toFormat('DDD tt')}`;
  timeElement.setAttribute('datetime', dt.toISO());
}