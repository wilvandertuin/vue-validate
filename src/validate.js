export const validate = {
  bind(element, _, { context }) {
    element.addEventListener("input", ({ target: { validationMessage } }) => {
      context.errors = Object.assign({}, context.errors, {
        [element.name]: validationMessage
      });
    });
  }
};
