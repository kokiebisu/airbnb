export interface GetStartedCreateProps {}

export interface KindCreateProps {
  data?: any;
  setData?: (params: any) => void;
}

export interface BedroomsCreateProps {
  data?: any;
  setData?: (params: any) => void;
}

export interface BathroomsCreateProps {
  data?: any;
  setData?: (params: any) => void;
}

export interface LocationCreateProps {
  data?: any;
  setData?: (params: any) => void;
}

export interface CreateProps {
  type?: string;
  [x: string]: any;
}
