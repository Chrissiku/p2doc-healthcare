import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from "date-fns";
import { useState } from "react";

const meetings = [
  {
    id: 1,
    name: "Leslie Alexander",
    startDatetime: "2023-12-10T13:00",
    endDatetime: "2023-12-20T14:30",
  },
  {
    id: 2,
    name: "Michael Foster",
    startDatetime: "2023-12-20T09:00",
    endDatetime: "2023-12-22T11:30",
  },
  {
    id: 3,
    name: "Dries Vincent",
    startDatetime: "2023-05-20T17:00",
    endDatetime: "2022-03-20T18:30",
  },
  {
    id: 4,
    name: "Leslie Alexander",
    startDatetime: "2023-06-09T13:00",
    endDatetime: "2023-06-09T14:30",
  },
  {
    id: 5,
    name: "Michael Foster",
    startDatetime: "2022-05-13T14:00",
    endDatetime: "2022-05-13T14:30",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Calendar = () => {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  return (
    <div className="w-full p-5 bg-white rounded-3xl space-y-[4px]">
      <h3 className="text-[18px] font-semibold">Calendar</h3>
      {/* Calendar */}
      <div className="w-full">
        <div className="inline-flex items-center justify-between w-full border-b py-3 border-[#d2d2d2]">
          <h2 className="flex-auto font-semibold text-gray-900 text-[12px]">
            {format(firstDayCurrentMonth, "MMMM yyyy")}
          </h2>
          <button
            type="button"
            onClick={previousMonth}
            className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon
              className="w-[20px] h-[20px] text-og-blue font-bold"
              aria-hidden="true"
            />
          </button>
          <button
            onClick={nextMonth}
            type="button"
            className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon
              className="w-[20px] h-[20px] text-og-blue font-bold"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="grid grid-cols-7 mt-2 text-[10px] leading-6 text-center text-gray-500">
          <div>SUN</div>
          <div>MON</div>
          <div>TUE</div>
          <div>WED</div>
          <div>THU</div>
          <div>FRI</div>
          <div>SAT</div>
        </div>
        <div className="grid grid-cols-7 h-35 text-[12px]">
          {days.map((day, dayIdx) => (
            <div
              key={day.toString()}
              className={classNames(
                dayIdx === 0 && colStartClasses[getDay(day)],
                "py-.25"
              )}
            >
              <button
                type="button"
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && "text-black",
                  !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    "text-black bg-og-blue",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    "text-black",
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    "text-oliver-green",
                  isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    "bg-olive-green",
                  !isEqual(day, selectedDay) && "hover:bg-olive-green",
                  (isEqual(day, selectedDay) || isToday(day)) &&
                    "font-semibold bg-og-blue",
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                )}
              >
                <time dateTime={format(day, "yyyy-MM-dd")}>
                  {format(day, "d")}
                </time>
              </button>

              <div className="w-1 h-1 mx-auto">
                {meetings.some((meeting) =>
                  isSameDay(parseISO(meeting.startDatetime), day)
                ) && (
                  <div className="w-2 h-2 -mt-5 rounded-full bg-[#e33737]"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export default Calendar;
