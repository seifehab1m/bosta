export const currentStep = {
  // pickedUp: 0,
  processing: 1,
  outForDelivery: 2,
  delivered: 3,
  Canceled: 0,
};

export const statusCode = {
  // pickedUp: 1,
  processing: 24,
  outForDelivery: 41,
  delivered: 45,
  Canceled: 46,
};

type StatusCodeType = typeof statusCode;

export const getTrackingCurrentStep = (code: number) => {
  switch (code) {
    case statusCode.processing:
      return currentStep.processing;
    case statusCode.outForDelivery:
      return currentStep.outForDelivery;
    case statusCode.delivered:
      return currentStep.delivered;
    // case 46:
    //   return currentStep.delivered;
    default:
      return 0;
  }
};

export const getStatusKey = (value: number): keyof StatusCodeType | undefined => {
  return Object.keys(statusCode).find(
    (key) => statusCode[key as keyof StatusCodeType] === value
  ) as keyof StatusCodeType | undefined;
};
