import React from "react";
interface IProps {
  open: boolean;
  children: React.ReactNode;
  handleClose: () => void;
}
const Drawer = ({ open, children, handleClose }: IProps) => {
  return (
    <div
      className={`absolute top-0 right-0 h-full bg-neutral-500/[0.5] z-50 overflow-hidden ${
        open ? "min-w-full" : "min-w-0"
      } transition-all duration-75 ease-linear`}
      onClick={handleClose}
    >
      <div className="w-full h-full relative">
        <section
          className={`absolute top-0 right-0 h-full bg-white min-w-[10rem] translate-x-[${
            open ? "0%" : "200%"
          }] transition-all`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default Drawer;
