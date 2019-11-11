import _ from "lodash";
const numberValidator = number => {
  if (number !="") {
    // const y = number.value;

    const y = _.trim(number);
    if (isNaN(y) || y.indexOf(" ") != -1) {
      // .focus();
      return false;
    }
    if (y.length > 10 || y.length < 10) {
      // number.focus();
      return false;
    }
    if (
      !(
        y.charAt(0) == "9" ||
        y.charAt(0) == "8" ||
        y.charAt(0) == "7" ||
        y.charAt(0) == "6"
      )
    ) {
      // number.focus();
      return false;
    }
  }
};

const maxlengthValidator = () => {};

export const validator = {
  numberValidator: numberValidator,
  maxlengthValidator: maxlengthValidator
};
