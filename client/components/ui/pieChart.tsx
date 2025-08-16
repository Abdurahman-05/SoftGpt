// // components/MyPieChart.tsx
// "use client"; // only if using Next.js 13+ app directory

// import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

// const data = [
//   { name: "Red", value: 12 },
//   { name: "Blue", value: 19 },
//   { name: "Yellow", value: 3 },
//   { name: "Green", value: 5 },
// ];

// const COLORS = ["#db6ce6", "#8e12d5", "#443452", "#99a1af"];

// const MyPieChart = () => {
//   return (
//     <PieChart width={160} height={160}>
//       <Pie
//         data={data}
//         cx="50%"
//         cy="50%"
//         outerRadius={80}
//         fill="#8884d8"
//         dataKey="value"
//       >
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//         ))}
//       </Pie>
//       {/* <Tooltip /> */}
//       {/* <Legend /> */}
//     </PieChart>
//   );
// };

// export default MyPieChart;
// components/MyPieChart.tsx
"use client";

import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useState } from "react";

const data = [
  { name: "Red", value: 12 },
  { name: "Blue", value: 19 },
  { name: "Yellow", value: 3 },
  { name: "Green", value: 5 },
];

const COLORS = ["#db6ce6", "#8e12d5", "#443452", "#99a1af"];

const MyPieChart = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(-1);



  return (
    <PieChart width={160} height={160}>
       <Pie
        data={data}
        cx="50%"
        cy="50%"
        dataKey="value"
        outerRadius={80}
        activeIndex={activeIndex}            // hovered slice
        activeOuterRadiusOffset={10}         // grow by 10px on hover
        onMouseEnter={(_, index) => setActiveIndex(index)}
        onMouseLeave={() => setActiveIndex(-1)}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            fill={COLORS[index % COLORS.length]}
          />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default MyPieChart;
