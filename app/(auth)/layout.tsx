import React, { ReactNode } from "react";

interface LoginLayoutProps {
  children: ReactNode;
}

const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="h-full flex items-center justify-center">{children}</div>
  );
};

export default LoginLayout;
