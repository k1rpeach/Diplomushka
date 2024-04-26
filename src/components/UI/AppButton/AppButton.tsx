type AppButtonProps = {
  buttonText: string;
  className: string;
  type: "button" | "submit" | "reset"
};

export const AppButton = ({ buttonText, type }: AppButtonProps) => {
  return <button type={type}>{buttonText}</button>;
};
