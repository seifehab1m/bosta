import React, { useState, useEffect } from "react";
import { Select, Switch } from "antd";
import i18next from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { setLanguage } from "../../slices/languageSlice";
import logo from "../../assets/images/logo.png";
import logoEn from "../../assets/images/logoEn.png";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { lang } = useSelector((state: RootState) => state.language);

  const [darkMode, setDarkMode] = useState(false);

  // Handle language change
  const changeLanguage = (selectedLang: "en" | "ar") => {
    i18next.changeLanguage(selectedLang);
    document.body.setAttribute("dir", selectedLang === "ar" ? "rtl" : "ltr");
    dispatch(setLanguage(selectedLang));
  };

  // Toggle dark mode
  const toggleDarkMode = (checked: boolean) => {
    setDarkMode(checked);
    document.documentElement.setAttribute(
      "data-theme",
      checked ? "dark" : "light"
    );
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setDarkMode(savedTheme === "dark");
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <section className="bg-primary-bg navbar">
      <div className="container py-8 flex justify-between items-center">
        <img
          src={lang === "ar" ? logo : logoEn}
          alt="Bosta logo"
          className="h-8 animate-slideLeft"
        />

        <div className="flex items-center gap-4">
          <Select
            defaultValue={lang}
            style={{ width: 120 }}
            onChange={(value) => changeLanguage(value as "en" | "ar")}
            dropdownStyle={{ textAlign: lang === "ar" ? "right" : "left" }}
          >
            <Select.Option value="en">English</Select.Option>
            <Select.Option value="ar">عربي</Select.Option>
          </Select>

          <div className="flex items-center gap-2">
            <span>{darkMode ? "🌙" : "☀️"}</span>
            <Switch
              checked={darkMode}
              onChange={toggleDarkMode}
              checkedChildren="Dark"
              unCheckedChildren="Light"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
