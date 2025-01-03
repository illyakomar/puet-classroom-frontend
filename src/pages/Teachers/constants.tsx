import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { UserEntity, getFullDate, getUserFullName, showConfirm } from '../../common';

export const columnsTeachers = [
  {
    title: 'П.І.Б',
    dataIndex: 'fullName',
    width: '15%',
    render: (_: any, record: UserEntity) => <span>{getUserFullName(record)}</span>,
  },
  {
    title: 'Пошта',
    dataIndex: 'email',
    width: '10%',
    render: (email: string) => <span>{email}</span>,
  },
  {
    title: 'Номер телефону',
    dataIndex: 'phoneNumber',
    width: '10%',
    render: (phoneNumber: string) => <span>{phoneNumber}</span>,
  },
  {
    title: 'Дата створення',
    dataIndex: 'createdAt',
    key: 'createdAt',
    width: '10%',
    render: (createdAt: Date) => <span>{getFullDate(createdAt)}</span>,
  },
  {
    title: 'Дата зміни',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    width: '10%',
    render: (updatedAt: Date) => <span>{getFullDate(updatedAt)}</span>,
  },
  {
    title: 'Дії',
    key: 'delete',
    width: '3%',
    dataIndex: 'actionsTeachers',
    render: ({
      updateTeachers,
      deleteTeachers,
    }: {
      updateTeachers: () => void;
      deleteTeachers: () => void;
    }) => (
      <div className='table__icon--container'>
        <EditOutlined className='table__icon' onClick={updateTeachers} />
        <DeleteOutlined
          className='table__icon'
          onClick={() => showConfirm('видалити викладача', deleteTeachers)}
        />
      </div>
    ),
  },
];
