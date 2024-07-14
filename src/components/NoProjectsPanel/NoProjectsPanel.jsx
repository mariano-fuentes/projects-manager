import Theme from './Theme';
import ClipboardSVG from '../../assets/ClipboardSVG';
import classBundle from '../../../utils/classBundle';
import Button from '../UI/Button/Button';

export default function NoProjectsPanel({ handleAddProject }) {
  return (
    <div
      className={Theme.base}
      id='no-projects-panel'
    >
      <div className={classBundle([Theme.item])}>
        <ClipboardSVG
          height='150px'
          width='150px'
        />
      </div>
      <div className={classBundle([Theme.item, Theme.description])}>
        No Projects Selected
      </div>
      <div className={classBundle([Theme.item, Theme.button])}>
        <Button
          text='Create New Project'
          CTA={handleAddProject}
          type='full'
          color='info'
          size='xl'
        />
      </div>
    </div>
  );
}
