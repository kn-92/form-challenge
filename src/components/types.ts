export type ErrorMessageProps = {
  errorArray: any[];
};

export type FormValues = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: null | number;
  diameter?: null | number;
  spiciness_scale: null | number;
  slices_of_bread: null | number;
};
