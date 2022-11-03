import { FC, ReactNode } from "react";
import Header from "../../components/common/header/Header";

type BlogsLayoutProps = {
  children: ReactNode;
};

const BlogsLayout: FC<BlogsLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mt-20 min-h-screen w-full">{children}</main>
    </>
  );
};

export default BlogsLayout;
