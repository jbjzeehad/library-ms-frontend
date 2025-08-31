import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  type: "success" | "error" | "info";
  onClose: () => void;
};

export default function Toast({ message, type, onClose }: ToastProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  }[type];

  if (!visible) return null;

  return (
    <div
      className={`fixed top-4 right-4 ${bgColor} text-white px-4 py-2 rounded shadow-lg`}
    >
      {message}
    </div>
  );
}
