/* Active path */
export const isActivePath = (current_url_path: string, route_path: string) => {
  const current_url_path_array = current_url_path.split("/");
  const isAvailablePath = current_url_path_array.find((x) => x === route_path);

  if (isAvailablePath) {
    return true;
  }
  return false;
};

/* get vehicles */
export const getVehicles = () => {
  const result = localStorage.getItem("vehicles");
  const data = result ? JSON.parse(result) : null;
  return data;
};

/* set vehicles */
export const setVehicle = (data: any) => {
  const result = localStorage.setItem("vehicles", JSON.stringify(data));
  return result;
};
