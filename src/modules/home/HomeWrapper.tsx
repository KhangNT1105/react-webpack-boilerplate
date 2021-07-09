import React from 'react'
import './HomeWrapper.scss'
import Button from 'components/atoms/button/Button'
import LogoWhite from 'components/atoms/logoWhite/LogoWhite'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { RoutesString } from 'routes/routesString'
const useStyles = makeStyles({
  button: {
    backgroundColor: '#fff !important',
    fontSize: '1.25rem',
    color: '#000',
    padding: '16px 0',
    borderRadius: 8,
    fontWeight: 500,
  },
})
const HomeWrapper = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__logo">
          <LogoWhite />
        </div>

        <div className="home__button">
          <Link to={RoutesString.Login}>
            <Button
              fullWidth={true}
              className={classes.button}
              variant="contained"
            >
              {t('HOME/GET_STARTED').toUpperCase()}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeWrapper
