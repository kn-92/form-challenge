export type State = {
  loading: boolean;
  error: [];
};

export type PayloadData = {
  name: string;
  preparation_time: string;
  type: string;
  no_of_slices?: number | null;
  diameter?: number | null;
  spiciness_scale?: number | null;
  slices_of_bread?: number | null;
};
