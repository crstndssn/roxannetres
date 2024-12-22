import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutOne from "@/src/components/Blog/BlogLayoutOne";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-"," ")} Blogs`,
    description: `Learn more about ${params.slug === "all" ? "web development" : params.slug} through our collection of expert blogs and tutorials`,
  };
}


const CategoryPage = ({ params }) => {
// Separating logic to create list of categories from all blogs
const allCategories = ["all"]; // Initialize with 'all' category
allBlogs.forEach(blog => {
  blog.tags.forEach(tag => {
    const slugified = slug(tag);
    if (!allCategories.includes(slugified)) {
      allCategories.push(slugified);
    }
  });
});

// Sort allCategories to ensure they are in alphabetical order
allCategories.sort();

// Step 2: Filter blogs based on the current category (params.slug)
const blogs = allBlogs.filter(blog => {
  if (params.slug === "all") {
    return true; // Include all blogs if 'all' category is selected
  }
  return blog.tags.some(tag => slug(tag) === params.slug);
});

  return (
    <div className="flex flex-col text-dark dark:text-light pb-20">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl text-center">{params.slug}</h1>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-12 mt-5 sm:mt-10 px-4 md:px-0">
        {blogs.map((blog, index) => (
          <div key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutOne blog={blog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;