export interface LoginData {
  data: Data;
}

export interface Data {
  code: string;
  message: string;
}

export interface LoginError {
  error: Error;
}

export interface Error {
  code: string;
  message: string;
}
