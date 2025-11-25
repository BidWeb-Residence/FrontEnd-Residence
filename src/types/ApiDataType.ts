export type ApiDataType = {
  target_url: string;
  data: {
    target: {
      os: string,
      technology: string
    },
    injection_points: {
      type: string;
      title: string;
      payload: string;
    }[];
    databases: string[];
  };
};
