import React from "react";

//: INTERNAL IMPORTS
import Style from "./Donate.module.css"
import { FormSVG } from "../SVG/index";

const Donate = ({ setDonate, setSupport, donateAmount, setLoading }) => {
  return (
      <div className={Style.container}>
        <div className={Style.content}>
          <form className={Style.form}>
            <p id="heading" className={Style.heading}>
              Support creator work
            </p>
            <div className={Style.field}>
              <FormSVG styleClass={Style.input_icon} />
              <input 
                className={Style.input_field}
                type="number" 
                name="Donation" 
                autoComplete="off"
                min={0.025} 
                placeholder="Amount 0.025"
                onChange={(e) => setSupport(e.target.value)}
              />
            </div>

            <div className={Style.btn_container}>
              <button 
                className={Style.first_button}
                onClick={() => setDonate(false)}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </button>
              <button className={Style.second_button}>Sign Up</button>
            </div>
            <button 
                className={Style.third_button}
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
