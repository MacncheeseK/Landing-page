import { star } from "../assets/icons";

const ReviewCard = ({imgURL, customerName, rating, feedback}) => {
  return (
    <div className="flex flex-1 flex-col justify-center items-center ">
      <img
        src={imgURL}
        alt="customerName"
        width={170}
        height={170}
        className=" rounded-full"
      />
      <div className="flex mt-8">
        <p className=" text-center mt-4 max-w-sm info-text  ">{feedback}</p>
      </div>
      <div className="mt-2 flex flex-1 justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="info-text font-montserrat text-xl leading-normal">
          ({rating})
        </p>
      </div>
      <h2 className=" mt-4 text-2xl font-montserrat font-bold">
        {customerName}
      </h2>
    </div>
  );
};
export default ReviewCard;
