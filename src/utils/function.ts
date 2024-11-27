import { toast } from "react-toastify";

interface Props {
  message: string;
  type: "success" | "error" | "info" | "warning";
}

export const handlePopUp = (message: string, type: Props["type"]) => {
  switch (type) {
    case "success":
      return toast.success(message, {
        position: "top-center",
        theme: "colored",
        hideProgressBar: true,
      });
    case "error":
      return toast.error(message, {
        position: "top-center",
        theme: "colored",
        hideProgressBar: true,
      });
    case "info":
      return toast.info(message, {
        position: "top-center",
        theme: "colored",
        hideProgressBar: true,
      });
    case "warning":
      return toast.warning(message, {
        position: "top-center",
        theme: "colored",
        hideProgressBar: true,
      });
    default:
      return toast(message, {
        position: "top-center",
        theme: "colored",
        hideProgressBar: true,
      });
  }
};
