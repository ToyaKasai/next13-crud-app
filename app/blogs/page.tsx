import Container from "../../components/common/container/Container";
import PostCard from "../../components/pages/blogs/PostCard";
import { Blog } from "../../types";

const getBlogs = async (): Promise<Blog[] | undefined> => {
  try {
    const blogs = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    });

    return blogs.json();
  } catch {}
};

const BlogsPage = async () => {
  const blogs = await getBlogs();

  return (
    <Container className="pt-10">
      <div className="flex flex-col gap-6">
        {blogs?.map((blogs) => (
          <PostCard key={blogs.id} {...blogs} />
        ))}
      </div>
    </Container>
  );
};

export default BlogsPage;
