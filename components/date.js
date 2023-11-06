import { parseISO, format } from "date-fns";

const DateJSX = ({ dateString }) => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
};

const DateFormat = (dateString) => {
  const date = parseISO(dateString);
  return format(date, "LLLL d, yyyy");
};

export { DateJSX, DateFormat };
