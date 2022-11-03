import Link from "next/link";
import { FC } from "react";
import { Blog } from "../../../types";
import { PAGE_URL } from "../../../constants";

type PostCardProps = Blog;

const PostCard: FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <Link
      href={{
        pathname: PAGE_URL.BLOG_DETAIL,
        query: {
          id,
        },
      }}
      className="rounded border border-black-10 px-10 py-4"
    >
      <div className="flex items-center justify-center py-10 text-center text-2xl">
        {title}
      </div>
      <p className="text-black-60">{body}</p>
    </Link>
  );
};

export default PostCard;
