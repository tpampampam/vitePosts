
import { Link } from 'react-router-dom';
import style from './Post.module.css'

import Button from '../../../shared/ui/Button';
import { IPost } from '../model/types';


const Post = ({id, title, body}: IPost) => {

    return(
        <div className={style.wrapper}>
    
            <div className={style.content}>
                <b>{id}</b>
                <h2>{title}</h2>
                <p>{body.slice(0, 70) + '...'}</p>
            </div>
            <div>
                <Link to={`/${id}`}>
                    <Button>Просмотр</Button>
                </Link>
            </div>
        </div>
    
    )
}

export default Post;

