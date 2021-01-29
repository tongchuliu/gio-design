/* eslint-disable */
import React from 'react';
import classnames from 'classnames';
import { StepProps } from './interface';

const Step: React.FC<StepProps> = (props) => {
  const { status = 'wait', disabled = false, title, description, prefixCls, active, ...restProps } = props;

  const classNames = classnames(`${prefixCls}__item`, `${prefixCls}__item_${status}`, {
    [`${prefixCls}__item_active`]: active === true,
    [`${prefixCls}__item_disabled`]: disabled === true,
  });

  return <div className={classNames} {...restProps}></div>;
};

export default Step;
