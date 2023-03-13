import Image from 'next/image';
import React from 'react';


const Aboutme = () => {
  
  return (
    <React.Fragment>
     <div className="flex justify-center">
    <div className="max-w-3xl">
      <div
        className="m-4 block rounded-lg bg-white p-6 shadow-xl">
        <div className="md:flex md:flex-row">
          <div
            className="mx-auto mb-6 flex w-36 items-center justify-center md:mx-0 md:w-96 lg:mb-0">
            <Image
            quality={10}
            width={500} 
            height={500}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP._7jjxcm6qd1eqnVxNFQLygHaGN%26pid%3DApi&f=1&ipt=cda8baffa3b28765a69fb374e2624c95dd0be86643fcd8c7d112adaf30aaec2c&ipo=images"
              className="rounded-full shadow-md dark:shadow-black/30"
              alt="man avatar" />
          </div>
          <div className="md:ml-6">
            <p
              className="mb-6 text-black ">
              {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              quam sapiente molestiae numquam quas, voluptates omnis nulla
              ea odio quia similique corrupti magnam.`}
            </p>
            <p
              className="mb-2 text-xl font-semibold text-neutral-800 ">
             Abhishek Gupta
            </p>
            <p
              className="mb-0 font-semibold text-neutral-700">
              Product manager
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </React.Fragment>
  );
};
export default Aboutme;