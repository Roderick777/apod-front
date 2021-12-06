import React from 'react'
import './Footer.scss'

interface Props {}

export const Footer = (props: Props) => {
  return (
    <div className="footer">
      <div className="footer-card">
        Correo de contacto: &nbsp;<b>apod.network@gmail.com</b>
      </div>
    </div>
  )
}
