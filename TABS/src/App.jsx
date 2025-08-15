import React, { useState } from "react";

//todo: Tab labels and content -  easy to extend later
const tabData = [
  { label: "Tab 1", content: "TAB 1 CONTENTS", bgColor: "bg-red-500" },
  { label: "Tab 2", content: "TAB 2 CONTENTS", bgColor: "bg-orange-500" },
  { label: "Tab 3", content: "TAB 3 CONTENTS", bgColor: "bg-purple-500" },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex border-b border-gray-300">
        {tabData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex-1 py-4 text-center line-clamp-2 transition-colors duration-200 cursor-pointer ${
              activeIndex === index ? "bg-blue-500 text-white" : ""
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div
        className={`p-4 mt-10 text-center border mx-16 py-20 rounded-2xl  bg-slate-500/10 ${tabData[activeIndex].bgColor} `}
      >
        <p className="text-white">{tabData[activeIndex].content}</p>
      </div>
    </div>
  );
}

export default App;
