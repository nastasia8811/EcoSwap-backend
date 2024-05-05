import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import * as React from "react";


const Blog = () => {
    return(
        <>
            <BreadCrumbs linksArray={[{ link: '/blog', text: 'Blog' }]} />

        </>
    )
};

export default Blog;