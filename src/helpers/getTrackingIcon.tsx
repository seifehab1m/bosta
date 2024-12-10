import TrackingIconSteps from "../components/tracking-steps/TrackingIconSteps";

export const getIcon = (
  status: number,
  expectedStatus: number,
  isActive: boolean = true
) => {
  return status === expectedStatus ? (
    <TrackingIconSteps active={isActive} />
  ) : (
    <TrackingIconSteps active={false} />
  );
};
