import React from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validteCustom = () => {
    const account = { ...this.state.account };
    const errors = {};

    const options = { abortEarly: false };
    const result = this.schema.validate(account, options);

    console.log(result);
    if (!result.error) return null;

    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;
    // if (account.username.trim() === "") {
    //   errors.username = "Username is required";
    // }
    // if (account.password.trim() === "") {
    //   errors.password = "Password is required";
    // }

    // return Object.keys(errors).length == 0 ? null : errors;
  };

  validateProperty = (input) => {
    if (input.id == "username") {
      if (input.value.trim() === "") return "Username is required";
    }
    if (input.id == "password") {
      if (input.value.trim() === "") return "Password is required";
    }
  };

  // validateProperty = ({ id, value }) => {
  //   const obj = { [id]: value };
  //   const key = id;
  //   const rule = this.schema[key];
  //   // const schema = Joi.object({ id: this.schema[id] });
  //   console.log(rule);
  //   // const { error } = schema.validate(obj);
  //   // return error ? error.details[0].message : null;
  // };

}

export default Form;
