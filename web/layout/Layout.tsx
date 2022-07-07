import './layout.scss'
import * as React from 'react'
import { stores } from '../state'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { Toasts } from './Toast'
import { Outlet } from 'react-router'

export const Layout: React.FC = () => {
  const user = stores.user()
  const mod = user.menu ? 'layout--expand' : ''
  const guestMod = user.loggedIn ? '' : 'full'

  return (
    <div>
      <div className={`layout ${mod}`}>
        <Header />

        <div className="layout__content">
          <Sidebar />
          <div className={`layout__container ${guestMod}`}>
            <Outlet />
          </div>
        </div>
      </div>
      <Toasts />
    </div>
  )
}
