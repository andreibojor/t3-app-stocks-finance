import { useMemo } from "react";

type PaginationProps = {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
};

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: PaginationProps) => {
  const paginationRange = useMemo(() => {
    // implementation will go here
    const totalPageCount = Math.ceil(totalCount / pageSize);
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};

export default usePagination;
