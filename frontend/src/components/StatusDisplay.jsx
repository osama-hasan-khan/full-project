const StatusDisplay = ({ status }) => {
  const getColor = (status) => {
    let color;
    switch (status) {
      case "done":
        color = "bg-green-200";
        return color;

      case "started":
        color = "bg-yellow-200";
        return color;

      case "not started":
        color = "bg-red-200";
        return color;
      default:
        color = "bg-slate-700";
    }
    return color;
  };
  return (
    <span
      className={`inline-block rounded font-mono px-2 py-1 text-xs font-semibold text-gray-900 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
