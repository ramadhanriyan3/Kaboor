import Navbar from "@/components/navbar";
import StoreProvider from "@/provider/StoreProvider";
import React from "react";

const Layoutroot = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" w-full  h-full min-h-screen">
      <StoreProvider>
        <Navbar />
        {children}
      </StoreProvider>
    </div>
  );
};

export default Layoutroot;
