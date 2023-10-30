import { isAxiosError } from "axios";

export const throwError = (error: unknown) => {
  if (isAxiosError(error)) {
    throw error.response?.data.error || error;
  } else if (typeof error === "string") {
    throw new Error(error);
  } else {
    throw error;
  }
};
