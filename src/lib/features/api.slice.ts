// import { appConfig } from '@/config';
import { BaseQueryApi } from "@reduxjs/toolkit/query";
// import Cookies from 'js-cookie';
import {
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

// const BASE_URL = process.env.MAIN_URL;
const MAIN_URL = "https://459jcr18-80.uks1.devtunnels.ms";

const baseQuery = fetchBaseQuery({
  baseUrl: MAIN_URL,
  prepareHeaders: (headers) => {
  // get token from next auth
  const token = {};
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  return headers;
  },
});

const baseQueryWithReAuth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: Record<string, unknown>
) => {
  const result = await baseQuery(args, api, extraOptions);
  //check if refresh token is expired
  // if(result.error && result.error.status === 401) {
  //   const logout = api.dispatch(logoutUser());
  //   logout()
  // }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: (_builder) => ({}), //eslint-disable-line
});
