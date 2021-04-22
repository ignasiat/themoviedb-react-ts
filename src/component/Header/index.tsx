import React from 'react'
import Home from '@material-ui/icons/HomeOutlined'
import { Link } from 'react-router-dom'
import logo from '../../assets/tmbd.svg'
import './index.scss'

const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="The movie database"></img>
      <Link to="/"><Home className="icon"/></Link>
    </header>
  )
}

export default Header
