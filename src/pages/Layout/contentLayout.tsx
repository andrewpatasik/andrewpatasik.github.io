import { FC, ReactNode } from "react";

interface ContentLayoutProps {
  children: ReactNode;
  className?: string;
}

const ContentLayout: FC<ContentLayoutProps> = ({
  children,
  className,
}: ContentLayoutProps) => {
  return (
    <div className={`grid grid-cols-5 ${className}`}>
      <div></div>
      {children}
    </div>
  );
};

export default ContentLayout;
