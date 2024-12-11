import { Button, Timeline } from "antd";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { TimeLineItem } from "./TimeLineItem";
import { TrackingEvent } from "./TimelineTypes";
import { formatDate } from "../../helpers/formats";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { groupByDate } from "./groupByDate";
import { DownOutlined } from "@ant-design/icons";
import { handleExportPDF } from "../../helpers/handlePdf";

export default function TrackingTimeline() {
  const { t } = useTranslation();
  const trackingData: TrackingEvent[] | undefined = useSelector(
    (state: RootState) => state?.tracking?.data?.TransitEvents
  );
  const [expanded, setExpanded] = useState(false);

  if (!trackingData) return null;

  const groupedEvents = groupByDate(trackingData);

  const items = Object.keys(groupedEvents).map((date) => ({
    children: (
      <div>
        <h2 className="font-semibold text-gray-dark">
          {formatDate(date, true)}
        </h2>
        {groupedEvents[date].map((event, index) => (
          <TimeLineItem
            key={index}
            timestamp={event?.timestamp}
            state={event?.state}
            msg={event?.msg}
            
          />
        ))}
      </div>
    ),
  }));

  const handleExpand = () => setExpanded((prev) => !prev);

  return (
    <div className="container relative">
      <div className="flex flex-wrap  items-center justify-between gap-3">
        <h2 className="text-[20px] pt-5 pb-7 text-gray-text">
          {t("TrackingDetails")}
        </h2>
        <Button onClick={() => handleExportPDF(trackingData)}>
          {t("exportPdf")}
        </Button>
      </div>
      <div
        className={`timeline-wrapper ${expanded ? "expanded" : ""}`}
        style={{ maxHeight: expanded ? "none" : "400px", overflow: "hidden" }}
      >
        <Timeline items={items}  />

        {!expanded && (
          <>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 via-60% to-transparent pointer-events-none z-10" />
            <div
              className="absolute bottom-0 left-1/2 z-20 flex items-center gap-2 cursor-pointer"
              onClick={handleExpand}
            >
              <h4 className="text-primary font-semibold">{t("more")}</h4>
              <DownOutlined
                className="animate-bounce"
                style={{ color: "var(--primary)", fontSize: "14px" }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
