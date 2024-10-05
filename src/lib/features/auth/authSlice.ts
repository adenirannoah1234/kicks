import { apiSlice } from "../api.slice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/SignUpClassesPhp/login/",
        method: "POST",
        body: credentials,
      }),
    }),


    createUser: builder.mutation({
      query: (credentials) => ({
       url: `/SignUpClassesPhp/signUp/`,
       method: "POST",
       body: credentials,
      }),
    }),


  }),
});
export const {
  useLoginMutation,
  useCreateUserMutation,
} = authApiSlice;
