import React from 'react'
import { Left } from '../_components/Left'
import NotificationsPage from './_components/NotificationsPage'

const Notifications = () => {
  return (
    <div className="flex ml-[200px] mt-6">
      <Left />
      <NotificationsPage />
    </div>
  )
}

export default Notifications