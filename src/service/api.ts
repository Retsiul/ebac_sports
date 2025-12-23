import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Produto } from './../App'
const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-teste-tau.vercel.app/api.json'
  }),
  endpoints: (builder) => ({
    getFavoritos: builder.query<Produto[], void>({
      query: () => ''
    })
  })
})
export const { useGetFavoritosQuery } = api
export default api
