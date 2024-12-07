import { ScrollArea, Title } from "@mantine/core";
import {useState} from "react";
import { Outlet } from "react-router-dom";

import styles from "~/components/business/business.module.css";
import classes from "~/components/navbar/navbar.module.css";

const data = [
  { link: '/individual/registration', label: 'Registration'  },
  { link: '/individual/duty', label: 'Duty Exemptions' },
  { link: '', label: 'Declaration Processing'},
  { link: '', label: 'Prohibited Items' },
  { link: '', label: 'Restricted Items' },
  { link: '', label: 'Postal Parcels' },
  { link: '', label: 'Customs Bond' },
];

export default function Individual() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
      <a
          className={classes.link}
          data-active={item.label === active || undefined}
          href={item.link}
          key={item.label}
          onClick={(event) => {
            event.preventDefault();
            setActive(item.label);
          }}
      >
        <span>{item.label}</span>
      </a>
  ));

  return (
    <div className={styles.layout}>
      <main className={styles.main}>
        <nav className={classes.navbar}>
          <div className={classes.header}>
            <Title order={3}>Individual</Title>
          </div>

          <ScrollArea className={classes.links}>
            <div className={classes.linksInner}>{links}</div>
          </ScrollArea>
        </nav>
        <div className={styles.content}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}
