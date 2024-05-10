"use client";

import { useEffect, useRef } from "react";
import Button from "../shared/Button";
import { createPortal } from "react-dom";

interface ConfirmationDialogProps {
  closeModal: () => void;
}

export default function ConfirmationDialog({
  closeModal,
}: ConfirmationDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeOnEscapePress = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    closeButtonRef.current?.focus();

    window.addEventListener("keydown", closeOnEscapePress);
    return () => {
      window.removeEventListener("keydown", closeOnEscapePress);
    };
  }, [closeModal]);

  return createPortal(
    <div
      className="fixed z-50  grid h-screen w-full place-content-center bg-neutral-800 bg-opacity-50"
      role="alertdialog"
      aria-modal
    >
      <div className="grid content-center gap-y-2 rounded-lg bg-white p-4 text-center md:gap-y-4 md:p-6 lg:gap-y-6 lg:p-8">
        <p className="text-xl font-bold tracking-wide">
          Thank you for reaching out!
        </p>
        <p>We will get in touch as soon as possible.</p>
        <Button
          theme="primary"
          onClick={() => closeModal()}
          ref={closeButtonRef}
        >
          Got it
        </Button>
      </div>
    </div>,
    document.body,
  );
}
