import { Button } from "@/components/ui/button";
import React, { Dispatch, FC, SetStateAction } from "react";

interface SigninBatchProps {
  setIsSignPage: Dispatch<SetStateAction<boolean>>;
}
const SigninBatch: FC<SigninBatchProps> = ({ setIsSignPage }): JSX.Element => {
  return (
    <div className="w-full h-full my-5 flex flex-col items-center justify-center  ">
      <div className="bg-[rgba(0,0,0,0.5)] w-[90%] mx-auto flex flex-col items-center justify-center py-4 ">
        <div className="w-[80%]">
          <h1 className=" text-white mt-10 text-4xl font-bold text-center">
            Welcome Back !
          </h1>
          <div className="  lg:my-5 text-white text-md  py-3 font-bold  ">
            To keep connected with us please login with your personal info
          </div>
          <Button
            onClick={() => setIsSignPage((prev) => !prev)}
            className="mt-4 text-[#E1A149] hover:border-2 transition-all duration-200 ease-in rounded-md border border-[#E1A149] w-full my-4 mx-auto text-white text-lg"
          >
            Sign in
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SigninBatch;
