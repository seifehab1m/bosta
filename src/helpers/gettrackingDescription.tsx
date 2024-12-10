import { formatDate } from "./formats";
import { statusCode } from "./trackingStatus";

export const getTrackingDescription = (
  currentCode: number,
  itemCode: number,
  currentDescriptionDate: string,
  trackingCreationDate: string
): string => {
  switch (currentCode) {
    case statusCode.delivered:
      return "";
    case itemCode:
      return formatDate(currentDescriptionDate); // Format the description date
    default:
      return formatDate(trackingCreationDate); // Format the creation date
  }
};
