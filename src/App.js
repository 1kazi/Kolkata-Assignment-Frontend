import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import "./style.css";

export default function App() {
  const options = [
    { label: "Australia", value: "Australia" , disabled: false },
    { label: "Canada", value: "Canada", disabled: false  },
    { label: "Germany", value: "Germany", disabled: false  },
    { label: "Belgium", value: "Belgium", disabled: false  },
    { label: "Colombia", value: "Colombia", disabled: false },
    {  label: "Bulgaria", value: "Bulgaria" , disabled: false },
    { label: "France", value: "France", disabled: false  },
    { label: "Argentina", value: "Argentina", disabled: false  },

  ];

  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Fruits</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={"Select"}
        isCreatable={true}
      />
    </div>
  );
}
