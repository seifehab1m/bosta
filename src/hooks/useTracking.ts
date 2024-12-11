import { memoize } from "lodash";
import { fetcher } from "../network/fetcher";

// Memoize the fetcher function for caching based on shipmentNumber
const memoizedFetcher = memoize(async (shipmentNumber: number | string) => {
  return await fetcher(`shipments/track/${shipmentNumber}`);
});

export const useTracking = async (shipmentNumber: number | string) => {
  // If the shipmentNumber has been fetched previously, use the cached result
  const trackingData = await memoizedFetcher(shipmentNumber);

  return trackingData;
};
