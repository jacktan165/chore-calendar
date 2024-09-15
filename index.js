

const names = ['Jack Tan', 'Zhen Hao Lim', 'Claudia Chan', 'Boris Wong'];
const startDate = new Date('2024-09-09T00:00:00+10:00'); 

function formatDateToDDMMYYYY(date) {
    // Get the day, month, and year
    const day = String(date.getDate()).padStart(2, '0'); // Pad single digits with '0'
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    
    // Return the formatted string in 'dd-MM-yyyy' format
    return `${day}-${month}-${year}`;
  }

function addDays(date, days) {
    // Create a new Date object to avoid mutating the original date
    const newDate = new Date(date);

    // Add the number of days
    newDate.setDate(newDate.getDate() + days);

    return newDate;
}

function getNextMonday() {
    const today = new Date();
    
    // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)
    const dayOfWeek = today.getDay();
  
    // Calculate how many days until next Monday (1 is Monday, 0 is Sunday, etc.)
    const daysUntilNextMonday = (8 - dayOfWeek) % 7 || 7;
  
    // Create a new Date object for the next Monday
    const nextMonday = new Date(today);
    nextMonday.setDate(today.getDate() + daysUntilNextMonday);
    
    return nextMonday;
  }

function getWeekNumber(currentDate) {

    
    const timeDifference = currentDate.getTime() - startDate.getTime();

    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    const weekNumber = Math.floor(dayDifference / 7);
    
    return weekNumber;
}

function getNameForThisWeek(currentDate) {
    const weekNumber = getWeekNumber(currentDate);
  
    const nameIndex = weekNumber % names.length;
  
    return names[nameIndex];
}

const setIncomingReminders = (querySelector, date) => {
    document.querySelector(querySelector).innerHTML =formatDateToDDMMYYYY(date)
    document.querySelector(`${querySelector}-name`).innerHTML = getNameForThisWeek(date);
}

const setReminder = () => {
    const currentDate = new Date(); 

    document.querySelector('.name').innerHTML =  getNameForThisWeek(currentDate);

    setIncomingReminders('.next-week', getNextMonday())
    setIncomingReminders('.two-weeks-from-now', addDays(getNextMonday(), 7))
    setIncomingReminders('.three-weeks-from-now', addDays(getNextMonday(), 14))
}

setReminder();
setInterval(() => {
    setReminder();
}, 1000);
