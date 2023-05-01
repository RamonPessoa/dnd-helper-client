interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

export default function Modal({ children, open, onClose }: ModalProps) {
  return open ? (
    <div
      className="bg-black bg-opacity-20 absolute left-0 h-screen w-screen flex"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="m-auto" onClick={(e)=> e.stopPropagation() }>{children}</div>
    </div>
  ) : null;
}
