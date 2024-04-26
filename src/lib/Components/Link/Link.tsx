import Link from "next/link";
import { ComponentProps } from "react";

const CLink = ({ href, children, ...props }: ComponentProps<typeof Link>) => {
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export { CLink as Link };
