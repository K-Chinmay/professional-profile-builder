

import React, { useState, useEffect } from "react";
import Router from "./components/Router/Router";
import LoadingScreen from "./components/Loader/LoadingScreen";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);
  return <>{loading === false ? <Router /> : <LoadingScreen />}</>;
};

export default App;


