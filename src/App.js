import React, { useState } from "react";
// import Accordion from "./components/Accordion";
// import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const options = [
  {
    label: "Strawberries",
    value: "red",
  },
  {
    label: "Sea",
    value: "blue",
  },
  {
    label: "Forest",
    value: "green",
  },
];

// const items = [
//   {
//     title: 'Thomas Edison was "the Wizard of Menlo Park" in what US state? ',
//     content: "New Jersey",
//   },
//   {
//     title: "What is the capital of Portugal? ",
//     content: "Lisbon",
//   },
//   {
//     title: "What movie did Michael J. Fox learn to skateboard for? ",
//     content: "Back to the future",
//   },
// ];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null}
    </div>
  );
};

export default App;
