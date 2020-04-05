import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';

import styles from '../Input/Input.module.scss';

interface Props {
  
  name?: string;

  
  onChange?: () => void;

  
  disabled?: boolean;

  
  fillWidth?: boolean;

  
  error?: boolean;

 
  className?: string;

  
  value?: string ;

  
  ref?: Ref<HTMLInputElement>;
}

const select: FC<Props> = forwardRef((props, ref) => {
  const { fillWidth, className, error, ...otherProps } = props;

  return (
    <select className={classNames(styles.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}>
        className={classNames(styles.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}
            <option value="Apple" >Apple</option>
            <option value="Banana" >Banana</option>
            <option value="Cranberry" >Cranberry</option>
    </select>
  );
});

export default select;
