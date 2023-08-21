export type contactPropsType = {
  id: string;
  contactName: string;
  contactNumber: string | number;
  storage: "SIM" | "Device";
  avatar: string | null;
};

export type contactListType = Array<contactPropsType>;
