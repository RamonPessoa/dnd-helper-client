interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
  return open ? (
    <div
      className="bg-black bg-opacity-20 absolute h-screen w-screen flex"
      onClick={onClose}
    >
      <div className="m-auto">{children}</div>
    </div>
  ) : null;
}
