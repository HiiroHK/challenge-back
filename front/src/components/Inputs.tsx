import React, { useCallback, useEffect } from "react";
import { type IconBaseProps } from "react-icons";
import { useState } from "react";
import { Container } from "./Container";
import { IMaskInput, type IMaskInputProps } from "react-imask";

type InputProps = IMaskInputProps<HTMLInputElement> & {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
};

export function Input({ icon: Icon, value, onChange, ...rest }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(value ?? "");
  useEffect(() => {
    setInputValue(value ?? "");
  }, [value]);
  /*As duas funções abaixo servem para dar foco no input quando ele for clicado
Elas serao chamadas quando o input for clicado e devido ao useCallback não serão carregadas
toda vez que a pagina for recarregada
*/
  const hanbleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const isActive = isFocused || !!inputValue;
  return (
    <Container isFocused={isFocused}>
      {Icon && (
        <Icon
          size={20}
          color={isActive ? "#A243D2" : "oklch(87.1% 0.006 286.286)"}
          className="m-4"
        />
      )}
      <IMaskInput
        {...rest}
        onChange={(e) => {
          setInputValue((e.target as HTMLInputElement).value);
          onChange?.(e);
        }}
        className="flex-1 border-0 bg-transparent outline-0"
        onFocus={hanbleInputFocus}
        onBlur={handleInputBlur}
      />
    </Container>
  );
}
