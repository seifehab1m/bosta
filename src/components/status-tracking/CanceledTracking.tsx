import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { convertNumberToLocale } from "../../helpers/formats";

export default function CanceledTracking() {
  const { t } = useTranslation();
  const trackingData = useSelector((state: RootState) => state?.tracking);
  const trackingCode = trackingData?.data?.CurrentStatus?.code;

  return (
    <div className="container py-24">
      <div className=" border-2 border-light-gray p-4 rounded-md">
        <h2 className="text-[20px] font-semibold text-gray-text">
          {t("order")}
          <span> # {convertNumberToLocale(trackingCode)} </span>
        </h2>
        <p className="text-2xl text-gray-dark font-semibold">{t("canceled")}</p>
      </div>
    </div>
  );
}
