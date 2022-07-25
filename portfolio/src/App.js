import image from './assets/bg4.jpg'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'react-pro-sidebar/dist/css/styles.css';
import PageTransition from 'react-router-page-transition';
import { FaHome, FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';

import AboutMe from './Pages/Aboutme';
import Homepage from './Pages/Homepage';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import $ from 'jquery';
import Popper from 'popper.js';

function App() {

  return (
    <Router>
      <div className="App">
        <PageTransition>
          <Routes>
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/" element={<Homepage />} />
          </Routes>
        </PageTransition>
      </div>
      <ProSidebar
        image={image}
      >
        <SidebarHeader>
          <div
            style={{
              padding: '24px',
              textTransform: 'uppercase',
              fontWeight: 'bold',
              fontSize: 14,
              letterSpacing: '1px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
            Kyle Pancamo
          </div>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red"></span>}
            >
              <Link to="/aboutme">About Me</Link>
            </MenuItem>
            <MenuItem
              icon={<FaHome />}
              suffix={<span className="badge red"></span>}
            >
              <Link to="/">Home Page</Link>
            </MenuItem>
            <MenuItem icon={<FaGem />}> components</MenuItem>
            <MenuItem icon={<FaGithub />}>
              <a href="https://github.com/">
                Projects
              </a>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <a href='#'>
            <i className='fa fa-linkedin'>LinkedIn</i>
          </a>
        </SidebarFooter>
      </ProSidebar>


    </Router>


  );
}

export default App;
