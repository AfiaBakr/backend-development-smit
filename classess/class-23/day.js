
// import dayjs from 'dayjs';
const Day = require('dayjs');

// Get the current date and time
console.log(Day().format()); // Output: 2026-10-31T14:35:00 (ISO string format)

// Format custom patterns
console.log(Day('2026-10-31').format('MMMM DD, YYYY')); // October 31, 2026
console.log(Day().format('dddd, h:mm A')); // Saturday, 2:35 PM