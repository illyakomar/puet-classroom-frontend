import { TeamOutlined, SettingOutlined, ReconciliationOutlined } from '@ant-design/icons';
import CourseStudents from '../../courseStudents/CourseStudents';
import SettingsCourse from '../../settingsCourse/SettingsCourse';

export const tabsItems = [
  {
    label: `Cтуденти`,
    key: '1',
    children: [<CourseStudents />],
    icon: <TeamOutlined />,
  },
  {
    label: 'Перевірка завдання',
    key: '2',
    children: [],
    icon: <ReconciliationOutlined />,
  },
  {
    label: `Налаштування`,
    key: '3',
    children: [<SettingsCourse />],
    icon: <SettingOutlined />,
  },
];
