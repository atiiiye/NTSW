import React, { useState } from "react";

//css
import styles from "./../../css/SelectRole.module.css";

//boootstrap
import { Input, Label, FormGroup, Button, Form } from "reactstrap";

//import routes
import { NavLink, Redirect } from "react-router-dom";

const SelectRole = () => {
  const [options, setOptions] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const currentRole = "{ نقش جاری }";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (options) {
      console.info("Valid Form");
      setRedirect(true)
    } else {
      console.error("Invalid Form");
    }
  };

  const handleOnchange = (event) => {
    event.preventDefault();
  };

  if (redirect) {
    return <Redirect to={{ pathname: "/DefultPage" }} />;
  }
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
          <Form onSubmit={handleSubmit}>
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
            <Button className={styles.button} type="submit">
              ورود
            </Button>
          </Form>
          <NavLink to="/" className={styles.HomeLink}>
            <i className="fa fa-home" />
          بازگشت به صفحه اصلی
        </NavLink>
        </div>

      </div>
    </React.Fragment>
  );
};

export default SelectRole;
