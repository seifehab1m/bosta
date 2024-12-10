import { useTranslation } from "react-i18next";
import { convertNumberToLocale, formatDate } from "../../helpers/formats";
import { getStatusKey } from "../../helpers/trackingStatus";
import { TrackingState } from "../../slices/trackingSlice";

export default function TrackingCard({
  trackingData,
  trackingcurrentDate,
  trackingCode,
}: {
  trackingData: TrackingState;
  trackingcurrentDate: string;
  trackingCode: number;
}) {
  const { t } = useTranslation();

  return (
    <div className="tracking-data p-4">
      <h2 className="text-[12px] font-semibold text-gray-text">
        {t("order")}
        <span>
          {" "}
          # {convertNumberToLocale(trackingData?.data?.TrackingNumber)}{" "}
        </span>
      </h2>
      {getStatusKey(trackingCode) && (
        <p className="text-2xl text-gray-dark font-semibold">
          {t("ArrivingBy")}:{" "}
          <span className="text-primary">
            {formatDate(trackingcurrentDate)}
          </span>
        </p>
      )}
      <h2 className="text-sm pt-1 font-semibold text-gray-text">
        {t("OrderIs")}{" "}
        <span>{t(getStatusKey(trackingCode) ?? "unKnownStatus")}</span>
      </h2>
    </div>
  );
}
