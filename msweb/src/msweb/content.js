import React from 'react'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <table id='siteContent'>
        <tr>
            <td align='center'>
            <Outlet></Outlet>

            </td>
        </tr>
    </table>
  )
}

export default Content