import React, { FC, forwardRef, Ref } from 'react';
import classNames from 'classnames';

import styles from './MultipleSelectBox.module.scss';
import styles1 from './MultipleSelectBoxMember.module.scss';

interface Props {
  
  type?: 'select';

  name?: string;

  placeholder?: string;

  onChange?: () => void;

  disabled?: boolean;

  fillWidth?: boolean;

  error?: boolean;

  className?: string;

  value?: string[] ;

  ref?: Ref<HTMLInputElement>;
}

const Input: FC<Props> = forwardRef((props, ref) => {
  const { fillWidth, className, error, ...otherProps } = props;

  return (
    <select multiple = {true} className={classNames(styles.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}>
        
            <option value="Apple" className={classNames(styles1.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}>Apple</option>
            <option value="Banana" className={classNames(styles1.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}>Banana</option>
            <option value="Cranberry" className={classNames(styles1.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}>Cranberry</option>
            <option value="Mango" className={classNames(styles1.input, className, { [styles.fillWidth]: fillWidth, [styles.error]: error })}>Mango</option>
    </select>
  );
});

export default Input;
