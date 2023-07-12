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
    <div class={Style.container}>
      <div class={Style.content}>
        <form class={Style.form}>
          <p id="heading" class={Style.heading}>
            Upload Image
          </p>
          <div class={Style.filed}>
            <FormSVG styleClass={Style.input_icon} />
            <input 
              type="text" 
              class={Style.input_field} 
              placeholder="title" 
              autoComplete="off"
              onChange={(e) => handleFormFieldChange("title", e)}
            />
          </div>
          <div class={Style.field}>
            <Lock styleClass={Style.input_icon} />
            <textarea 
              type="description" 
              class={`${Style.textarea} ${Style.input_field} `}
              placeholder="description"
              onChange={(e) => handleFormFieldChange("description", e)}
              ></textarea>
          </div>
          <div class={Style.field}>
            <FormSVG styleClass={Style.input_icon} />
            <input 
              type="email" 
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

          <div class={Style.btn_container}>
            <button 
              class={Style.first_button}
              onClick={() => (setFile(null), setDisplay(null))}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Close&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
            <button class={Style.second_button}>Sign Up</button>
          </div>
          <button 
            onClick={(e) => handleSubmit(e)}
            class={Style.third_button}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
