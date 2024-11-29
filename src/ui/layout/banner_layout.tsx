export default function BannerLayout({
  banner,
  children,
}: {
  banner: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-row items-center justify-center bg-brand w-full h-[50vh]">
        <div className="flex flex-col justify-end max-w-screen-md w-full h-full p-4 max-md:max-w-none">
          {banner}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-md w-full p-4 max-md:max-w-none max-sm:px-0">
          {children}
        </div>
      </div>
    </>
  );
}
