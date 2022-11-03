import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white px-10">
      <div className="border-black-20 mx-auto flex h-20 max-w-4xl items-center border-b">
        <p className="text-2xl font-bold">N13BLOG</p>
      </div>
    </header>
  );
};

export default Header;
