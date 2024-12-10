import { ConfigProvider } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { BrowserRouter } from "react-router-dom";

export default function AntProvider({ children }: React.PropsWithChildren) {
  const { lang } = useSelector((state: RootState) => state.language);
  if (!lang) return null;
  return (
    <ConfigProvider direction={lang === "ar" ? "rtl" : "ltr"}>
      <BrowserRouter>{children}</BrowserRouter>
    </ConfigProvider>
  );
}
