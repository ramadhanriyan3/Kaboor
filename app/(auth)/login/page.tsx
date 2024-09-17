import FormRegister from "@/components/formRegister";
import React from "react";

const LoginPage = () => {
  return (
    <main className="relative bg-[url(/kaboorBg.jpg)] bg-cover min-h-screen w-full h-full">
      <div className="absolute flex items-center justify-center bg-gradient-to-t from-primary-blue-bright/30 to-primary-violet-bright/30 w-full h-full">
        <div className="bg-white min-h-80 max-w-md w-full p-5 mx-4 flex items-center flex-col rounded-xl">
          <h1 className="heading-2 gradient-text">Login to kaboor</h1>
          <FormRegister />
          <div className="flex justify-between items-center w-full mt-5">
            <hr className="h-[1px] w-4/12 bg-primary-violet-default" />
            <p className="text-xs text-primary-violet-bright">or login with</p>
            <hr className="h-[1px]  w-4/12 bg-primary-violet-default" />
          </div>
          <div className="w-full flex items-center justify-center gap-x-5"></div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
