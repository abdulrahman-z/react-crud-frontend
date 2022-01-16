import { createClient, RequestInterceptor } from "react-fetching-library";

const HOST = "https://private-34f3a-reactapiclient.apiary-mock.com";
const requestHostInterceptor = (host) => () => async (action) => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};

export const Client = createClient({
  requestInterceptors: [requestHostInterceptor(HOST)],
});
