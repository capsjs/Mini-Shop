export type TModal = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  width?: string;
};