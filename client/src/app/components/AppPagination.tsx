import { Box, Typography, Pagination } from '@mui/material';
import React from 'react';
import { MetaData } from '../models/pagination';

interface IProps {
  metaData: MetaData;
  onPageChange: (page: number) => void;
}

function AppPagination({ metaData, onPageChange }: IProps) {
  const { currentPage, totalCount, totalPages, pageSize } = metaData;
  const [pageNumber, setPageNumber] = React.useState(currentPage);

  function handlePageChange(page: number) {
    setPageNumber(page);
    onPageChange(page);
  }

  return (
    <Box display='flex' justifyContent='space-between' alignItems='center'>
      <Typography>
        Displaying {(currentPage - 1) * pageSize + 1}-{' '}
        {currentPage * pageSize > totalCount
          ? totalCount
          : currentPage * pageSize}{' '}
        of {totalCount} items
      </Typography>
      <Pagination
        color='primary'
        size='large'
        count={totalPages}
        page={pageNumber}
        onChange={(e, page) => handlePageChange(page)}
      />
    </Box>
  );
}

export default AppPagination;
