import React, { useState } from "react";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { useSelector, useDispatch } from "react-redux";

import { Modal } from "react-bootstrap";

import Flags from "country-flag-icons/react/3x2";

import { changeCountry } from "../redux/actions/countryActions";

const CountryModal = ({ show, setShow }) => {
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const handleClick = (c, cn) => {
    dispatch(changeCountry({ country: c, country_name: cn }));
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} className="text-center">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 6 }}>
          <Masonry>
            <span onClick={() => handleClick("ar", "Argentina")}>
              <Flags.AR className="nav-flag" />
            </span>

            <span onClick={() => handleClick("au", "Australia")}>
              <Flags.AU className="nav-flag" />
            </span>

            <span onClick={() => handleClick("at", "Austria")}>
              <Flags.AT className="nav-flag" />
            </span>

            <span onClick={() => handleClick("be", "Belgium")}>
              <Flags.BE className="nav-flag" />
            </span>

            <span onClick={() => handleClick("br", "Brazil")}>
              <Flags.BR className="nav-flag" />
            </span>

            <span onClick={() => handleClick("bg", "Bulgaria")}>
              <Flags.BG className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ca", "Canada")}>
              <Flags.CA className="nav-flag" />
            </span>

            <span onClick={() => handleClick("cn", "China")}>
              <Flags.CN className="nav-flag" />
            </span>

            <span onClick={() => handleClick("co", "Colombia")}>
              <Flags.CO className="nav-flag" />
            </span>

            <span onClick={() => handleClick("cu", "Cuba")}>
              <Flags.CU className="nav-flag" />
            </span>

            <span onClick={() => handleClick("cz", "Czech Republic")}>
              <Flags.CZ className="nav-flag" />
            </span>

            <span onClick={() => handleClick("eg", "Egypt")}>
              <Flags.EG className="nav-flag" />
            </span>

            <span onClick={() => handleClick("fr", "France")}>
              <Flags.FR className="nav-flag" />
            </span>

            <span onClick={() => handleClick("de", "Germany")}>
              <Flags.DE className="nav-flag" />
            </span>

            <span onClick={() => handleClick("gr", "Greece")}>
              <Flags.GR className="nav-flag" />
            </span>

            <span onClick={() => handleClick("hk", "Hong Kong")}>
              <Flags.HK className="nav-flag" />
            </span>

            <span onClick={() => handleClick("hu", "Hungary")}>
              <Flags.HU className="nav-flag" />
            </span>

            <span onClick={() => handleClick("in", "India")}>
              <Flags.IN className="nav-flag" />
            </span>

            <span onClick={() => handleClick("id", "Indonesia")}>
              <Flags.ID className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ie", "Ireland")}>
              <Flags.IE className="nav-flag" />
            </span>

            <span onClick={() => handleClick("il", "Israel")}>
              <Flags.IL className="nav-flag" />
            </span>

            <span onClick={() => handleClick("it", "Italy")}>
              <Flags.IT className="nav-flag" />
            </span>

            <span onClick={() => handleClick("jp", "Japan")}>
              <Flags.JP className="nav-flag" />
            </span>

            <span onClick={() => handleClick("lv", "Latvia")}>
              <Flags.LV className="nav-flag" />
            </span>

            <span onClick={() => handleClick("lt", "Lithuania")}>
              <Flags.LT className="nav-flag" />
            </span>

            <span onClick={() => handleClick("my", "Malaysia")}>
              <Flags.MY className="nav-flag" />
            </span>

            <span onClick={() => handleClick("mx", "Mexico")}>
              <Flags.MX className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ma", "Morocco")}>
              <Flags.MA className="nav-flag" />
            </span>

            <span onClick={() => handleClick("nl", "Netherlands")}>
              <Flags.NL className="nav-flag" />
            </span>

            <span onClick={() => handleClick("nz", "New Zealand")}>
              <Flags.NZ className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ng", "Nigeria")}>
              <Flags.NG className="nav-flag" />
            </span>

            <span onClick={() => handleClick("no", "Norway")}>
              <Flags.NO className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ph", "Philippines")}>
              <Flags.PH className="nav-flag" />
            </span>

            <span onClick={() => handleClick("pl", "Poland")}>
              <Flags.PL className="nav-flag" />
            </span>

            <span onClick={() => handleClick("pt", "Portugal")}>
              <Flags.PT className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ro", "Romania")}>
              <Flags.RO className="nav-flag" />
            </span>

            <span onClick={() => handleClick("ru", "Russia")}>
              <Flags.RU className="nav-flag" />
            </span>

            <span onClick={() => handleClick("sa", "Saudi Arabia")}>
              <Flags.SA className="nav-flag" />
            </span>
            <span onClick={() => handleClick("rs", "Serbia")}>
              <Flags.RS className="nav-flag" />
            </span>
            <span onClick={() => handleClick("sg", "Singapore")}>
              <Flags.SG className="nav-flag" />
            </span>
            <span onClick={() => handleClick("sk", "Slovakia")}>
              <Flags.SK className="nav-flag" />
            </span>
            <span onClick={() => handleClick("si", "Slovenia")}>
              <Flags.SI className="nav-flag" />
            </span>
            <span onClick={() => handleClick("za", "South Africa")}>
              <Flags.ZA className="nav-flag" />
            </span>
            <span onClick={() => handleClick("kr", "South Korea")}>
              <Flags.KR className="nav-flag" />
            </span>
            <span onClick={() => handleClick("se", "Sweden")}>
              <Flags.SE className="nav-flag" />
            </span>
            <span onClick={() => handleClick("ch", "Switzerland")}>
              <Flags.CH className="nav-flag" />
            </span>
            <span onClick={() => handleClick("tw", "1taiwan")}>
              <Flags.TW className="nav-flag" />
            </span>
            <span onClick={() => handleClick("th", "Thailand")}>
              <Flags.TH className="nav-flag" />
            </span>
            <span onClick={() => handleClick("tr", "Turkey")}>
              <Flags.TR className="nav-flag" />
            </span>
            <span onClick={() => handleClick("ae", "UAE")}>
              <Flags.AE className="nav-flag" />
            </span>
            <span onClick={() => handleClick("ua", "Ukraine")}>
              <Flags.UA className="nav-flag" />
            </span>
            <span onClick={() => handleClick("gb", "United Kindom")}>
              <Flags.GB className="nav-flag" />
            </span>
            <span onClick={() => handleClick("us", "United States")}>
              <Flags.US className="nav-flag" />
            </span>
            <span onClick={() => handleClick("ve", "Venuzuela")}>
              <Flags.VE className="nav-flag" />
            </span>
          </Masonry>
        </ResponsiveMasonry>
      </Modal>
    </>
  );
};

export default CountryModal;
