/* eslint-disable */
import React from 'react';
import usePrefixCls from '../../utils/hooks/use-prefix-cls';
import classnames from 'classnames';
import { StepsProps, Type, Size, StepsType, StepProps } from './interface';
import toArray from 'rc-util/lib/Children/toArray';
import { cloneElement } from '../../utils/reactNode';
import Step from './Step';

/**
 * 获取支持的最多步骤数
 * 页面和大弹窗最多支持 4 步，小弹窗和抽屉最多支持 2 步
 */
function getStepNumber(type: Type, size: Size) {
  switch (type) {
    case 'drawer':
      return 2;
    case 'modal':
      if (size === 'small') return 2;
      else if (size === 'large') return 4;
      else return 2;
    default:
      return 4;
  }
}

const Steps: StepsType = (props: StepsProps) => {
  const {
    current = 0,
    initial = 0,
    status = 'wait',
    type = 'page',
    size = 'small',
    className,
    onChange,
    prefixCls: customPrefixCls,
    ...restProps
  } = props;

  const prefixCls = usePrefixCls('steps', customPrefixCls);
  const classNames = classnames(prefixCls, `${prefixCls}-${type}`, `${prefixCls}-${type}-${size}`);

  const maxStepNumber = getStepNumber(type, size);

  if (type === 'page') {
  } else if (type === 'drawer') {
  } else if (type === 'modal') {
  }

  return (
    <div className={classNames} {...restProps}>
      {toArray(props.children).map((step, index) => {
        if (index >= maxStepNumber) return null;

        const stepProps: StepProps = {
          prefixCls,
          active: current === index,
          stepNumber: index,
          ...step.props,
        };

        if (!step.props.status) {
          if (index < current) {
            stepProps.status = 'finish';
          } else if (index === current) {
            stepProps.status = status;
          } else {
            stepProps.status = 'wait';
          }
        }

        return cloneElement(step, stepProps);
      })}
    </div>
  );
};

Steps.Step = Step;

export default Steps;
