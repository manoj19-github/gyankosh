"use client";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";
import SignupBatch from "./SignupBatch";
import SigninBatch from "./SigninBatch";
interface AuthFormProps {}
const AuthForm: FC<AuthFormProps> = (): JSX.Element => {
  const router = useRouter();
  const [isSigninPage, setIsSignPage] = useState<boolean>(true);
  return (
    <div
      className={`w-full h-full flex flex-row justify-between items-center p-0 m-0 relative shadow-lg  `}
    >
      <div
        className={`w-1/2 h-[100%] bgimage  p-0 m-0 transition-all duration-1000 ease-in-out   absolute  ${
          isSigninPage ? `lg:top-0 lg:left-0` : `lg:top-0 lg:right-0`
        }  `}
      >
        {isSigninPage ? (
          <SignupBatch setIsSignPage={setIsSignPage} />
        ) : (
          <SigninBatch setIsSignPage={setIsSignPage} />
        )}
        {/* <button onClick={() => setIsSignPage((prev) => !prev)}>click</button> */}
      </div>

      <div
        className={`w-1/2 h-[100%]  p-0 m-0 duration-1000 ease-in-out transition-all absolute  ${
          !isSigninPage ? `lg:top-0 lg:left-0` : `lg:top-0 lg:right-0`
        }  `}
      >
        <div className="w-full py-2">
          {isSigninPage ? <SigninForm /> : <SignupForm />}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
