type PropsTypes = {
  type: "button" | "submit";
  className?: string;
  disabled?: boolean;
  tabIndex?: number;
  onClick?: (data: any) => any;
  children: React.ReactNode;
};

/* Primary button */
export const PrimaryButton: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`text-[15px] font-medium text-white bg-primary px-5 py-3 rounded-lg transition-all hover:bg-secondary disabled:bg-primary-disabled ${props.className}`}
    >
      {props.children}
    </button>
  );
};

/* Primary circle icon button */
export const PrimaryCircleButton: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`text-white bg-primary p-2 rounded-full transition-all hover:bg-secondary disabled:bg-primary-disabled ${props.className}`}
    >
      {props.children}
    </button>
  );
};

/* White button */
export const WhiteButton: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`text-[15px] font-medium border text-black bg-white px-5 py-3 rounded-lg transition-all hover:bg-gray-200 disabled:bg-gray-200 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

/* White circle icon button */
export const WhiteCircleButton: React.FC<PropsTypes> = (
  props: PropsTypes
): JSX.Element => {
  return (
    <button
      type={props.type}
      tabIndex={props.tabIndex}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`border text-black bg-white p-2 rounded-full transition-all hover:bg-gray-200 disabled:bg-gray-200 ${props.className}`}
    >
      {props.children}
    </button>
  );
};
