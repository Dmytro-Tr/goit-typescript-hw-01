enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
};

// Типізуйте функцію isWeekend яка приймає день тижня з enum DayOfWeek і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
