/* eslint-disable */
import { CommonProps } from '../../utils/type';

export type Status = 'finish' | 'wait' | 'process';
export type Type = 'page' | 'modal' | 'drawer';
export type Size = 'large' | 'small';
export interface StepsProps extends CommonProps {
  children?: React.ReactNode;

  /**
   * 当前步骤，从 0 开始计数
   * @default 0
   */
  current?: number;

  /**
   * 当前步骤的状态，可选 `finish`、`wait` 和 `process`
   * @default `wait`
   */
  status?: Status;

  /**
   * 前缀
   */
  prefixCls?: string;

  /**
   * 步骤条切换时触发
   * @param { number } current 切换成功后的 current
   */
  onChange?: (current: number) => void;

  /**
   * 使用场景，包括 `page`（页面）、`modal`（弹窗） 和 `drawer`（抽屉）
   * @page 最多支持 4 步操作
   * @modal 最多支持 2 ~ 4 步操作
   * @drawer 最多支持 2 步操作
   * @default `page`
   */
  type?: Type;

  /**
   * 当 type = `modal` 时有效，large 最多支持 4 步操作，small 最多支持 2 步操作
   * @default `small`
   */
  size?: Size;

  [propName: string]: any;
}

export interface StepProps {
  /**
   * 当前步骤的标题
   */
  title?: string;

  /**
   * 描述信息
   */
  description?: string;

  /**
   * 当前步骤的状态，可选 `finish`、`wait` 和 `process`
   * @default `wait`
   */
  status?: Status;

  /**
   * 当前步骤是否禁止点击
   * @default false
   */
  disabled?: boolean;

  /**
   * 前缀
   */
  prefixCls?: string;

  active?: boolean;

  stepNumber?: number;

  [propName: string]: any;
}

export interface StepsType extends React.FC<StepsProps> {
  Step: React.FC<StepProps>;
}
