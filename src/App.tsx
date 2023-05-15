import React from "react";
import "./App.scss";
import Form from "./components/Form/Form";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

import { useAppSelector } from "./redux/hooks";

function App() {
  const error = useAppSelector((state) => state.form.error);
  console.log(error);
  return (
    <div className="App">
      <Form />
      {error.length > 0 && <ErrorMessage errorArray={error} />}
    </div>
  );
}

export default App;
