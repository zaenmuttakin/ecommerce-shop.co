import { socialLinks, footerNav, payments } from "../../constants/pagesData";
import Button from "../Elements/Button";
import InputField from "../Elements/InputField/InputField";
import Ln from "../Elements/Line";
import Logo from "../Elements/Logo";

const Footer = () => {
  return (
    <footer className="relative bg-gray-20 mt-52">
      <div className="main-container absolute -translate-y-[50%] inset-x-0">
        <div className="flex flex-col xl:flex-row gap-8 bg-black-100 px-6 py-8 xl:px-16 xl:py-10 rounded-2xl justify-between  ">
          <h2 className="text-white w-full xl:w-1/2">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div className="flex flex-col gap-3 w-full xl:w-1/2 items-end">
            <InputField
              icon="ic-mail"
              alignIcon="left"
              styles="w-full xl:w-2/3"
              placeholder="Enter your mail address"
            />
            <Button
              type="white"
              label="subscribe to newsletter"
              styles="w-full xl:w-2/3"
              icon="ic-arrow -rotate-45"
            />
          </div>
        </div>
      </div>
      {/* --------------------------------- */}

      <div className="main-container flex flex-col xl:flex-row gap-4 gap-y-10 pt-52 mb-20 justify-between">
        <div className="w-full xl:w-1/6 flex flex-col gap-5">
          <Logo />
          <p className="tx-2 text-black-60">
            We have clothes that suits your style and which you're proud to
            wear. From women to men.
          </p>
          <div className="social">
            <ul className="flex gap-3">
              {socialLinks.map((link, i) => (
                <li
                  key={i}
                  className="border border-black-20 rounded-full p-2 h-10 w-10 bg-white hover:bg-black-100 group smooth flex justify-center items-center"
                >
                  <i
                    className={`text-[20px] ${link.icon} group-hover:text-white smooth`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full xl:w-4/6 flex flex-wrap gap-y-12 justify-between">
          {footerNav.map((nav, i) => {
            return (
              <div key={i} className="w-1/2 xl:w-fit ">
                <p className="tx-2 font-bold uppercase mb-5">{nav.name}</p>
                <ul className="tx-2 flex flex-col gap-3 text-black-60">
                  {nav.subMenus.map((subMenu, i) => (
                    <li key={i} className="link smooth cursor-pointer">
                      {subMenu.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <Ln />

      <div className="main-container flex flex-col xl:flex-row justify-center xl:justify-between items-start gap-3 pt-4 pb-12">
        <p className="tx-2 text-black-60 text-center w-full xl:w-fit">
          Shop.co © 2000-2023, All Rights Reserved
        </p>
        <div className="flex justify-center xl:justify-end w-full xl:w-fit">
          {payments.map((payment, i) => (
            <img key={i} src={payment.img} alt={payment.name} className="cursor-pointer hover:-translate-y-1 smooth"/>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
