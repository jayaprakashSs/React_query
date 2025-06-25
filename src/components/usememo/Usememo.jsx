import React, { useState } from 'react';

const Usememo = () => {
  const [count, setCount] = useState(0);

  console.log("Component Rendered");

  // Version 1: With useMemo
  const columns = React.useMemo(() => {
    console.log("Columns Created (useMemo)");
    return [
      {
        accessorKey: "id",
        header: "SI/No",
        cell: (info) => info.row.index + 1,
      },
      {
        id: "actions",
        header: "Edit / Delete",
        cell: () => (
          <div>
            <button className="text-green-600">Edit</button> |{" "}
            <button className="text-red-600">Delete</button>
          </div>
        ),
      },
    ];
  }, []);

  // Version 2: Without useMemo (Uncomment to test and comment above block)

//   const columns = (() => {
//     console.log("Columns Created (No useMemo)");
//     return [
//       {
//         accessorKey: "id",
//         header: "SI/No",
//         cell: (info) => info.row.index + 1,
//       },
//       {
//         id: "actions",
//         header: "Edit / Delete",
//         cell: () => (
//           <div>
//             <button className="text-green-600">Edit</button> |{" "}
//             <button className="text-red-600">Delete</button>
//           </div>
//         ),
//       },
//     ];
//   })();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Vehicle Table Column Setup</h2>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Re-render ({count})
      </button>

      <div className="bg-gray-100 p-4 rounded text-sm">
        <h3 className="font-semibold mb-2">Columns:</h3>
        <ul className="list-disc ml-6 space-y-1">
          {columns.map((col) => (
            <li key={col.accessorKey || col.id}>
              Header: <strong>{col.header}</strong>, Key: {col.accessorKey || col.id}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Usememo;
