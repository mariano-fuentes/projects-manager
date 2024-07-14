import { useRef } from 'react';
import TextInput from '../UI/TextInput/TextInput';
import DatePicker from '../UI/DatePicker/DatePicker';
import Button from '../UI/Button/Button';
import proyectManager from '../../utils/projectManager';
import BackButton from '../UI/BackButton/BackButton';
import Theme from './Theme';

const ProjectForm = ({ reloadProjects, backControl }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateRef = useRef(null);

  const resetFields = () => {
    titleRef.current.value = '';
    descriptionRef.current.value = '';
    dateRef.current.value = '';
  };

  const submitForm = () => {
    proyectManager.create(
      titleRef.current.value,
      descriptionRef.current.value,
      dateRef.current.value
    );
    resetFields();
    reloadProjects();
    backControl();
  };

  const cancelForm = () => {
    resetFields();
  };

  return (
    <div
      id='form-panel'
      className={Theme.base}
    >
      <div
        id='button-line '
        className={Theme.buttonLine}
      >
        <BackButton CTA={backControl} />
        <div
          id='ctrl-button-group'
          className={Theme.controlButtonGroup}
        >
          <div>
            <Button
              text='Cancel'
              type='full'
              color='warning'
              size='md'
              CTA={cancelForm}
            />
          </div>
          <div>
            <Button
              text='Save'
              type='full'
              color='info'
              size='md'
              CTA={submitForm}
            />
          </div>
        </div>
      </div>
      <div
        id='input-controls'
        className={Theme.inputControls}
      >
        <TextInput
          label='TITLE'
          ref={titleRef}
        />
        <TextInput
          label='DESCRIPTION'
          size='xl'
          ref={descriptionRef}
        />
        <DatePicker ref={dateRef} />
      </div>
    </div>
  );
};

export default ProjectForm;
