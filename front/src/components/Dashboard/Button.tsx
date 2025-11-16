import { type ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  to?: string;
};

export function Button({ children, to, ...rest }: ButtonProps) {
  const navigate = useNavigate();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (rest.onClick) {
      rest.onClick(e); // mantém comportamento customizado, se existir
    }

    if (to) {
      navigate(to);
    }
  };
  return (
    <button
      type="button"
      {...rest}
      name="button"
      onClick={handleClick}
      className="mt-4 h-14 w-full cursor-pointer rounded-lg border-0 bg-[#A243D2] px-4 font-medium text-amber-50 duration-[2s] hover:bg-[#8138a5]"
    >
      {children}
    </button>
  );
}
