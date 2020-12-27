import React from 'react';

//css
import styles from "./../../css/SelectBox.module.css";

//boootstrap
import { Input, Label, FormGroup } from "reactstrap";

const SelectBox = () => {
  const handleOnchange = (event) => {
    event.preventDefault();
  };

    return ( 
            <FormGroup className={styles.formGroup}>
              <Label for="selectRole">انتخاب نقش : </Label>
              <Input
                type="select"
                name="select"
                id="selectRole"
                onChange={handleOnchange}
              >
                <option value="">پایه حقیقی - فعال</option>
                <option value="">بازرگان حقیقی - فعال</option>
                <option value="">پایه حقوقی شرکت تستی - فعال</option>
                <option value="">
                  بازرگان حقیقی(منطقه ویژه اقتصادی رفسنجان) - فعال
                </option>
                <option value="">
                  مجوز موردی تولیدی (بهین یاب) حقیقی - فعال
                </option>

                {/* {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))} */}
              </Input>
            </FormGroup>
     );
}
 
export default SelectBox;