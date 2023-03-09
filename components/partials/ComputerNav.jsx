import { FavoriteOutlined, LocationOnOutlined, RestoreOutlined } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction, Button } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import { Box } from '@mui/system'
import Link from 'next/link'
import React from 'react'
import main  from "../../config/navbarmenu.json"

export default function ComputerNav() {

  return (
    <div className="mx-10 lg:flex-row lg:block hidden flex-wrap">
      {main.menu.map(({name,path})=>
        <Link href={path} className="mx-4 p-2 text-lg" key={name}>
            <Button >{name}</Button>
          </Link>
      )}
        </div>


  ) 
}
