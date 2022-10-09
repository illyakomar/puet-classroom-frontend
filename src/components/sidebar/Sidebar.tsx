import {
  MenuOutlined,
  FileTextFilled,
  CloudFilled,
  StarFilled,
  SettingFilled,
} from '@ant-design/icons';
import { Layout } from 'antd';

import './Sidebar.scss';

import puetLogo from '../../assets/puetLogo.png';

const { Sider } = Layout;

const Sidebar = () => (
  <Sider breakpoint='md' collapsedWidth='0' className='sidebar' width={340}>
    <div className='sidebar__top'>
      <div className='sidebar__logo-image'>
        <img src={puetLogo} alt='logo' />
      </div>
      <span className='sidebar__logo-name'>Classroom</span>
    </div>
    <div className='sidebar__center'>
      <ul className='sidebar__center__nav-links'>
        <li>
          <a href='*'>
            <MenuOutlined className='sidebar__icon' />
            <span>Курси</span>
          </a>
        </li>
        <li>
          <a href='*'>
            <FileTextFilled className='sidebar__icon' />
            <span>Журанал оцінок</span>
          </a>
        </li>
        <li>
          <a href='*'>
            <CloudFilled className='sidebar__icon' />
            <span>Архів</span>
          </a>
        </li>
        <li>
          <a href='*'>
            <StarFilled className='sidebar__icon' />
            <span>Мої файли</span>
          </a>
        </li>
        <li>
          <a href='*'>
            <SettingFilled className='sidebar__icon' />
            <span>Налаштування</span>
          </a>
        </li>
      </ul>
    </div>
  </Sider>
);

export default Sidebar;
