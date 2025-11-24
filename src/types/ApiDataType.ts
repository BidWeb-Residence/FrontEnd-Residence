export type ApiDataType = {
  target_url: string;
  data: {
    injection_points: {
      type: string;
      title: string;
      payload: string;
    }[];
    databases: string[];
  };
};
