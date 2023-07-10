import React from "react";

//: INTERNAL IMPORTS
import Style from "./Donate.module.css"
import { FormSVG } from "../SVG/index";


// TODO
//+ CHECK CLASS RESULT

const Donate = ({ setDonate, setSupport, donateAmount, setLoading }) => {
  return (
      <div class={Style.container}>
        <div class={Style.content}>
          <form class={Style.form}>
            <p id="heading" class={Style.heading}>
              Support creator work
            </p>
            <div class={Style.field}>
              <FormSVG styleClass={Style.input_icon} />
              <input 
                class={Style.input_field}
                type="number" 
                name="Donation" 
                autoComplete="off"
                min={0.025} 
                placeholder="Amount 0.025"
                onChange={(e) => setSupport(e.target.value)}
              />
            </div>

            <div class={Style.btn_container}>
              <button 
                class={Style.first_button}
                onClick={() => setDonate(false)}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button class={Style.second_button}>Sign Up</button>
            </div>
            <button 
                class={Style.third_button}
                onClick={() => (
                  setLoading(true), donateAmount(), setDonate(false)
                  )
                }
              >
                Donate
              </button>
          </form>
        </div>
      </div>
  );
};

export default Donate;
