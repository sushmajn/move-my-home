import React from 'react';
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import QuoteIcon from '@mui/icons-material/Description';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/my-moves" className="sidebar-link"><LocalShippingIcon /> <strong>MY MOVES</strong></Link>
      <Link to="/my-profile" className="sidebar-link"><PersonIcon /> <strong>MY PROFILE</strong></Link>
      <Link to="/get-quote" className="sidebar-link"><QuoteIcon /> <strong>GET QUOTE</strong></Link>
      <Link to="/logout" className="sidebar-link"><ExitToAppIcon /> <strong>LOGOUT</strong></Link>
    </div>
  );
}

export default Sidebar;
