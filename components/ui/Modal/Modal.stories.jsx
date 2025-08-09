import React, { useState } from 'react';
import Modal from './Modal';
import Button from '../Button/Button';

export default {
  title: 'Components/Modal',
  component: Modal,
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button label="Open Modal" onClick={() => setOpen(true)} />
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Hello Modal">
        <p>This is modal content</p>
      </Modal>
    </>
  );
};
