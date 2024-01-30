import { ReactNode, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './InputModal.module.scss';
import { Modal } from '../ui-modal/Modal';
import { Input } from '../ui-input/Input';
import Button from '../ui-button/Button';

const cx = classNames.bind(styles);

type ModalContentProps = {
  children: ReactNode;
};

type ModalHeaderProps = {
  children: ReactNode;
  className?: string;
};

type ModalBodyProps = {
  children: ReactNode;
  className?: string;
};

type ModalFooterProps = {
  children: ReactNode;
  className?: string;
};

function ModalContent({ children, className }: ModalContentProps) {
  return <div className={className}>{children}</div>;
}

function ModalHeader({ children, className }: ModalHeaderProps) {
  return <h1 className={className}>{children}</h1>;
}

function ModalBody({ children, className }: ModalBodyProps) {
  return <div className={className}>{children}</div>;
}

function ModalFooter({ children, className }: ModalFooterProps) {
  return <div className={className}>{children}</div>;
}

export function InputModal() {
  const [value, setValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Modal isOpen={true}>
        <ModalContent>
          <ModalHeader className={cx('modal-header')}>모달제목</ModalHeader>
          <ModalBody className={cx('modal-body')}>
            <p>부제목</p>
            <Input
              type="text"
              value={value}
              onChange={handleChange}
              isModal={true}
              placeholder="codeit@codeit.com"
            />
          </ModalBody>
          <ModalFooter className={cx('modal-footer')}>
            <Button theme="secondary" size="modalMedium" onClick={() => {}}>
              취소
            </Button>
            <Button size="modalMedium" onClick={() => {}}>
              변경
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
