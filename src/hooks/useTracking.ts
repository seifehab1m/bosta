import { fetcher } from "../network/fetcher";

export const useTracking = async (shipmentNumber: number|string) => {
  const trackingData = await fetcher(`shipments/track/${shipmentNumber}`);
  return trackingData;
};
