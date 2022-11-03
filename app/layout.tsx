import { FC, ReactNode } from "react";

import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>N13BLOG</title>
        <meta name="description" content="Next13 Blog Project" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
};

export default RootLayout;
