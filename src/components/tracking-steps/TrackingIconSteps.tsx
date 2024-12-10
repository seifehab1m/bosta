import { CheckOutlined } from "@ant-design/icons";

export default function TrackingIconSteps({
  active = true,
}: {
  active?: boolean;
}) {
  const css = active
    ? "bg-primary flex justify-center items-center"
    : "bg-white  border-2 border-gray-300 flex justify-center items-center";
  return (
    <div className={`w-6 h-6 rounded-full  mt-1 ${css}`}>
      {active && <CheckOutlined style={{ fontSize: "14px", color: "white" }} />}
    </div>
  );
}
