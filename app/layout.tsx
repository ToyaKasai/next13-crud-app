import { FC, ReactNode } from "react";

import "./globals.css";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>Next13 dashboard</title>
        <meta name="description" content="Next13 dashboard project" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
