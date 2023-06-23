import React from "react";

const List = ({ list }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-8 lg:gap-10 gap-4 items-center justify-center">
      {list.length > 0 ? (
        <>
          {list.map((data) => {
            return (
              <div
                key={data.id}
                className="flex flex-col gap-2 items-center justify-center"
              >
                <div className="relative rounded-3xl w-[300px] h-[300px] border-black border-[2px] p-6">
                  <p className="absolute -right-3 -top-3 bg-black/90 border-black border-[3px] text-gray-300 rounded-full w-[40px] h-[40px] flex items-center justify-center ">
                    {data.id}
                  </p>
                  <div className="m-auto flex items-center justify-center">
                    <img
                      src={data.avatar}
                      alt="avatar"
                      className="rounded-3xl h-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium text-gray-600 md:text-xl">
                    {data.first_name}
                  </p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p className="text-xl md::text-3xl text-gray-500 font-semibold">
          No employees found :(
        </p>
      )}
    </div>
  );
};

export default List;
