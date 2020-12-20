import React from "react";

//css
import styles from "./../../css/SelectRole.module.css";

//boootstrap

import { Input, Label, FormGroup, Button } from "reactstrap";

const SelectRole = () => {
  const currentRole = "{ نقش جاری }";

  return (
    <React.Fragment>
      <div className="container">
        <div className={styles.contents}>
          <div className={styles.descriptionBox}>
            <h3>تعیین نقش</h3>
            <span className="description">
              در این سیستم کاربران می توانند دارای نقش های مختلفی باشند که هر
              کدام از این نقش ها دارای دسترسی های متفاوتی هستند.
            </span>
            <span>برای ورود به سیستم نقش مورد نظر خود را انتخاب کنید</span>
            <span>
              پس از ورود به سیستم نیز می توانید از قسمت {currentRole} در نوار
              بالایی صفحه برای تغییر نقش خود اقدام نمایید.
            </span>
          </div>
          <FormGroup className={styles.formGroup}>
            <Label for="selectRole">انتخاب نقش : </Label>
            <Input type="select" name="select" id="selectRole">
              <option>پایه حقیقی - فعال</option>
              <option>بازرگان حقیقی - فعال</option>
              <option>پایه حقوقی شرکت تستی - فعال</option>
              <option>بازرگان حقیقی(منطقه ویژه اقتصادی رفسنجان) - فعال </option>
              <option>مجوز موردی تولیدی (بهین یاب) حقیقی - فعال</option>
            </Input>
          </FormGroup>
          <Button className={styles.button}>ورود</Button>
        </div>

        <Button className={styles.buttonBack}>
          <i className="fa fa-home" />
          بازگشت به صفحه اصلی
        </Button>
      </div>
    </React.Fragment>
  );
};

export default SelectRole;
