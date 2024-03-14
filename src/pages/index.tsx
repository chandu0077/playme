import React from "react";
import { useBreakpoint } from "@chakra-ui/react";
import Intialupload from "@/components/Intialupload";

interface Props {}
const Home: React.FC<Props> = ({}) => {
  const breakpoint = useBreakpoint({ ssr: true });
  return (
    <>
      <Intialupload />
    </>
  );
};

export default Home;
