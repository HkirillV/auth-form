import { PropsWithChildren } from "react";
import classNames from "classnames";

type IButton = PropsWithChildren<{
  type?: HTMLButtonElement["type"];
  href?: string;
  className?: string;
  target?: HTMLAnchorElement["target"];
  mode?: string;
  onClick?: () => void;
}>;

const Button = (props: IButton) => {
  const {
    type = "button",
    onClick,
    href,
    children,
    className = "",
    target,
    mode,
  } = props;

  const isLink = href !== undefined;
  const Component = isLink ? "a" : "button";
  const linkProps = { href, target };
  const buttonProps = { type };
  const specificProps = isLink ? linkProps : buttonProps;

  return (
    <Component
      className={classNames(className, {
        [`button--${mode}`]: mode,
      })}
      {...specificProps}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default Button;