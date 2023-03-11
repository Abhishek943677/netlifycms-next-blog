import { Button } from "@mui/material";
import { Box } from "@mui/system";
import ShareIcon from '@mui/icons-material/Share';
import React from "react";
import Image from "next/image";

export default function Products() {
  const product = [
    { name: "ytd" },
    { name: "ytd" },
    { name: "ytd" },
    { name: "ytd" },
    { name: "ytd" },
    { name: "ytd" },
    { name: "ytd" },
    { name: "ytd" },
  ];
  return (
    <div>
      <p className="m-auto text-center text-2xl">Products</p>
      <Box className="flex flex-row flex-wrap lg:w-3/4 sm:w-fit sm:m-0 m-auto">
        {product.map((p, i) => (
          <div className="flex justify-center flex-col m-auto sm:m-auto max-[419px]:mx-6" data-aos="zoom-in-up"
          data-aos-duration="500" key={i}>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 my-4 mx-auto w-96">
              <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                <Image width={500}   height={500}
                  className="rounded-t-lg m-auto sm:mx-auto"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                  alt=""
                />
              </a>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  {p.name}
                </h5>
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                  {`Some quick example text to build on the card title and make up
                  the bulk of the card's content.`}
                </p>
                <Button
                  type="button"
                  // className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                  className=" bg-slate-400"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <ShareIcon />
                </Button>
              </div>
            </div>
        </div>
        ))}
      </Box>
    </div>
  );
}
