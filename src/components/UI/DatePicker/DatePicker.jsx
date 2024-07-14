import { forwardRef } from 'react';

const DatePicker = forwardRef(({}, ref) => {
  return (
    <div class='relative max-w-sm'>
      <label className='text-sm font-medium text-gray-900'>DATE</label>
      <input
        ref={ref}
        datepicker
        type='date'
        class='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5'
        placeholder='Select date'
      />
    </div>
  );
});

export default DatePicker;
