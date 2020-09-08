let expression = "";

const inputElement = document.getElementById("input");


const clickHandler = (e) => {
  switch (e.target.value) {

    case "clear":
      expression = "";
      break;

    case "del":
        expression = expression.slice(0, -1);
        break;

    case "evaluate":
      expression = eval(expression).toString();
      break;

    default:
      if (e.target.value) {
        expression += e.target.value;
      }
  }

  inputElement.value = expression;
};


document.getElementById("button-group").addEventListener("click", clickHandler);
