declare interface Blog {
  id: string;
  router: string;
  image: string;
  title: string;
  desc: string;
  time: Date;
  tags: string[];
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "react-vertical-timeline-component";
