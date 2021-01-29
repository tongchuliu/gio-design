/* eslint-disable */
import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Steps, { StepsProps, Step } from '.';
import './style';

export default {
  title: 'Components/Basic/Steps',
  component: Steps,
} as Meta;

const args: StepsProps = {};

const Template: Story<StepsProps> = (args) => (
  <Steps {...args}>
    {new Array(6).fill(0).map((_child, index) => {
      return (
        <Step key={index}>
          {index} - {Date.now()}
        </Step>
      );
    })}
  </Steps>
);
export const Default = Template.bind({});

Default.args = args;
