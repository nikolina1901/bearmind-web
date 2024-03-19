import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const CustomDateRangePicker = ({ data, onDataFilter }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [isDateRangePickerActive, setIsDateRangePickerActive] = useState(false);

  useEffect(() => {
    filterDataByDateRange();
  }, [dateRange]);

  const filterDataByDateRange = () => {
    const updatedData = data.filter((item) => {
      if (!item.date) {
        console.error("Item date is undefined:", item);
        return false;
      }
      const itemDate = new Date(item.date).getTime();
      return (
        itemDate >= dateRange.startDate.getTime() &&
        itemDate <= dateRange.endDate.getTime()
      );
    });
    onDataFilter(updatedData);
  };

  const handleDateChange = (ranges) => {
    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  const handleFilterChange = (filter) => {
    let startDate, endDate;

    const today = new Date();
    switch (filter) {
      case "week":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - today.getDay());
        endDate = new Date(today);
        endDate.setDate(today.getDate() - today.getDay() + 6);
        break;
      case "month":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "year":
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = new Date(today.getFullYear(), 11, 31);
        break;
      default:
        startDate = new Date();
        endDate = new Date();
    }

    setDateRange({
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    });
  };

  return (
    <div>
      {isDateRangePickerActive && (
        <DateRangePicker
          ranges={[dateRange]}
          onChange={handleDateChange}
          showSelectionPreview={true}
          editableDateInputs={true}
          onClose={() => setIsDateRangePickerActive(false)}
        />
      )}
      <div>
        <button
          onClick={() => setIsDateRangePickerActive(!isDateRangePickerActive)}
        >
          {isDateRangePickerActive ? "Hide calendar" : "Show calendar"}
        </button>
        <button onClick={() => handleFilterChange("week")}>This Week</button>
        <button onClick={() => handleFilterChange("month")}>This Month</button>
        <button onClick={() => handleFilterChange("year")}>This Year</button>
      </div>
    </div>
  );
};

export default CustomDateRangePicker;
