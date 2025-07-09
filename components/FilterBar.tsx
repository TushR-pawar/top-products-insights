'use client';

type FilterBarProps = {
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  selectedTime: string;
  setSelectedTime: (value: string) => void;
};

const regions = ['All', 'Maharashtra', 'Delhi', 'Gujarat', 'Karnataka'];
const months = [
  'All', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function FilterBar({
  selectedRegion,
  setSelectedRegion,
  selectedTime,
  setSelectedTime,
}: FilterBarProps) {
  return (
    <section className="bg-white shadow-sm rounded-lg px-4 py-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-sm text-slate-600">Region:</label>
          <select
            className="bg-slate-100 border border-slate-300 rounded-full px-3 py-1.5 text-sm focus:ring-2 focus:ring-indigo-500"
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
          >
            {regions.map((region) => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <label className="text-sm text-slate-600">Month:</label>
          <select
            className="bg-slate-100 border border-slate-300 rounded-full px-3 py-1.5 text-sm focus:ring-2 focus:ring-indigo-500"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            {months.map((month) => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}