import { forwardRef } from 'react';
import Theme from './Theme';
import classBundle from '../../../../utils/classBundle';

const TextInput = forwardRef(({ label, size }, ref) => {
  return (
    <>
      <label className={Theme.label}>{label}</label>
      <input
        className={classBundle([Theme.input, Theme.size[size]])}
        htmlFor={label}
        type='text'
        ref={ref}
      />
    </>
  );
});

export default TextInput;
