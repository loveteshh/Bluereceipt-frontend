import React from 'react';
import { action } from '@storybook/addon-actions';

import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const normal = () => (
  <Checkbox onChange={action('changed')} />
);

export const checked = () => (
  <Checkbox defaultValue onChange={action('changed')} />
);

export const withLabel = () => (
  <Checkbox label='Status' onChange={action('changed')} />
);

export const disabledNormal = () => (
  <Checkbox disabled />
);

export const disabledChecked = () => (
  <Checkbox defaultValue disabled />
);

export const disabledWithLabel = () => (
  <Checkbox label='Status' defaultValue disabled />
);
