

const names = ['Jack Tan', 'Zhen Hao Lim', 'Claudia Chan', 'Boris Wong'];

function getWeekNumber() {
    const startDate = new Date('2024-09-15T10:54:35.789Z'); 
    const currentDate = new Date(); 
    
    const timeDifference = currentDate.getTime() - startDate.getTime();

    const dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    const weekNumber = Math.floor(dayDifference / 7);
    
    return weekNumber;
}

function getNameForThisWeek() {
    const weekNumber = getWeekNumber();
  
    const nameIndex = weekNumber % names.length;
  
    return names[nameIndex];
  }
  
const currentDisplayedName = getNameForThisWeek();
document.querySelector('.name').innerHTML = currentDisplayedName;

setInterval(() => {
    const name = getNameForThisWeek();

    if (currentDisplayedName !== name) {
        currentDisplayedName = name;
        document.querySelector('.name').innerHTML = currentDisplayedName;
    }

}, 1000);