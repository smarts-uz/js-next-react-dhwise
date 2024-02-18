import React from "react";

const sizeClasses = {
  txtManropeBold28: "font-bold font-manrope",
  txtManropeBold15: "font-bold font-manrope",
  txtManropeRegular14: "font-manrope font-normal",
  txtManropeMedium15Black90087: "font-manrope font-normal",
  txtManropeMedium15: "font-manrope font-normal",
  txtManropeBold13: "font-bold font-manrope",
  txtManropeMedium15WhiteA70087: "font-manrope font-normal",
  txtManropeBold56: "font-bold font-manrope",
  txtManropeBold40: "font-bold font-manrope",
  txtManropeMedium15WhiteA7009e: "font-manrope font-medium",
  txtManropeBold18: "font-bold font-manrope",
  txtManropeBold13Black90087: "font-bold font-manrope",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
