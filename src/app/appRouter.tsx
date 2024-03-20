import { Route, Routes } from "react-router-dom";
import { Main } from "../pages/main/ui/Page";
import PostCard from "../pages/post/ui/Page";
import { ROUTES } from "../shared/constant/constants";




export const AppRoutes = () => (
    <Routes>
        <Route index element={<Main/>}/>
        <Route path={ROUTES.POST_CARD} element={<PostCard/>}/>
    </Routes>
)