import React, { FC, ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen   flex flex-col items-center justify-center">
      <div className="lg:w-2/3 lg:h-[80%]  mx-auto p-0 m-0">{children}</div>
    </div>
  );
};

export default AuthLayout;
