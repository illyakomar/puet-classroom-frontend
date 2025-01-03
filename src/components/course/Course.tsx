import { UserOutlined } from '@ant-design/icons';

import hatIcon from '../../global/images/icons/hat.svg';
import test from '../../global/images/icons/Test.png';
import { CourseEntity, UserRoleEnum } from '../../common/types';
import { getUserShortName } from '../../common/helpers';
import { useAppSelector } from '../../hooks/reduxhooks';

import './Course.scss';

interface Props {
  data: CourseEntity;
  onClick: () => void;
}

const Course = (props: Props) => {
  const {
    onClick,
    data: { name, teacher, group, cover, color },
  } = props;

  const { user } = useAppSelector((state) => state.profileReducer);

  return (
    <div className='course-card__container' style={{ backgroundColor: color }} onClick={onClick}>
      <img src={hatIcon} className='icon-study' alt='icon' />
      <span className='title'>{name}</span>
      <div className='decription'>
        <span className='decription__icon'>
          <UserOutlined />
        </span>
        <span className='decription__name'>
          {user?.role === UserRoleEnum.STUDENT ? getUserShortName(teacher) : group?.name}
        </span>
      </div>
      <div className='course-card__image-container'>
        {cover.src ? (
          <img src={cover.src} alt='name' className='course-card__image' />
        ) : (
          <img src={test} alt='test' className='course-card__image' />
        )}
      </div>
    </div>
  );
};

export default Course;
