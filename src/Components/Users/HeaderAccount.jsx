import React from "react";

//bootstrap
import {
  Navbar,
  BreadcrumbItem,
  Breadcrumb,
  Input,
  Label,
  FormGroup,
} from "reactstrap";

//css
import "./../../css/HeaderAccount.css";


const HeaderAccount = () => {

  const handleOnchange = (event) => {
    event.preventDefault();
  }

  return (
    <Navbar className="user-header">
      <div className="user-header-left">
        <Breadcrumb className="breadcrumb">
          <BreadcrumbItem tag="a" href="#">
            خانه
          </BreadcrumbItem>
          <BreadcrumbItem tag="a" href="#">
            انتخاب نقش
          </BreadcrumbItem>
          <BreadcrumbItem active tag="a" href="#">
            صفحه اول
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="user-header-right">
        <FormGroup>
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
            <option value="">مجوز موردی تولیدی (بهین یاب) حقیقی - فعال</option>
          </Input>
        </FormGroup>
      </div>
    </Navbar>
  );
};

export default HeaderAccount;
