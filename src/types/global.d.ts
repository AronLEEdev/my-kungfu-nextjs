declare interface Blog {
  id: string;
  router: string;
  image: string;
  title: string;
  desc: string;
  time: Date;
  tags: string[];
  refers?: Array<{ title: string; url: string }>;
  index?: number;
  rect?: Rect | undefined;
}

declare interface Rect {
  bottom?: number;
  height?: number;
  left?: number;
  right?: number;
  top?: number;
  width?: number;
  x?: number;
  y?: number;
}

declare module "*.mdx" {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "react-vertical-timeline-component";
