const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const BLOG_DIR = path.join(process.cwd(), "./src/markdowns");
const OUTPUT = path.join(process.cwd(), "public/search-index.json");

function getBlogs() {
  const files = fs.readdirSync(BLOG_DIR);
  return files.map((file) => {
    const filePath = path.join(BLOG_DIR, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content: body } = matter(content);
    return {
      slug: file.replace(".mdx", ""),
      title: frontmatter.title || "",
      description: frontmatter.description || "",
      body: body.replace(/[#\`\[\]]/g, "") // 移除 Markdown 符号
    };
  });
}

const index = getBlogs();
fs.writeFileSync(OUTPUT, JSON.stringify(index));
