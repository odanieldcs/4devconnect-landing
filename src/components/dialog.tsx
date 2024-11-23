import { useEffect, useRef } from 'react';
import { Heading } from './heading';

type DialogProps = {
  title: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

function Dialog({ title, isOpen, setIsOpen, children }: DialogProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="bg-white rounded-lg transition mx-auto ease-out max-h-full shadow-xl max-w-screen-md w-full m-4 p-4 backdrop:bg-primary backdrop:opacity-80"
    >
      <div className="flex justify-end">
        <button
          className="px-4 py-2 bg-white text-primary rounded-lg"
          onClick={() => setIsOpen(false)}
          title="Fechar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <Heading level="h3" className="text-center my-2">
        {title}
      </Heading>
      <div className="w-full my-4 p-4 flex flex-col gap-4">{children}</div>
    </dialog>
  );
}

export { Dialog };
