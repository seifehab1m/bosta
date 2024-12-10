import { statusCode } from "./trackingStatus";
import { getTrackingDescription } from "./gettrackingDescription";
import { formatDate } from "./formats";
import TrackingIconSteps from "../components/tracking-steps/TrackingIconSteps";

export const getTrackingItems = (
  t: (key: string) => string,
  currentStatuscode: number,
  currentDescriptionDate: string,
  trackingCreationDate: string
) => {
  const items = [
    {
      title: t("pickedUp"),
      description: getTrackingDescription(
        currentStatuscode,
        statusCode.processing,
        currentDescriptionDate,
        trackingCreationDate
      ),
      icon: <TrackingIconSteps />,
    },
    {
      title: t("processing"),
      description: getTrackingDescription(
        currentStatuscode,
        statusCode.processing,
        currentDescriptionDate,
        trackingCreationDate
      ),
      icon: <TrackingIconSteps />,
    },
    {
      title: t("outForDelivery"),
      description:
        currentStatuscode === statusCode.outForDelivery &&
        formatDate(currentDescriptionDate),
      icon:
        currentStatuscode === statusCode.delivered ||
        currentStatuscode === statusCode.outForDelivery ? (
          <TrackingIconSteps />
        ) : (
          <TrackingIconSteps active={false} />
        ),
    },
    {
      title: t("delivered"),
      description: "",
      icon:
        currentStatuscode === statusCode.delivered ? (
          <TrackingIconSteps />
        ) : (
          <TrackingIconSteps active={false} />
        ),
    },
  ];
  return items;
};
