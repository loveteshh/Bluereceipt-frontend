import React, { FC, forwardRef, Ref, useCallback, useState } from 'react';
import classNames from 'classnames';

import Label from '../Label/Label';
import styles from './Checkbox.module.scss';

interface Props {
  
  name?: string;

  
  label?: string;

 
  defaultValue?: boolean;

  
  disabled?: boolean;

  
  onChange?: (newChecked: boolean) => void;

  
  ref?: Ref<HTMLInputElement>;
}

const Checkbox: FC<Props> = forwardRef((props, ref) => {
  const { label, defaultValue, disabled, onChange, ...otherProps } = props;

  const [isChecked, setChecked] = useState(!!defaultValue);

  const check = useCallback(
    () => {
      const newValue = !isChecked;
      setChecked(newValue);

      if (onChange) {
        onChange(newValue);
      }
    },
    [isChecked, onChange],
  );

  return (
    <Label title={label || ''} disabled={disabled} position='right'>
      <span
        className={classNames(styles.checkmark, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
        })}
      >
        <div className={classNames(styles.checkmark, {
          [styles.checked]: isChecked,
          [styles.disabled]: disabled,
        })}
        />
      </span>
      <input
        type='checkbox'
        className={styles.input}
        ref={ref}
        checked={isChecked}
        disabled={disabled}
        onChange={check}
        {...otherProps}
      />
    </Label>
  );
});

export default Checkbox;
