export const parseDayToNewYear = (date: Date) => {
    const currentYear = date.getFullYear();
    const nextYear = currentYear + 1;
    const newYearDate = new Date(nextYear, 0, 1);

    const msPerDay = 24 * 60 * 60 * 1000;
    const diffInMs = newYearDate.getTime() - date.getTime();
    
    const daysUntilNewYear = Math.floor(diffInMs / msPerDay);
    return daysUntilNewYear.toString() + ' дн.';
}
