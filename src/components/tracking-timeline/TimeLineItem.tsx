import { formatTime } from "../../helpers/formats";
import { TimeLineItemProps } from "./TimelineTypes";

export const TimeLineItem = ({ timestamp, state, msg }: TimeLineItemProps) => {
  return (
    <div
      className={`border border-light-gray mt-3 p-3 rounded-[4px] ${
        state && state?.length > 30 ? "w-full" : "w-fit"
      }`}
    >
      <h3 className="font-semibold text-gray-dark">{state}</h3>
      <div>
        <p>{formatTime(timestamp)}</p>
        {msg && <p className="text-gray-500">{msg}</p>}
      </div>
    </div>
  );
};
