import { toast } from 'sonner';

export const showError = (msg) => {
  toast.error('Uh oh! Something went wrong.', {
    description: msg,
  });
};

export const showSuccess = (msg) => {
  const { toast } = useToast();
  toast.success('Success!', {
    description: msg,
  });
};
