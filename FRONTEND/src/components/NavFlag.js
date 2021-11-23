import React from "react";

import { useSelector } from "react-redux";

import Flags from "country-flag-icons/react/3x2";

const NavFlag = () => {
  const { country } = useSelector((state) => state.country);

  return (
    <>
      <span>
        {country == "ar" && <Flags.AR className="nav-flag" />}
        {country == "au" && <Flags.AU className="nav-flag" />}
        {country == "at" && <Flags.AT className="nav-flag" />}
        {country == "be" && <Flags.BE className="nav-flag" />}
        {country == "br" && <Flags.BR className="nav-flag" />}
        {country == "bg" && <Flags.BG className="nav-flag" />}
        {country == "ca" && <Flags.CA className="nav-flag" />}
        {country == "cn" && <Flags.CN className="nav-flag" />}
        {country == "co" && <Flags.CO className="nav-flag" />}
        {country == "cu" && <Flags.CU className="nav-flag" />}
        {country == "cz" && <Flags.CZ className="nav-flag" />}
        {country == "eg" && <Flags.EG className="nav-flag" />}
        {country == "fr" && <Flags.FR className="nav-flag" />}
        {country == "de" && <Flags.DE className="nav-flag" />}
        {country == "gr" && <Flags.GR className="nav-flag" />}
        {country == "hk" && <Flags.HK className="nav-flag" />}
        {country == "hu" && <Flags.HU className="nav-flag" />}
        {country == "in" && <Flags.IN className="nav-flag" />}
        {country == "id" && <Flags.ID className="nav-flag" />}
        {country == "ie" && <Flags.IE className="nav-flag" />}
        {country == "il" && <Flags.IL className="nav-flag" />}
        {country == "it" && <Flags.IT className="nav-flag" />}
        {country == "jp" && <Flags.JP className="nav-flag" />}
        {country == "lv" && <Flags.LV className="nav-flag" />}
        {country == "lt" && <Flags.LT className="nav-flag" />}
        {country == "my" && <Flags.MY className="nav-flag" />}
        {country == "mx" && <Flags.MX className="nav-flag" />}
        {country == "ma" && <Flags.MA className="nav-flag" />}
        {country == "nl" && <Flags.NL className="nav-flag" />}
        {country == "nz" && <Flags.NZ className="nav-flag" />}
        {country == "ng" && <Flags.NG className="nav-flag" />}
        {country == "no" && <Flags.NO className="nav-flag" />}
        {country == "ph" && <Flags.PH className="nav-flag" />}
        {country == "pl" && <Flags.PL className="nav-flag" />}
        {country == "pt" && <Flags.PT className="nav-flag" />}
        {country == "ro" && <Flags.RO className="nav-flag" />}
        {country == "ru" && <Flags.RU className="nav-flag" />}
        {country == "sa" && <Flags.SA className="nav-flag" />}
        {country == "rs" && <Flags.RS className="nav-flag" />}
        {country == "sg" && <Flags.SG className="nav-flag" />}
        {country == "sk" && <Flags.SK className="nav-flag" />}
        {country == "si" && <Flags.SI className="nav-flag" />}
        {country == "za" && <Flags.ZA className="nav-flag" />}
        {country == "kr" && <Flags.KR className="nav-flag" />}
        {country == "se" && <Flags.SE className="nav-flag" />}
        {country == "ch" && <Flags.CH className="nav-flag" />}
        {country == "tw" && <Flags.TW className="nav-flag" />}
        {country == "th" && <Flags.TH className="nav-flag" />}
        {country == "tr" && <Flags.TR className="nav-flag" />}
        {country == "ae" && <Flags.AE className="nav-flag" />}
        {country == "ua" && <Flags.UA className="nav-flag" />}
        {country == "gb" && <Flags.GB className="nav-flag" />}
        {country == "us" && <Flags.US className="nav-flag" />}
        {country == "ve" && <Flags.VE className="nav-flag" />}
      </span>
    </>
  );
};

export default NavFlag;
