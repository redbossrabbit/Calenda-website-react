import React, { useState } from "react";
import styles from "./calendar-styles/Calendar.module.scss";
import Day from "./Day";
import Calenda from "../../utils/calenda";
import {
  today,
  currentMonth,
  year,
  setToToday
} from "../../utils/calendarDefaults.js";

const Calendar = () => {
  let [monthData, setMonthData] = useState(
    new Calenda({
      month: currentMonth
    }).getStructure()
  );

  let [day, setDay] = useState(undefined);

  let [isSetToToday, setIsSetToToday] = useState(false);

  const defaultDay = () => {
    const res = new Calenda({
      month: currentMonth
    }).getStructure();

    setMonthData(() => ({
      ...res
    }));

    setDay(() => ({
      ...setToToday(res, today)
    }));

    setIsSetToToday(true);
  };

  const switchMonth = str => {
    let newMonthDataState = {
      ...monthData.moveMonth(str).getStructure()
    };

    setMonthData(() => newMonthDataState);

    setDay(() => {
      let { ...res } =
        setToToday(
          newMonthDataState,
          day && !isSetToToday ? day.dayNumber : today
        ) || setToToday(newMonthDataState, 1); //default to day 1 if day is not available in next month;

      return res;
    });

    setIsSetToToday(false);
  };

  const setDayData = {
    setDay: setDay,
    monthData: monthData,
    setToToday: setToToday,
    dayNumber: day && day.dayNumber,
    setIsSetToToday: setIsSetToToday,
    isSetToToday: isSetToToday
  };

  return (
    <div className={styles.main}>
      <p
        className={`${styles.today} ${isSetToToday ? styles.isSetToToday : ""}`}
        onClick={defaultDay}>
        {isSetToToday ? "Today" : "Today?"}
      </p>
      <div className={`${styles.card}`} style={{ marginBottom: day && "0px" }}>
        <div className={styles.monthYear}>
          <div onClick={() => switchMonth("backward")}></div>
          <p>
            {day ? day.monthOfYear : currentMonth}
            <span> {day ? day.year : year}</span>
          </p>
          <div onClick={() => switchMonth("forward")}></div>
        </div>
        <div className={styles.daysCont}>
          {Object.keys(monthData.structure).map((e, i) => (
            <div key={i} className={styles.weekCont}>
              <p key={`week${i}`} className={styles.dayOfWeek}>
                {e}
              </p>
              {monthData.structure[e].map((a, i) => (
                <Day key={`day${i}`} id={a} setDayData={setDayData} />
              ))}
            </div>
          ))}
        </div>
      </div>
      {day && (
        <p className={styles.finalDate}>
          {day.dayOfWeek} <span>{`${day.dayNumber}${day.suffix}`}</span>{" "}
          {day.monthOfYear}
          <span> {day.year}</span>
        </p>
      )}
    </div>
  );
};
export default Calendar;
