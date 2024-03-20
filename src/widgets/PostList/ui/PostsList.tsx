import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {  Post } from "../../../entities/post";
import { IPost } from '../../../entities/post/model/types'
import { IParams } from "../model/type";
import { useFetchAllPostsQuery } from "../../../entities/post/api/apiSlice";

import style from './Posts.module.css'



const PostsList = () => {

    const [currentStart, setCurrentPage] = useState<number>(0)
    const { ref: lastRef, inView: lastView } = useInView({
        threshold: 0.5
    });

    const { ref: firstRef, inView: firstView } = useInView({
        threshold: 0.5
    });

    const params: IParams = {
        limit: 8,
        start: currentStart
    }

    useEffect(() => {
        if(firstView && currentStart > 0) {
            setCurrentPage(prevState => prevState - 1)
        }
    },[firstView])
   
    useEffect(() => {
        if(lastView) {
            setCurrentPage(prevState => prevState + 1)
        }
    },[lastView])
    
    const {data: posts = [], isLoading } = useFetchAllPostsQuery(params)
       
    if(isLoading) return <div>Loading...</div>;

    return (
        <div className={style.wrapper}>
            {
                posts.map((post: IPost, i: number) => {
               
                    if (i === posts.length - 1) {
                        return (
                            <div key={post.id} ref={lastRef}>
                                <Post key={post.id} {...post}/>
                            </div>
                     )
                    } else if(i === 0) {
                        return (
                            <div key={post.id} ref={firstRef}>
                                <Post key={post.id} {...post}/>
                            </div>
                        )
                    } else {
                        return <Post key={post.id} {...post}/>
                    }
                })
            }
        </div>
    )
}

export default PostsList;
