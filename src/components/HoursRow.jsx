export default function HoursRow({ day, time, isToday = false }) {
  return (
    <div className={`flex items-center justify-between py-2 px-4 ${isToday ? "rounded-lg bg-gray-700" : ""}`}>
      <span className="text-gray-300">{day}</span>
      <span className="font-medium text-gray-100">{time}</span>
    </div>
  );
}
