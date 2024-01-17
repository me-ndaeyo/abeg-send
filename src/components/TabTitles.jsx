import React from 'react'
import TabTitle from './TabTitle';

export default function TabTitles({tab, setTab}) {
  const tabTitles = ['youtube', 'instagram', 'twitter', 'facebook'];

  const tabs = tabTitles.map((tabTitle) => (
    <TabTitle tab={tab} setTab={setTab} tabTitle={tabTitle}/>
  ));
  return (
    <ul className="download-tab--titles">
        {tabs}
    </ul>
  );
}
