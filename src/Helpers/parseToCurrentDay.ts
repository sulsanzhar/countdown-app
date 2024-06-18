export const parseToCurrentDay = (date: Date) => {
    const monthNames: string[] = [
        'Января', 'Февраля', 'Марта', 
        'Апреля', 'Мая', 'Июня', 
        'Июля', 'Августа', 'Сентября', 
        'Октября', 'Ноября', 'Декабря'
    ];
    const daysOfWeek: string[] = [
        'Воскресенье', 'Понедельник', "Вторник", 
        "Среда", "Четверг", "Пятница", "Суббота"
    ]
    const dayNumber = date.getDate();
    const currentDayText = monthNames[date.getMonth()];
    const currentWeek = daysOfWeek[date.getDay()];
    const parsed = dayNumber + " " + currentDayText + " — " + currentWeek;
    return parsed;
}