import Theme from './Theme';
import classBundle from '../../../../utils/classBundle';

export default function Button({
  text = 'click',
  type = 'full',
  CTA,
  color = 'info',
  size = 'sm',
}) {
  return (
    <button
      className={classBundle([
        Theme.base,
        Theme.type[type],
        Theme.type[type].color[color],
        Theme.size[size],
      ])}
      onClick={CTA}
    >
      {text}
    </button>
  );
}
