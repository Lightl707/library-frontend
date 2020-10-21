import React, { useState } from 'react'
import Link from 'next/link'

const Layout = ({ children }) => {
  const [isActive, setActive] = useState(false)

  return (
    <div className="layout">
      <div className="layout__side">
        {links.map(item => (
          <Link key={item.path} href={item.path}>
            <a className="layout__side-item">
              <span
                className="layout__side-icon"
                dangerouslySetInnerHTML={{
                  __html: item.icon,
                }}
              />
            </a>
          </Link>
        ))}
        <a className="layout__side-item">
          <span
            className="layout__side-icon"
            dangerouslySetInnerHTML={{
              __html: searchIcon,
            }}
            onClick={() => setActive(!isActive)}
          />
        </a>
      </div>
      <div className="layout__inner">
        <Search isActive={isActive} />
        {children}
      </div>
    </div>
  )
}

export default Layout
