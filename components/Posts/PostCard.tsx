/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
* POZOR: Tento soubor obsahuje CITLIVE INFORMACE            *
* CAUTION: This file contains SENSITIVE INFORMATION         *
*                                                           *
* Copyright @JCmiel                                         *
* All rights reserved.                                      *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
import { InferProps } from 'prop-types';
import Link from 'next/link';

import { PostProp, UserProp } from '~/resources/types';


const PostCardProp = {
    post: PostProp,
    user: UserProp
};

export default function PostCard({ post, user }: InferProps<typeof PostCardProp>) {
    return (
        <div className="bg-white p-2 w-4/6 flex justify-between rounded-md mt-2 shadow-md">
            <Link href={`/post/${post.id}`}>
                <div>
                    <h6 className="text-gray-400">{user.username}</h6>
                    <h4 className="text-lg font-bold">{post.title}</h4>
                    <span className="text-md">{post.body}</span>
                </div>
                <div>image</div>
            </Link>
        </div>

    );
}

PostCard.propTypes = PostCardProp;
