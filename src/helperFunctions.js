export const setBackground = (theme) => {
  switch (theme) {
    case "dark":
      return "dark-bg-primary";
    case "neutral":
      return "neutral-bg-primary";
  }
};

export const setPrimGradientBg = (theme) => {
  switch (theme) {
    case "dark":
      return "dark-bg-primary-gradient";
    case "neutral":
      return "neutral-bg-primary-gradient";
  }
};

export const setSecondGradientBg = (theme) => {
  switch (theme) {
    case "dark":
      return "dark-bg-secondary-gradient";
    case "neutral":
      return "neutral-bg-secondary-gradient";
  }
};

export const setPrimText = (theme) => {
  switch (theme) {
    case "dark":
      return "dark-primary-text";
    case "neutral":
      return "neutral-primary-text";
  }
};

export const setSecondText = (theme) => {
  switch (theme) {
    case "dark":
      return "dark-secondary-text";
    case "neutral":
      return "neutral-secondary-text";
  }
};
