import { AppShell, rem } from "@mantine/core";
import React, { useEffect, useState } from "react";

import classes from "~/components/AppShell/appshell.module.css";
import { Footer } from "~/components/Footer/footer";
import { HeaderTabs } from "~/components/Header/header";

export function Layout({ children }: { children: React.ReactNode }) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // More precise bottom detection
      const scrolledToBottom =
        windowHeight + currentScrollY >= documentHeight - 50;

      // Update state only if scrolledToBottom changes
      if (scrolledToBottom !== isAtBottom) {
        setIsAtBottom(scrolledToBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAtBottom]);

  return (
    <AppShell
      header={{ height: 80, offset: false }}
      footer={{
        height: 500,
        collapsed: !isAtBottom,
        offset: false,
      }}
      padding="md"
      className={classes.main}
    >
      <AppShell.Header className={classes.header}>
        <HeaderTabs />
      </AppShell.Header>

      <AppShell.Main
        pt={`calc(${rem(60)} + var(--mantine-spacing-md))`}
        className="overflow-hidden"
        color={"#F6F6F6"}
      >
        {children}
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
}
