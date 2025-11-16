interface ContainerProps {
  isFocused: boolean;
  children: React.ReactNode;
}
export function Container({ isFocused, children }: ContainerProps) {
  return (
    <div
      className={`mt-2 flex h-14 flex-1 items-center justify-center rounded-lg border-2 bg-[#232129] p-4 text-zinc-300 ${
        isFocused
          ? "border-violet-500 ring-2 ring-violet-600"
          : "border-[#232129]"
      }`}
    >
      {children}
    </div>
  );
}
