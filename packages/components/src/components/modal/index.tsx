import GioModal from './Modal';
import StepModal from './StepModal';
import callout, { withConfirm, withInfo, withSuccess, withWarn, withError } from './callout';
import useModal from './useModal';
import { IModalStaticFuncConfig, IModalStaticFunctions, IUseModal } from './interface';

export {
  IModalProps as ModalProps,
  IStepModalProps as StepModalProps,
  TModalSize as ModalSize,
  IStep as Step,
  TStepChange as StepChange,
  IModalStaticFuncConfig as ModalStaticFuncConfig,
  IModalStaticFuncReturn as ModalStaticFuncReturn,
  TModalStaticFuncType as ModalStaticFuncType,
  IModalStaticFunc as ModalStaticFunc,
} from './interface';

export { StepModal, useModal };

export type TModal = typeof GioModal & IModalStaticFunctions & { useModal: IUseModal };

const Modal = GioModal as TModal;

Modal.confirm = (config: IModalStaticFuncConfig) => callout(withConfirm(config));

Modal.info = (config: IModalStaticFuncConfig) => callout(withInfo(config));

Modal.success = (config: IModalStaticFuncConfig) => callout(withSuccess(config));

Modal.warn = (config: IModalStaticFuncConfig) => callout(withWarn(config));

Modal.error = (config: IModalStaticFuncConfig) => callout(withError(config));

Modal.useModal = useModal;

export default Modal;
