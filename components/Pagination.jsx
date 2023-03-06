import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import {useRouter } from "next/router";

export default function PaginationModal({noOfPageForPagination,currentPage}) {
  const router = useRouter()
  const handleChange = (event, value) => {
    // console.log(router)
    router.push(`blog?page=${value}`,undefined,{shallow:false})
  };
  return (
    <Stack spacing={6}>
      <div className="flex w-11/12 m-auto p-4 justify-center">
        <Pagination count={noOfPageForPagination} onChange={handleChange} shape="rounded" page={Number(currentPage)} size="large"/>
      </div>
    </Stack>
  );
};
