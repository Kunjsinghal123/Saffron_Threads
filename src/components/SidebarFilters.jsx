import {
  FaTshirt,
  FaPalette,
  FaRulerVertical,
} from "react-icons/fa";

const SidebarFilters = ({ filters, setFilters, options }) => {
  const update = (key, val) =>
    setFilters(prev => ({ ...prev, [key]: val }));

  return (
    <div className="space-y-6 text-sm">
      <h3 className="font-bold text-lg">Filters</h3>

      <div>
        <label className="flex items-center gap-2 mb-1">
          <FaTshirt /> Fabric
        </label>
        <select
          className="w-full border rounded p-2"
          onChange={e => update("fabric", e.target.value)}
        >
          <option value="">All</option>
          {options.fabric.map(v => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1">
          <FaPalette /> Style
        </label>
        <select
          className="w-full border rounded p-2"
          onChange={e => update("style", e.target.value)}
        >
          <option value="">All</option>
          {options.style.map(v => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="flex items-center gap-2 mb-1">
          <FaRulerVertical /> Length
        </label>
        <select
          className="w-full border rounded p-2"
          onChange={e => update("length", e.target.value)}
        >
          <option value="">All</option>
          {options.length.map(v => (
            <option key={v}>{v}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SidebarFilters;
