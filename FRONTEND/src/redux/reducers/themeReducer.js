import { TOGGLE_THEME } from "../constants/constants";

if (!localStorage.theme) {
  localStorage.setItem("theme", "light");
}

const initialState = {
  theme: localStorage.theme,
};

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      if (localStorage.theme == "light") {
        localStorage.setItem("theme", "dark");
        document.body.style.backgroundColor = "black";
      } else {
        localStorage.setItem("theme", "light");
        document.body.style.backgroundColor = "white";
      }
      return {
        theme: localStorage.theme,
      };
    }
    default: {
      return state;
    }
  }
};
