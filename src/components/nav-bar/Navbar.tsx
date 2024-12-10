import React from "react";
import { Select } from "antd";
import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLanguage } from "../../slices/languageSlice";
import logo from "../../assets/images/logo.png";
import logoEn from "../../assets/images/logoEn.png";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { lang } = useSelector((state: RootState) => state.language);

  const changeLanguage = (lang: "en" | "ar") => {
    i18next.changeLanguage(lang);
    if (lang === "ar") {
      document.body.setAttribute("dir", "rtl");
      dispatch(setLanguage("ar"));
    } else {
      document.body.setAttribute("dir", "ltr");
      dispatch(setLanguage("en"));
    }
  };

  return (
    <section className="bg-primary-bg navbar">
      <div className="container py-8 flex justify-between">
        {lang === "ar" ? (
          <img src={logo} alt="bosta logo" />
        ) : (
          <img src={logoEn} alt="bosta logo" />
        )}
        <Select
          defaultValue="ar"
          style={{ width: 120 }}
          onChange={changeLanguage}
        >
          <Select.Option value="en">English</Select.Option>
          <Select.Option value="ar">عربي</Select.Option>
        </Select>
      </div>
    </section>
  );
};

export default Navbar;
