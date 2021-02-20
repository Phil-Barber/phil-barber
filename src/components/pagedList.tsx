import React, { useState } from 'react';
import styled from 'styled-components';

const PageButtons = styled.button`
  margin: 0px ${({ theme }) => theme.spacing.xxSmall};
`;

interface Props {
  children: React.ReactNode[];
  pageSize?: number;
}

export const PagedList: React.FC<Props> = ({
  children,
  pageSize = 10,
}: Props) => {
  const numPages = Math.ceil(children.length / pageSize);
  const [pageNum, setPageNum] = useState<number>(0);

  const start = pageSize * pageNum;
  return (
    <>
      {children.slice(start, start + pageSize)}
      <PageButtons
        disabled={pageNum === 0}
        onClick={() => setPageNum((num) => num - 1)}
      >
        Previous
      </PageButtons>
      {Array.from({ length: numPages }, (_, n) => (
        <PageButtons
          disabled={pageNum === n}
          key={n}
          onClick={() => setPageNum(n)}
        >
          {n + 1}
        </PageButtons>
      ))}
      <PageButtons
        disabled={pageNum === numPages - 1}
        onClick={() => setPageNum((num) => num + 1)}
      >
        Next
      </PageButtons>
    </>
  );
};
