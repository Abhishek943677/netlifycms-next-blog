import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {useRouter } from "next/router";

export default function PaginationModal({noOfPageForPagination,currentPage}) {
  const router = useRouter();
  const handleChange = (event, value) => {
    // router.push(`blog?page=${value}`);
    window.location.href = `blog?page=${value}`
  };
  
  return (
    <Stack spacing={2}>
      <div className="flex  m-auto py-4 justify-center">
        <Pagination count={noOfPageForPagination} onChange={handleChange} shape="rounded" page={Number(currentPage)} size="medium"/>
      </div>
    </Stack>
  );
};
