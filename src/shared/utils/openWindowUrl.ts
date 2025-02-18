export const openWindowUrl = (url: string, options?: { target?: "_blank" | "_self" }) => {
  return window.open(url, options?.target);
};
