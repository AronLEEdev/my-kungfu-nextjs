import { Utterances } from "@/components/Utterances";
import { fetchBlog } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
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
    <div className="p-4 flex flex-col">
      <div className="font-bold text-4xl text-center">{title}</div>
      <div className="text-sm text-gray-500 my-4 text-center">
        {formateDate}
      </div>
      <Separator />
      <div className="prose max-w-none prose-a:text-blue-600 my-8 md:mx-[10%] md:mt-[2%] lg:mx-[20%] flex-1">
        {children}
      </div>
      <Utterances repo="AronLEEdev/MyKungFuUtterances" />
    </div>
  );
}
