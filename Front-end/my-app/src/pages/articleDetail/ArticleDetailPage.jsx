import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import MainLayout from '../../Components/MainLayout';
import BreadCrumbs from '../../Components/BreadCrumbs';
import images from '../../constants/images';
import SuggestedPosts from './container/SuggestedPosts';

const breadCrumbsData = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/blog" },
    { name: "Article title", link: "/blog/1" },
];

const tagsData = [
    "Medical",
    "LifeStyle",
    "Sport",
    "Food",
    "Diet",
    "Education",
]

const postsData = [
    {
        _id: "1",
        image: images.picPos1,
        title: "Moving From California To Texas",
        createdAt: "2024-01-28T15:35:53.607+0000"
    },
    {
        _id: "2",
        image: images.picPos2,
        title: "Moving From California To Texas",
        createdAt: "2024-01-28T15:35:53.607+0000"
    },
    {
        _id: "3",
        image: images.picPos3,
        title: "Moving From California To Texas",
        createdAt: "2024-01-28T15:35:53.607+0000"
    },
    {
        _id: "4",
        image: images.picPos1,
        title: "Moving From California To Texas",
        createdAt: "2024-01-28T15:35:53.607+0000"
    },
]

const ArticleDetailPage = () => {
    return (
        <MainLayout>
            <section className="container mx-auto max-w-5xl flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
                <article className="flex-1">
                    <BreadCrumbs data={breadCrumbsData} />
                    <img className="rounded-xl w-full" // Corrected class name to rounded-xl
                        src={images.picPos1}
                        alt="Texas" />
                    <Link to="/blog?category=selectedCategory " className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"> {/* Corrected usage of Link */}
                        EDUCATION
                    </Link>
                    <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">Moving From California To Texas</h1>
                    <div className="mt-4 text-dark-soft">
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p className="text-gray-700 mb-4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.</p>
                    <p className="text-gray-700 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </article>
                <SuggestedPosts header="Latest Articles" posts={postsData} tags={tagsData}
                className="mt-8"
                />
            </section>
        </MainLayout>
    );
}

export default ArticleDetailPage;
