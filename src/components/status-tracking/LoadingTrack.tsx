import { Spin } from "antd";
import { useTranslation } from "react-i18next";

export default function LoadingTrack() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <Spin size="large" style={{ color: "var(--primary)" }} />
      <p className=" text-lg py-6 font-medium text-gray-500">
        {t("pleaseWait")}
      </p>
    </div>
  );
}
