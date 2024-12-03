import BannerLayout from "../../layout/banner_layout";
import { HomeBanner } from "./home_banner";
import HomeIntroduction from "./home_introdution";

export default function HomePage() {
  return (
    <BannerLayout banner={<HomeBanner />} bannerHeight="50vh">
      <div className="flex flex-col items-center justify-center w-full">
        <div className="max-w-screen-md w-full p-4 max-md:max-w-none max-sm:px-0">
          <HomeIntroduction />
        </div>
      </div>
    </BannerLayout>
  );
}
