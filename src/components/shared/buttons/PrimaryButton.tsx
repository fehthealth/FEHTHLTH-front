import Image from "next/image";

export interface PrimaryButtonIprops {
  type?: "button" | "submit" | "reset";
  color?: string;
  height?: string;
  bgColor?: string;
  paddingX?: string;
  borderColor?: string;
  text?: string;
  fontSize?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: any;
  frontIcon?: any;
  disabledColor?: string;
  rounded?: string;
}

const PrimaryButton = ({
  type,
  color,
  bgColor,
  height,
  paddingX,
  text,
  fontSize,
  borderColor,
  loading,
  onClick,
  icon,
  frontIcon,
  disabled,
  disabledColor,
  rounded,
}: PrimaryButtonIprops) => {
  return (
    <button
      type={type || "button"}
      className={`w-full ${height ? height : "h-[48px]"} ${
        paddingX ? paddingX : "px-6"
      }  py-3 ${bgColor} ${color} ${
        fontSize ? fontSize : "text-base"
      }  border-[1px] ${borderColor} ${
        rounded ? rounded : "rounded-[12px]"
      }  justify-center items-center inline-flex text-center  font-semibold ${disabledColor}`}
      onClick={onClick}
      disabled={loading || disabled}
    >
      {/* {loading ? (
        <Image
          className="animate-spin w-6 h-6 duration-200 ease-linear"
          src="/assets/icons/auth/loader.svg"
          alt={"loader"}
          width={20}
          height={20}
        />
      ) : ( */}
      <div className="flex items-center gap-1">
        {icon && icon}
        {text && text}
        {frontIcon && frontIcon}
      </div>
      {/* )} */}
    </button>
  );
};

export default PrimaryButton;
