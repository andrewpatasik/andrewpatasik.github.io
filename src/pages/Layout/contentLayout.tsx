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
    <div className={`grid grid-cols-5 gap-4 sm:gap-0 ${className}`}>
      <div className="hidden md:block"></div>
      {children}
    </div>
  );
};

export default ContentLayout;
