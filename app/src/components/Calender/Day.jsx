import React from 'react'
import styles from './calendar-styles/Day.module.scss'

let hasSelected = false;
/**@param setDayData - object containing necessary info for setting days  */
const Day = ({ id, setDayData }) => {
    const { setDay, monthData, setToToday, dayNumber, setIsSetToToday, isSetToToday } = setDayData;

    const changeColor = () => {
        if (id === 0 || id === dayNumber) return;
        setDay(() => ({ ...setToToday(monthData, id) }));
        setIsSetToToday(prev => prev ? !prev : prev);
        hasSelected = true;
    }
    return (
        <div
            onClick={changeColor}
            className={`${styles.day} ${(hasSelected && id === dayNumber) || (isSetToToday && id === dayNumber) ? `${styles.selected}` : ''}`}
        >
            <p>{id === 0 ? '' : id}</p>
        </div>
    )
}
export default React.memo(Day);