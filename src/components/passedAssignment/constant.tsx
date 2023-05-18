import { ColumnsType } from 'antd/lib/table';

import { getFullDate, getStatusMark, getUserFullName, getUserIcon } from '../../common/helpers';
import { CoursePassedAssignmentEntity } from '../../common/types';

export const passedAssignmentColumns: ColumnsType<CoursePassedAssignmentEntity> = [
  {
    dataIndex: 'title',
    title: 'П.І.Б',
    key: 'title',
    width: '45%',
    render: (_, record) => (
      <div className='passed-name-container'>
        <span>{getUserIcon(record?.participant?.user)}</span>
        <span className='table__title'>{getUserFullName(record?.participant?.user)}</span>
      </div>
    ),
  },
  {
    dataIndex: 'createdAt',
    title: 'Дата здачі',
    key: 'createdAt',
    width: '20%',
    render: (createdAt) => <span className='table__info'>{getFullDate(createdAt)}</span>,
  },
  {
    dataIndex: 'mark',
    title: 'Оцінка',
    key: 'mark',
    width: '15%',
    render: (mark) => <span className='table__info'>{mark === null ? 0 : mark} / 100</span>,
  },
  {
    dataIndex: 'staus',
    title: 'Статус',
    key: 'status',
    width: '20%',
    render: (_, record) => <span className='table__info'>{getStatusMark(record.mark)}</span>,
  },
];
