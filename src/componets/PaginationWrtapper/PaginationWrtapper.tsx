import type { IpaginationProps } from "../../interface";
import Pagination from "../Pagination/Pagination";

interface Props {
  children: React.ReactNode;
  top?: boolean;
  bottom?: boolean;
}

export default function PaginationWrtapper({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IpaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
