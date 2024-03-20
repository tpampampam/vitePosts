import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IPost } from "../model/types";
import { IParams } from "../../../widgets/PostList/ui";

const BASE_URL = import.meta.env.VITE_BASE_URL

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    tagTypes:['Post'],
    endpoints: (builder)  => ({
        fetchAllPosts: builder.query<IPost[],IParams>({
            query: (params) => ({
                url: '/posts',
                params: {
                    _limit: params.limit,
                    _start: params.start
                }
            }),
            providesTags: () => ['Post'],         
        }),
        getPostById: builder.query<IPost, string>({
            query: (id: string) => ({
                url:`/posts/${id}`
            }),
            providesTags: () => ['Post'],  
        })
    })
})

export const { useFetchAllPostsQuery, useGetPostByIdQuery } = apiSlice

