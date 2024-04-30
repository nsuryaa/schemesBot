import React from "react";
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

import LatestScheme from "./LatestSchemeData.json";
export default function LatestSchemes(props) {
  return (
    <>
      <Accordion>
        {LatestScheme.map((scheme, index) => {
          return (
            <AccordionItem header={scheme.SchemeName} key={index}>
              <ul>
                <li>
                  <span className="schemecard-heading">LaunchedDate:</span>{" "}
                  {scheme.LaunchedDate}
                </li>
                <li>
                  <span className="schemecard-heading">Benefits: </span>
                  {scheme.Benefits[0]}
                </li>
                <li>
                  <span className="schemecard-heading">Beneficiaries:</span>{" "}
                  {scheme.Beneficiaries}
                </li>
                <li>
                  <span className="schemecard-heading">ModeOfApply: </span>
                  {scheme.ModeOfApply}
                </li>
              </ul>
            </AccordionItem>
          );
        })}
        ;
      </Accordion>
      {/* <div className="back">
    <button className="btn" onClick={props.actions.restartConversation}>Back</button>
    </div> */}
    </>
  );
}
