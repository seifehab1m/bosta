import { TrackingEvent } from "../components/tracking-timeline/TimelineTypes";

export const handleExportPDF = async (
  trackingData: TrackingEvent[] | undefined
) => {
  if (!trackingData) return;
  // Dynamically import jsPDF only when the function is triggered
  const jsPDF = (await import("jspdf")).jsPDF;
  const { fontbase64 } = await import("./fontBase64");

  const doc = new jsPDF();
  doc.addFileToVFS("amiri-regular.ttf", fontbase64); // Use your Base64 string
  doc.addFont("amiri-regular.ttf", "Amiri", "normal");

  doc.setFont("Amiri");
  doc.setFontSize(16);
  doc.text("Shipment Tracking Details", 20, 20);

  doc.setFontSize(12);
  if (trackingData) {
    // doc.text(`Shipment Number: `, 20, 40);
    trackingData.forEach((event, index) => {
      doc.text(`${event?.state} `, 20, 50 + index * 10);
    });
  }

  doc.save("shipment-details.pdf");
};
