import { Breadcrumbs, Typography } from '@material-ui/core'
import React from 'react'
import './Breadcrumb.scss'
import { Link } from 'react-router-dom'
import { IBreadcrumb, IBreadcrumbItem } from './Breadcrumb.d'
const Breadcrumb: React.FC<IBreadcrumb> = ({ items }) => {
  const renderItems: Function = (item: IBreadcrumbItem) =>
    item.items ? (
      <>
        <Link to={item.to || ''}>{item.title}</Link>
        <span className="splash"> / </span>
        {renderItems(item.items)}
      </>
    ) : (
      <Typography color="textPrimary">{item.title}</Typography>
    )
  return (
    <div className="breadcrumb" aria-label="breadcrumb">
      {renderItems(items)}
    </div>
  )
}
export default Breadcrumb
