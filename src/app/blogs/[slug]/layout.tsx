import { Utterances } from "@/components/Utterances";
import { fetchBlog } from "@/lib/utils";
type Props = {
  params: Promise<{ slug: string }>;
  searchParams: never;
};

export async function generateMetadata({ params }: Props): Promise<any> {
  // read route params
  const { slug } = await params;
  const blog = await fetchBlog(slug);

  return {
    title: blog?.title || slug
  };
}

export default async function BaseLayout({
  params,
  children
}: Readonly<{
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
}>) {
  const { slug } = await params;
  const blogData = await fetchBlog(slug);
  const { title, time } = blogData;
  const date = new Date(time);
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
  const formateDate = formatter.format(date);
  return (
    <div className="p-4">
      <div className="font-bold text-4xl">{title}</div>
      <div className="text-sm text-gray-500 mt-4">{formateDate}</div>
      <div className="prose mt-8">{children}</div>
      <Utterances repo="AronLEEdev/MyKungFuUtterances" />
    </div>
  );
}
