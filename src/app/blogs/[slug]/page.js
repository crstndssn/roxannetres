import { allBlogs } from "@/.contentlayer/generated";
import BlogDetails from "@/src/components/Blog/BlogDetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import { slug } from "github-slugger";
import Image from "next/image";

export default function BlogPage({ params }) {
  if (!params?.slug) {
    return <div>Error: Blog not found</div>;
  }

  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);

  if (!blog) {
    return <div>Error: Blog data not found</div>;
  }

  return (
    <div>
      <div className="container mx-auto mb-4 text-center relative w-full bg-dark h-auto">
        <Image
          src={blog.image.replace("../../../public", "")}
          alt={blog.title}
          width={1000}
          height={300}
          className="w-full h-full object-cover max-h-[420px]"
        />
      </div>

      <div className="px-4">
        <div className="hidden col-span-12 lg:col-span-4">
          {blog.toc.length > 0 && (
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table Of Content
              </summary>
              <ul className="mt-4 font-in text-base">
                {blog.toc.map((heading) => (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2
                  data-[level=two]:border-t border-solid border-dark/40
                  data-[level=three]:pl-4 sm:data-[level=three]:pl-6
                  flex items-center justify-start"
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}

                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>
        <RenderMdx blog={blog} />
      </div>
    </div>
  );
}
