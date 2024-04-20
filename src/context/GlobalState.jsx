import GlobalContext from "./GlobalContext";
import { useState } from "react";

const GlobalState = ({ children }) => {
  const [triggerLoad, setTriggerLoad] = useState(0);
  const [posts, setPosts] = useState([]);
  const dataContext = {
    posts,
    setPosts,
    triggerLoad,
    setTriggerLoad,
  };
  return (
    <GlobalContext.Provider value={dataContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
