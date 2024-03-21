import React, { useState, useEffect } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@mui/material";
import "./CustomDateRangePicker.scss";
import CustomRadioGroup from "../CustomRadioGroup";
const dateOptions = [
  { value: "none", label: "All" },
  { value: "week", label: "This Week" },
  { value: "month", label: "This Month" },
  { value: "year", label: "This Year" },
];
const CustomDateRangePicker = ({ data, onDataFilter, setDateRange }) => {
  const [dateRange, setDateRangeState] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const [isDateRangePickerActive, setIsDateRangePickerActive] = useState(false);
  const [filter, setFilter] = useState("none");

  useEffect(() => {
    const oldestDate = new Date(
      Math.min(...data.map((item) => new Date(item.date)))
    );
    const currentDate = new Date();

    setDateRangeState({
      startDate: oldestDate,
      endDate: currentDate,
      key: "selection",
    });

    filterDataByDateRange();
    setFilter("none");
  }, [data]);

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
    setDateRangeState({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
    setDateRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });
  };

  const handleFilterChange = (event) => {
    const value = event.target.value;
    let startDate, endDate;

    const today = new Date();
    switch (value) {
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
        const oldestDate = new Date(
          Math.min(...data.map((item) => new Date(item.date)))
        );
        startDate = oldestDate;
        endDate = today;
    }

    setDateRangeState({
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    });
    setDateRange({
      startDate: startDate,
      endDate: endDate,
      key: "selection",
    });

    setFilter(value);
  };

  return (
    <div>
      <CustomRadioGroup
        ariaLabel="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        options={dateOptions}
      />
      <Button
        onClick={() => setIsDateRangePickerActive(!isDateRangePickerActive)}
      >
        {isDateRangePickerActive ? "Hide Calendar" : "Show Calendar"}
      </Button>
      {isDateRangePickerActive && (
        <div style={{ marginTop: "20px" }}>
          <DateRangePicker
            ranges={[dateRange]}
            onChange={handleDateChange}
            showSelectionPreview={true}
            editableDateInputs={true}
            onClose={() => setIsDateRangePickerActive(false)}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDateRangePicker;
