import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
};

export const Default = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Password = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
  },
};
