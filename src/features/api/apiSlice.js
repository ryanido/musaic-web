import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const API_URL = 'http://127.0.0.1:8000'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (builder) => ({
        getTopTracks: builder.query({
            query: () => '/top-tracks'
        }),
        // addNewPost: builder.mutation({
        //     query: (initialPost) => ({
        //         url: '/posts',
        //         method: 'POST',
        //         body: initialPost
        //     })
        // }),

    })
})

export const {useGetTopTracksQuery} = apiSlice