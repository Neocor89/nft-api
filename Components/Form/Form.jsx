import React from "react";

//: INTERNAL IMPORTS
import Style from "./Form.module.css"
import { FormSVG, Lock } from "../SVG/index";
import { CheckBox } from "../index"

const Form = ({ 
  setFile, 
  setDisplay, 
  handleFormFieldChange, 
  handleSubmit, 
  setCategory 
}) => {

  const categories = ["Robot", "Humans Face", "Animals"];
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <form className={Style.form}>
          <p id="heading" className={Style.heading}>
            Upload Image
          </p>
          <div className={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
            <input 
              type="text" 
              className={Style.input_field} 
              placeholder="title" 
              autoComplete="off"
              onChange={(e) => handleFormFieldChange("title", e)}
            />
          </div>
          <div className={Style.field}>
            <Lock styleClass={Style.input_icon} />
            <textarea 
              type="description" 
              className={`${Style.textarea} ${Style.input_field} `}
              placeholder="description"
              onChange={(e) => handleFormFieldChange("description", e)}
              ></textarea>
          </div>
          <div className={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
            <input 
              type="email" 
              className={Style.input_field}
              placeholder="email" 
              onChange={(e) => handleFormFieldChange("email", e)} 
            />
          </div>
          <p className={Style.second}>Category</p>
          <div className={Style.category}>
            {categories.map((category, i) => (
              <CheckBox 
                setCategory={setCategory}
                key={i + 1}
                category={category}
              />
            ))}
          </div>

          <div className={Style.btn_container}>
            <button 
              className={Style.first_button}
              onClick={() => (setFile(null), setDisplay(null))}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button className={Style.second_button}>Sign Up</button>
          </div>
          <button 
            onClick={(e) => handleSubmit(e)}
            className={Style.third_button}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
