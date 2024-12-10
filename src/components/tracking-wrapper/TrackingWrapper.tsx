import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
// import TrackingSteps from "../tracking-steps/TrackingSteps";
import TrackingTimeline from "../tracking-timeline/TrackingTimeline";
import ErrorTracking from "../status-tracking/ErrorTracking";
import LoadingTrack from "../status-tracking/LoadingTrack";
import { statusCode } from "../../helpers/trackingStatus";
import CanceledTracking from "../status-tracking/CanceledTracking";
import { lazy, Suspense } from "react";

const TrackingSteps = lazy(() => import("../tracking-steps/TrackingSteps"));

export default function TrackingWrapper() {
  const trackingData = useSelector((state: RootState) => state?.tracking);
  const trackingCode = trackingData?.data?.CurrentStatus?.code;

  if (trackingData?.loading) {
    return <LoadingTrack />;
  }
  if (trackingData?.error) {
    return <ErrorTracking />;
  }
  if (trackingCode === statusCode.Canceled) {
    return <CanceledTracking />;
  }
  if (!trackingData?.data) {
    return;
  }
  return (
    <div className="py-16">
      <Suspense fallback={<LoadingTrack />}>
        <TrackingSteps />
      </Suspense>
      <TrackingTimeline />
    </div>
  );
}
