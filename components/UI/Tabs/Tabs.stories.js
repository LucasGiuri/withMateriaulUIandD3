import React from 'react';
import { storiesOf } from '@storybook/react';
import Tabs from './Tabs';

storiesOf('Tabs')
  .add('Tabs default', () => (
    <Tabs  />
  ))

  .add('Tabs second tab is selected', () => (
    <Tabs tabSelected={2} />
  ))