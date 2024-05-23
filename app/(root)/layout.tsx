import React, { Children, ReactNode } from "react";

const rootlayout = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default rootlayout;
