import React, { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return <div className="bg-indigo-500 h-full">{children}</div>;
};

export default LoginLayout;
