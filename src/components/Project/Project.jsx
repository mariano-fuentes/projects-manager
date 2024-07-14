import { useState } from 'react';
import TextInput from '../UI/TextInput/TextInput';
import Button from '../UI/Button/Button';
import Theme from './Theme';

const Project = ({ title, description, date }) => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditToggle = () => {
    setIsEditMode((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={Theme.base}>
      <div className={Theme.infoBody}>
        <div className={Theme.headerContainer}>
          <p className={Theme.infoHeader}>Title</p>
          {isEditMode && (
            <div>
              <TextInput size='lg' />
              <Button
                text='save'
                color='info'
                size='xs'
              />
            </div>
          )}
          {!isEditMode && (
            <p
              className={Theme.infoText}
              onDoubleClick={handleEditToggle}
            >
              {title}
            </p>
          )}
        </div>
        <div className={Theme.headerContainer}>
          <p className={Theme.infoHeader}>Description</p>
          <p className={Theme.infoText}>{description}</p>
        </div>
        <div className={Theme.headerContainer}>
          <p className={Theme.infoHeader}>Date</p>
          <p className={Theme.infoText}>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Project;
