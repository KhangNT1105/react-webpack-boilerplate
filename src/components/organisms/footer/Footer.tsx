import React from 'react'
import './Footer.scss'
import { IFooterLink } from './Footer.d'
import { FiFacebook } from 'react-icons/fi'
import { SiInstagram } from 'react-icons/si'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
const Footer: React.FC = () => {
  const { t } = useTranslation()
  const links = [
    {
      title: t('FOOTER/SITE_MAP'),
      to: '/',
    },
    {
      title: t('FOOTER/DATA_PROTECTION_POLICY'),
      to: '/',
    },
    {
      title: t('FOOTER/TERMS_AND_CONDITIONS'),
      to: '/',
    },
  ]
  const renderLinks = (links: IFooterLink[]) =>
    links.map((link) => (
      <div className="link">
        <Link to={link.to}>{link.title}</Link>
      </div>
    ))
  return (
    <div className="footer">
      <div className="footer__wrapper container">
        <div className="footer__description">
          <p>{t('FOOTER/DESCRIPTION')}</p>
        </div>
        <div className="footer__social">
          <div className="footer__social__facebook">
            <FiFacebook />
          </div>
          <div className="footer__social__instagram">
            <SiInstagram />
          </div>
        </div>
        <div className="footer__links">{renderLinks(links)}</div>
        <div className="footer__copyright">
          <p>{t('FOOTER/COPY_RIGHT')}</p>
        </div>
      </div>
    </div>
  )
}
export default Footer
