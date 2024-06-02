import { useState } from "react";
import LearnerList from "./components/LearnerList";

import {learners} from "./data/learners"
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Lab: Learners</h1>

      {/* <LearnerList learner={learnersState} /> */}
      < CreateLearner addLearner={addLearner} />
    </>
  );
}

export default App;
