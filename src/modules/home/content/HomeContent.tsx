import { makeStyles, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './HomeContent.scss'
import HomeEvents from './events/HomeEvents'
import HomeRewards from './rewards/HomeRewards'

const useStyles = makeStyles({
  indicator: {
    bottom: 15,
    backgroundColor: '#E21936',
  },
  tabTitle: {
    fontSize: '1rem',
    // padding: '6px 0 6px 0px ',
    // margin: '0 12px',
    minWidth: 51,
    minHeight: 0,
  },
  tabTitleSelected: {
    fontWeight: 600,
    color: '#000 !important',
  },
  tabRoot: {},
})

const HomeContent: React.FC = () => {
  const [value, setValue] = useState(0)
  const { t } = useTranslation()
  const classes = useStyles()
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  const tabs = [t('HOME/EVENTS').toUpperCase(), t('HOME/REWARDS').toUpperCase()]
  const renderTabs = (tabs: string[]) =>
    tabs.map((tab) => (
      <Tab
        classes={{ root: classes.tabTitle, selected: classes.tabTitleSelected }}
        label={tab}
      />
    ))
  const renderContent = (index: number) => {
    switch (index) {
      case 0:
        return <HomeEvents />
      case 1:
        return <HomeRewards />
    }
  }
  return (
    <div className="homeContent">
      <div className="homeContent__wrapper">
        <div className="homeContent__tabs">
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            centered={true}
            classes={{ indicator: classes.indicator }}
          >
            {renderTabs(tabs)}
          </Tabs>
        </div>
        <div className="homeContent__content">{renderContent(value)}</div>
      </div>
    </div>
  )
}
export default HomeContent
