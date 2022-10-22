interface DefaultButtonProps {
  children: any;
  onClick: () => void;
}
const Button = (props: DefaultButtonProps) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
