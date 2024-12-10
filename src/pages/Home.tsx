import { useSearchParams } from "react-router-dom";
import SearchInput from "../components/search-input/SearchInput";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTrackingData } from "../slices/trackingSlice";
import TrackingWrapper from "../components/tracking-wrapper/TrackingWrapper";

export default function Home() {
  const { lang } = useSelector((state: RootState) => state.language);
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("shipment-number");

  useEffect(() => {
    if (paramValue) {
      dispatch(getTrackingData(paramValue ?? lang));
    }
  }, [paramValue, dispatch, lang]);

  return (
    <div className="bg-white min-h-screen h-full">
      <SearchInput />
      <TrackingWrapper />
    </div>
  );
}
