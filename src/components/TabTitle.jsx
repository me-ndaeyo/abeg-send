import React from 'react'

export default function TabTitle({tab, setTab, tabTitle}) {
  return (
    <li
      className={
        tab === tabTitle
          ? "download-tab--title download-tab--title---active"
          : "download-tab--title"
      }
      onClick={() => setTab(tabTitle)}
    >
      {tabTitle}
    </li>
  );
}