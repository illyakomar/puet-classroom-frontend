import { UserOutlined } from '@ant-design/icons';
import { Progress } from 'antd';
import { String2HexCodeColor } from 'string-to-hex-code-color';

import './Course.scss';
import hatIcon from '../../global/images/icons/hat.svg';
import { CourseEntity, UserRoleEnum } from '../../common/types';
import { getUserShortName } from '../../common/helpers';
import { useAppSelector } from '../../hooks/reduxhooks';

interface Props {
  data: CourseEntity;
  onClick: () => void;
}

const colorCard = new String2HexCodeColor(0.75);
const colorProgress = new String2HexCodeColor(0.4);

const Course = (props: Props) => {
  const {
    onClick,
    data: { name, teacher, group },
  } = props;

  const { user } = useAppSelector((state) => state.authReducer);

  return (
    <div
      className='course-card__container'
      style={{ backgroundColor: colorCard.stringToColor(name) }}
      onClick={onClick}
    >
      <img src={hatIcon} className='icon-study' alt='icon' />
      <span className='title'>{name}</span>
      <div className='decription'>
        <span className='decription__icon'>
          <UserOutlined />
        </span>
        <span className='decription__name'>
          {user?.role == UserRoleEnum.STUDENT ? getUserShortName(teacher) : group}
        </span>
      </div>
      <div className='progress-container'>
        <Progress
          strokeColor={colorProgress.stringToColor(name)}
          trailColor='rgba(255, 255, 255, 0.54)'
          type='circle'
          percent={40}
        />
      </div>
    </div>
  );
};

export default Course;
