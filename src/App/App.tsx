import { useEffect, useState } from 'react';
import { parseToCurrentDay } from '../Helpers/parseToCurrentDay';
import { parseDayToNewYear } from '../Helpers/parseDayToNewYear';
import { parseTime } from '../Helpers/parseTime';
import { Loader } from '../UI/Loader/Loader';
import styles from './App.module.css'

function App() {
  const [currentDay, setCurrentDay] = useState<string>('');
  const [daysToNewYear, setDaysToNewYear] = useState<string>('');;
  const [time, setTime] = useState<string>('');
  const [isShow, setShow] = useState<boolean>(false);
  
  useEffect(() => {
    setShow(true)
    setInterval(() => {
      const now = new Date();
      setCurrentDay(parseToCurrentDay(now));
      setDaysToNewYear(parseDayToNewYear(now));
      setTime(parseTime(now));
      setShow(false);
    }, 1000);
  }, []);
  

  return (
    <div className={styles.app}>
      {
        isShow ? (
          <Loader/>
        ) : (
          <div className={styles.title}>
            <p className={styles.subtitle}>Новый год</p>
            <div className={styles.subtitle}>
              <p>{new Date().getFullYear()}</p>
              <p>&#8594;</p>
              <p>{new Date().getFullYear() + 1}</p>
            </div>
            <div className={styles.countdown}>
              <p>{daysToNewYear}</p>
              <p>{time}</p>
              <p></p>
            </div>
            <div>
              <p className={styles.subtitle}>{currentDay}</p>
            </div>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
