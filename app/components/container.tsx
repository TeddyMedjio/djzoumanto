interface Props {
  children: React.ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="mx-auto px-5 md:px-10 lg:px-0 max-w-[1120px]">
      {children}
    </div>
  );
}
