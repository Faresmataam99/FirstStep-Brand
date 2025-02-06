"use client";

import Filter from "../../components/Filter";
import ShopNav from "../../components/ShopNav";
import Shopping from "../../components/Shopping";


export default () => {
  return (
    <>
    <div className="max-w-screen-xl m-auto px-4">
        <ShopNav/>
      <div className="flex justify-between gap-6 ">
        <Filter/>
        <div className="flex-grow ">
        <Shopping/>
        </div>
      </div>
    </div>
    </>
  );
};
