import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMS",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
