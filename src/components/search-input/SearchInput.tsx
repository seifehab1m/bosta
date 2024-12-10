import { GetProps, Input } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { getTrackingData } from "../../slices/trackingSlice";
import useParams from "../../helpers/useParams";
import tracker from "../../assets/images/tracker.png";
import { useTranslation } from "react-i18next";

export default function SearchInput() {
  const { t } = useTranslation();
  const dispatch = useDispatch<AppDispatch>();
  const { addParams, removeParams } = useParams();

  const { Search } = Input;
  type SearchProps = GetProps<typeof Input.Search>;
  const onSearch: SearchProps["onSearch"] = (value) => {
    if (!value) return removeParams("shipment-number");
    addParams({ "shipment-number": [value] });
    dispatch(getTrackingData(value));
  };

  return (
    <section className="bg-primary-bg py-2 relative">
      <div className="container flex flex-col items-center justify-center">
        <img src={tracker} alt="tracker" />
        <h1 className="text-5xl text-gray-dark font-semibold pb-16">
          {t("trackYourOrder")}
        </h1>
        <div className="custom-search md:absolute md:bottom-0 md:translate-y-1/2">
          <Search
            placeholder={t("trackingNo")}
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
    </section>
  );
}
