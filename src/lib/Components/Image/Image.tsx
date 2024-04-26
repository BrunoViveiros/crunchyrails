import Image from "next/image";
import { ComponentProps } from "react";

const CImage = ({ alt, ...props }: ComponentProps<typeof Image>) => {
  return <Image alt={alt} {...props} />;
};

export { CImage as Image };
