import { useToast } from "@chakra-ui/react";
import GlobalContext from "./GlobalContext";

const GlobalState = ({ children }) => {
  const toast = useToast();

  const showError = (message) => {
    toast({
      title: "Ops",
      description: message,
      status: "warning",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  const dataContext = {
    showError,
  };

  return (
    <GlobalContext.Provider value={dataContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
