import React from "react";
import FAQs from "./FAQ.json"
import { Accordion, AccordionItem } from "@szhsin/react-accordion";

export default function FAQ(){
    return(
        <Accordion>
        {FAQs.map((FAQ, index) => {
          return (
            <AccordionItem header={FAQ.question} key={index}>
              {FAQ.answer}
            </AccordionItem>
          );
        })}
        ;
      </Accordion>
    )
}