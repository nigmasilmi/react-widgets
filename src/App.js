import React, { useState } from "react";
import Header from "./components/Header";
import Route from "./components/Route";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import VideoMother from "./components/VideoMother";

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

const items = [
  {
    title: 'Thomas Edison was "the Wizard of Menlo Park" in what US state? ',
    content: "New Jersey",
  },
  {
    title: "What is the capital of Portugal? ",
    content: "Lisbon",
  },
  {
    title: "What movie did Michael J. Fox learn to skateboard for? ",
    content: "Back to the future",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select one"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/videos">
        <VideoMother />
      </Route>
    </div>
  );
};

export default App;
