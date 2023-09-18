import React from 'react'
import { ContextMenu, ContextMenuTrigger, MenuItem } from 'react-contextmenu'

const PopupEvent = () => {
    const divCss = { width: "300px", height: "300px", border: "black solid 3px" };
  return (
    <div>
        <ContextMenuTrigger id='cm'holdToDisplay={10}>
         <div style={divCss}>PopupEvent</div>

    </ContextMenuTrigger>
    <ContextMenu id='cm'>
    <MenuItem><a href='https://www.naver.com'>naver</a></MenuItem>
    <MenuItem>메뉴2</MenuItem>
    <MenuItem>메뉴3</MenuItem>
    </ContextMenu>
    

    </div>
   
  )
}

export default PopupEvent

//yarn add react-contextmenu