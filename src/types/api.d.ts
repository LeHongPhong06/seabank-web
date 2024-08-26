export declare namespace API {
  declare namespace Base {
    type Response<T> = Promise<{
      body: {
        status: "OK" | "FAILE";
        authenType?: string;
        data?: T | DataList<T>;
      };
      error?: TError;
      header: THeader;
    }>;

    type DataList<T> = {
      items: Array<T>;
      total: number;
    };
  }
}

type TError = {
  code?: string;
  desc?: string;
};

type THeader = Record<string, unknown>;

interface BodyResponse<T> {
  body?: {
    status: "OK" | "FAILE";
    authenType?: string;
    data?: {
      items: Array<T>;
      total: number;
    };
  };
  error?: {
    code?: string;
    desc?: string;
  };
  header: object;
}

export interface DataList<T> {
  items: Array<T>;
  total: number;
}

interface ResponseBodyDelete {
  success: boolean;
  ids?: string;
  error?: {
    statusCode?: number;
    message?: string;
    errors?: Array<{ id?: string; message?: string }>;
  };
}
