import { Link, useParams } from "react-router-dom";


import style from './PostCard.module.css'

import Button from "../../../shared/ui/Button";
import { useGetPostByIdQuery } from "../../../entities/post/api/apiSlice";
import { ROUTES } from "../../../shared/constant/constants";




const PostCard = () => {
    const {id} = useParams()
    const {data, isLoading, isSuccess} = useGetPostByIdQuery(id!)

    if(isLoading) return <div className={style.wrapper}>Loading...</div>

    return(
        <>
            {isSuccess ? (
                <div className={style.wrapper}>
                    <div className={style.title}>Number:{id}</div>
                    <h2>{data.title}</h2>
                    <p>{data.body}</p>
                    <Link to={ROUTES.HOME}>
                        <Button>Назад</Button>
                    </Link>
                </div>
            ) :(
                <div>Нет информации о посте</div>
            )}
        </>
    )
}
export default PostCard;