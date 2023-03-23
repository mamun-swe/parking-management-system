/* Active path */
export const isActivePath = (current_url_path: string, route_path: string) => {
  const current_url_path_array = current_url_path.split("/");
  const isAvailablePath = current_url_path_array.find((x) => x === route_path);

  if (isAvailablePath) {
    return true;
  }
  return false;
};

