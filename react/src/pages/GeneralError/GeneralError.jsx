import illustration from "@/assets/svg/undraw_not_found.svg";
import { useRouteError } from "react-router-dom";

const GeneralError = function () {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <div className="w-screen h-screen flex items-center justify-center dark:bg-black bg-mainColor">
      <div className="flex flex-col gap-1 items-center font-robotoCondensed">
        <img
          src={illustration}
          alt="not found"
          className="lg:max-h-[370px] xs:max-h-[270px] max-h-[180px] w-full"
        />
        <h3 className="sm:text-2xl xs:text-xl text-lg mt-2 text-gray-50 font-medium">
          Ohh! General error{" "}
        </h3>
        <p className="sm:text-[16.75px] text-[14px] text-gray-300 ">{error}</p>
      </div>
    </div>
  );
};

export default GeneralError;
