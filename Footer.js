# Travel-tourism-and-hospitality
import React,{Component} from 'react'
import { Home, Instagram } from '@material-ui/icons';
const Footer = () => {
  return (
    <footer className='footer'>
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Suggestion Box</button>
        </li>
      </ul>
      <ul>
        <li>
          <button>Privacy Policy</button>
        </li>
        <li>
        <button>Give Away</button>
          {/* <Instagram/>
          <p>www.instagram.com</p> */}
        </li>
      </ul>
    </footer>
  )
}

export default Footer
