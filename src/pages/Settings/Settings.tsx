import { Layout } from 'antd';

import './Settings.scss';

import HeaderPage from '../../components/header/HeaderPage';
import SettingsProfile from '../../components/settingsProfile/SettingsProfile';

const Settings = () => (
  <Layout>
    <HeaderPage />
    <div className='settings-page'>
      <SettingsProfile />
    </div>
  </Layout>
);

export default Settings;