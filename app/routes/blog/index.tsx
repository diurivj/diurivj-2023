import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import * as post1 from "./post/post1.mdx";
import * as post2 from "./post/post2.mdx";
import * as post3 from "./post/post3.mdx";

export function loader() {
  // Change this when I'm a superstar, or Luis reaches out to publish his tweets.
  function postFromModule(mod: any): {
    slug: string;
    title: string;
    description: string;
    date: string;
  } {
    return {
      slug: mod.filename.replace(/\.mdx?$/, ""),
      ...mod.attributes.meta,
    };
  }

  const posts = [
    postFromModule(post1),
    postFromModule(post2),
    postFromModule(post3),
  ].sort((a, b) => (a.date > b.date ? -1 : 1));

  return json({ posts });
}

export default function BlogPage() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <>
      {/* WTF this -ml-1 */}
      <h1 className="mt-8 font-poppins font-medium text-8xl -ml-1">Blog</h1>
      {posts.length ? (
        <ul className="mt-8 space-y-4">
          {posts.map((post) => (
            <li key={post.slug} className="flex flex-col">
              <Link
                className="font-poppins text-xl font-medium"
                to={`./post/${post.slug}`}
              >
                {post.title}
              </Link>
              <Link className="font-poppins" to={`./post/${post.slug}`}>
                {post.description}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 font-poppins">No posts yet.</p>
      )}
    </>
  );
}
