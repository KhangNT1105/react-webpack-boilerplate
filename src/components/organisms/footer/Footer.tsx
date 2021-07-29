import React, { useEffect, useMemo } from 'react'
import './Footer.scss'
import { IFooterLink } from './Footer.d'
import { FiFacebook } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Grid } from '@material-ui/core'
import Dropdown from 'components/atoms/dropdown/Dropdown'
import languages from 'dummyData/languages.json'
import { languageSelector } from 'store/selectors/app/appSelector'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from 'store/actions/app/appAction'
import facebook from 'assets/images/facebook.png'
import instagram from 'assets/images/instagram.png'
const Footer: React.FC = () => {
  let index = 0
  const { t, i18n } = useTranslation()
  const language = useSelector(languageSelector)
  const dispatch = useDispatch()
  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])
  const languageItems = useMemo(
    () => [
      {
        title: 'All languages',
        items: languages.map((item) => ({
          label: item.label,
          value: item.value,
        })),
      },
    ],
    []
  )
  const links = [
    {
      title: t('FOOTER/ABOUT_US'),
      to: '/',
    },
    {
      title: t('FOOTER/PRIVACY_POLICY'),
      to: '/',
    },
    {
      title: t('FOOTER/TERMS_AND_CONDITIONS'),
      to: '/',
    },
  ]
  const routes = [
    {
      title: t('FOOTER/CONTACT_US').toUpperCase(),
      to: '/',
    },
    {
      title: t('FOOTER/ABOUT_US').toUpperCase(),
      to: '/',
    },
    {
      title: t('FOOTER/FAQS').toUpperCase(),
      to: '/',
    },
    {
      title: <FiFacebook />,
      to: '/',
    },
    {
      title: <SiInstagram />,
      to: '/',
    },
  ]
  const routesMb = [
    {
      title: t('FOOTER/CONTACT_US').toUpperCase(),
      to: '/',
    },

    {
      title: t('FOOTER/FAQS').toUpperCase(),
      to: '/',
    },
  ]
  const renderLinks = (links: IFooterLink[], className = 'link') =>
    links.map((link) => {
      index++
      return (
        <div className={className} key={`link-${index}`}>
          <Link to={link.to}>{link.title}</Link>
        </div>
      )
    })
  const handleChange = (value: string) => {
    dispatch(changeLanguage(value))
  }
  return (
    <div className="footer">
      <div className="footer__wrapper container">
        <div className="footer__mb">
          <div className="footer__logo">Logo</div>
          <div className="footer__description">
            <p>{t('FOOTER/DESCRIPTION')}</p>
          </div>
          <div className="footer__routes">
            {renderLinks(routesMb, 'footer__routes__route')}
          </div>
          <div className="footer__social">
            <div className="footer__social__instagram">
              <img src={instagram} alt="instagram" />
            </div>
            <div className="footer__social__facebook">
              <img src={facebook} alt="facebook" />
            </div>
          </div>
          <div className="footer__links">{renderLinks(links)}</div>
          <div className="footer__copyright">
            <p>{t('FOOTER/COPY_RIGHT')}</p>
          </div>
          <div className="footer__language">
            <p>
              {t('FOOTER/LANGUAGE').toUpperCase()}:&nbsp;
              <Dropdown
                dropdownPosition="top left"
                items={languageItems}
                handleChange={handleChange}
                defaultValue={language || languageItems[0].items[0].value}
              />
            </p>
          </div>
        </div>
        <div className="footer__pc">
          <Grid container spacing={1} className="footer__pc__top">
            <Grid item xs={6}>
              <div className="footer__pc__info">
                <div className="footer__pc__logo">Logo</div>
                <div className="footer__pc__description">
                  <p>{t('FOOTER/DESCRIPTION')}</p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="footer__pc__routes">
                {renderLinks(routes, 'route')}
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="footer__pc__bottom">
            <Grid item xs={8}>
              <div className="footer__links">{renderLinks(links)}</div>
              <div className="footer__copyright">
                <p>{t('FOOTER/COPY_RIGHT')}</p>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div className="footer__pc__languages">
                <p>
                  {t('FOOTER/LANGUAGE')}:&nbsp;
                  <Dropdown
                    dropdownPosition="top left"
                    items={languageItems}
                    handleChange={handleChange}
                    defaultValue={language || languageItems[0].items[0].value}
                  />
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
export default Footer
