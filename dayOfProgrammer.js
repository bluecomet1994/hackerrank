const input = 1918;

function dayOfProgrammer(year) {
    let day = 256;
    let month = 0;
    let dayOfMonth = 0;
  
    // Calculate the number of days in each month according to the calendar system
    let daysInMonthJulian = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daysInMonthGregorian = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    // Calculate the number of days in February according to the calendar system
    if (year === 1918) {
      // Special case: transition year
      daysInMonthGregorian[1] = 15 - 29;
    } else if (year < 1918 && year % 4 === 0) {
      // Julian leap year
      daysInMonthJulian[1] = 29;
    } else if (
      (year % 400 === 0) ||
      (year % 4 === 0 && year % 100 !== 0)
    ) {
      // Gregorian leap year
      daysInMonthGregorian[1] = 29;
    }
  
    // Iterate over the months to find the first month that has more than 256 days
    let totalDays = 0;
    let i = 0;
    while (totalDays < day) {
      if (year <= 1917) {
        totalDays += daysInMonthJulian[i];
      } else {
        totalDays += daysInMonthGregorian[i];
      }
      i++;
    }
  
    // Calculate the day of the month and month number
    dayOfMonth = daysInMonthJulian[i - 1] || daysInMonthGregorian[i - 1];
    month = i.toString().padStart(2, "0");
  
    // If it's the transition year
    if (year === 1918) {
      // Add 13 days to account for the 13-day shift in the transition
      dayOfMonth += 13;
    }
  
    dayOfMonth -= totalDays - day;
  
    // If the day of the month is greater than the number of days in the month, adjust the day and month
    if (dayOfMonth > daysInMonthGregorian[i - 1]) {
      dayOfMonth -= daysInMonthGregorian[i - 1];
      month = (i + 1).toString().padStart(2, "0");
    }
  
    // Return the date in the specified format
    return `${dayOfMonth.toString().padStart(2, "0")}.${month}.${year}`;
  }

console.log(dayOfProgrammer(input));