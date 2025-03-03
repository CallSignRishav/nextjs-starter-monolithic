import { LayoutProps } from "@/lib/types";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          enableSystem={false}
          defaultTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
