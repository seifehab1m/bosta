export interface TrackingEvent {
    timestamp: string;
    state: string;
    code?: number;
    msg?: string;
    exceptionCode?: string;
  }
  export interface TimeLineItemProps {
    timestamp: string;
    state: string;
    msg?: string;
  }  