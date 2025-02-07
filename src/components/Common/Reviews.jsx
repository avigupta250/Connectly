import { reviews } from "@/src/Constant";

export default function Reviews() {
  return (
    <section className="">
     
     <div  className="w-[90%]  mx-auto mt-[50px]">
        <div className=" w-[50%] font-semibold  text-center mx-auto md:leading-[45px] text-[40px]">
          <h1>
            See why thousands of agencies, sellers, freelances and{" "}
            <span>teams love Connectly</span>
          </h1>
        </div>

        {/* review container */}
        <div className=" flex flex-wrap gap-10 mt-[40px] justify-center ">
          {reviews.map((review, index) => (
            <div className="p-5 w-[300px] shadow-lg rounded-md bg-white">
              <div className="flex gap-2">
                <div className="w-[50px] ">
                  <img className="rounded-full object-cover" src={review.image} alt="user" />
                </div>
                <div>
                  <h1 className="font-bold">{review.name}</h1>
                  <h2>{review.profile}</h2>
                </div>
              </div>

              <div className="mt-5">
                <p>{review.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}
