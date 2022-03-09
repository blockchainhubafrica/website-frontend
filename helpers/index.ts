export const activeRouteClass = (route: string, activeRoute: string, styles: { readonly [key: string]: string }) => {
  if (activeRoute.includes(route))
    return `px-3 text-lg text-white ${styles["active"]}`;

  return `px-3 text-lg text-white`;
};
