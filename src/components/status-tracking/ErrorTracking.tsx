import { useTranslation } from "react-i18next";
import { WarningOutlined } from "@ant-design/icons";

export default function ErrorTracking() {
  const { t } = useTranslation();

  return (
    <div className="container w-full py-24  ">
      <div className="flex border border-red-700 items-start gap-3 bg-light-danger rounded-md max-w-[700px] w-full p-6 mx-auto mt-8">
        <WarningOutlined style={{ color: "red" }} />
        <p>{t("errorTracking")}</p>
      </div>
    </div>
  );
}
