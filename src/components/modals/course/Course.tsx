import { Button, Input, Modal, Select, Upload } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

import './Course.scss';

import { useAppDispatch } from '../../../hooks/reduxhooks';
import { group } from './constants';
import { courseSchema } from './schemas';
import { CourseSchemaType } from './type';
import { SagaAction } from '../../../common/types';
import { showSuccessMessage } from '../../../common/helpers';
import TextArea from 'antd/lib/input/TextArea';
import { useState } from 'react';

interface IProps {
  onStart: boolean;
  handleClose: () => void;
}

const CourseModal = (props: IProps) => {
  const [loading, setLoading] = useState(false);
  const { onStart, handleClose } = props;
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CourseSchemaType>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(courseSchema),
  });

  const dispatch = useAppDispatch();

  const handleCourseSubmit = (data: CourseSchemaType) => {
    dispatch({ type: SagaAction.COURSE_CREATE, payload: data });
    handleClose();
    showSuccessMessage('Курс успішно додано!');
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Modal centered open={onStart} onCancel={handleClose} footer={null} width={630}>
      <div className='course-modal'>
        <div className='course-modal__title-container'>Додати курс</div>
        <form className='course-modal__form-container' onSubmit={handleSubmit(handleCourseSubmit)}>
          <div className='course-modal__input-container'>
            <label htmlFor='name'>
              Назва курсу
              <Controller
                control={control}
                name='name'
                render={({ field: { onBlur, onChange, value } }) => (
                  <Input
                    size='large'
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    disabled={isSubmitting}
                  />
                )}
              />
            </label>
            {errors.name && <p className='form-error-label'>{errors.name.message}</p>}
          </div>
          <div className='course-modal__select-container'>
            <label htmlFor='group'>
              <Controller
                control={control}
                name='group'
                render={({ field: { onBlur, onChange, value } }) => (
                  <Select
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    disabled={isSubmitting}
                    showSearch
                    optionFilterProp='children'
                    size='large'
                    className='course-modal__select'
                    placeholder='Введіть назву групи'
                    filterOption={(input: string, option: any) =>
                      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                    }
                    options={group}
                  />
                )}
              />
            </label>
            {errors.group && <p className='form-error-label'>{errors.group.message}</p>}
          </div>
          <div className='course-modal__area-container'>
            <label htmlFor='description'>
              <Controller
                control={control}
                name='description'
                render={({ field: { onBlur, onChange, value } }) => (
                  <TextArea
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    className='course-modal__area'
                    placeholder='Опис курсу'
                    showCount
                    rows={3}
                    maxLength={360}
                  />
                )}
              />
            </label>
            {errors.description && <p className='form-error-label'>{errors.description.message}</p>}
          </div>
          <div className='course-modal__image-container'>
            <div>Оформлення</div>
            <Upload
              name='avatar'
              listType='picture-card'
              className='course-modal__upload'
              showUploadList={false}
            >
              {uploadButton}
            </Upload>
          </div>
          <div className='course-modal__button-container'>
            <Button
              shape='round'
              type='primary'
              htmlType='submit'
              className='course-modal__button button'
            >
              Створити
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CourseModal;
