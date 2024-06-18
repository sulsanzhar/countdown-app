export const parseTime = (date: Date): string => {
    const hours = 23 - date.getHours();
    const minutes = 59 - date.getMinutes();
    const seconds = 59 - date.getSeconds();
    const parsedHours = hours < 10 ? `0${hours}` : hours.toString();
    const parsedMinites = minutes < 10 ? `0${minutes}` : minutes.toString();
    const parsedSeconds = seconds < 10 ? `0${seconds}` : seconds.toString();
    return `${parsedHours}:${parsedMinites}:${parsedSeconds}`;
}
