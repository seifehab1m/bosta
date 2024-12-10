import { Steps } from "antd";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { getTrackingItems } from "../../helpers/trackingItems";
import {
  getStatusKey,
  getTrackingCurrentStep,
} from "../../helpers/trackingStatus";
import TrackingCard from "./TrackingCard";

export default function TrackingSteps() {
  const { t } = useTranslation();
  const trackingData = useSelector((state: RootState) => state?.tracking);
  const trackingCode = trackingData?.data?.CurrentStatus?.code;
  const trackingcurrentDate = trackingData?.data?.CurrentStatus?.timestamp;
  const trackingCreationDate = trackingData?.data?.CreateDate;

  return (
    <div className="mt-2 container">
      <div className="border-2 border-[#E4E7EC] rounded-lg shadow-sm">
        <TrackingCard
          trackingData={trackingData}
          trackingcurrentDate={trackingcurrentDate}
          trackingCode={trackingCode}
        />
        <div className="line" />
        <div className="overflow-hidden max-w-[800px] w-full mx-auto py-4 sm:py-7 px-4 ">
          {getStatusKey(trackingCode) && (
            <Steps
              current={getTrackingCurrentStep(trackingCode)}
              labelPlacement="vertical"
              items={getTrackingItems(
                t,
                trackingCode,
                trackingcurrentDate,
                trackingCreationDate
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
