import React from "react";
import useJumboLayout from "@jumbo/hooks/useJumboLayout";
import layoutConfig from "./layoutConfig";
import Div from "@jumbo/shared/Div";
import JumboLayout from "@jumbo/components/JumboLayout";
import JumboLayoutProvider from "@jumbo/components/JumboLayout/JumboLayoutProvider";

const SoloPage = ({ children }) => {
  const { setJumboLayoutOptions } = useJumboLayout();

  React.useEffect(() => {
    setJumboLayoutOptions(layoutConfig);
  }, []);

  return (
    <JumboLayoutProvider>
      {children}
    </JumboLayoutProvider>
  );
};

export default SoloPage;
