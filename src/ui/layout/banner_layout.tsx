export default function BannerLayout({
  banner,
  bannerHeight,
  children,
}: {
  banner: React.ReactNode;
  bannerHeight: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div
        className="flex flex-row items-center justify-center bg-brand w-full shadow-inner"
        style={{ height: bannerHeight }}
      >
        <div className="flex flex-col justify-end max-w-screen-md w-full h-full p-4 max-md:max-w-none">
          {banner}
        </div>
      </div>

      {children}
    </>
  );
}
