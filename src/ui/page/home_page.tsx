import BannerLayout from "../layout/banner_layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import Link from "next/link";

export default function HomePage() {
  return (
    <BannerLayout banner={<HomeBanner />}>
      <div className="flex flex-col gap-4 py-8">
        <h1 className="text-2xl font-bold">소개</h1>
      </div>
    </BannerLayout>
  );
}

function HomeBanner() {
  return (
    <div className="flex flex-row gap-8 justify-between w-full px-8 max-sm:flex-col">
      <div className="flex flex-col gap-2 justify-end h-full text-white drop-shadow-lg">
        <h1 className="text-5xl font-bold">아늑한</h1>
        <p className="text-lg">
          <span className="font-bold">:</span> 시니어 낙상 감지 홈캠 서비스
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 max-sm:w-full max-sm:items-end">
        <HomeBannerRouterButton width="256px" height="64px" href="/register">
          <div className="w-full text-start flex flex-row justify-between items-center">
            <div className="align-start">
              <p className="font-bold">홈캠 등록하기</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </div>
        </HomeBannerRouterButton>
        <HomeBannerRouterButton width="256px" height="64px" href="/login">
          <div className="w-full text-start flex flex-row justify-between items-center">
            <div className="align-start">
              <p className="text-xs">이미 등록하셨나요?</p>
              <p className="font-bold">홈캠 관리하기</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </div>
        </HomeBannerRouterButton>
      </div>
    </div>
  );
}

function HomeBannerRouterButton({
  width,
  height,
  href,
  children,
}: {
  width: string;
  height: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col justify-center items-start h-full bg-white text-black shadow-lg rounded-full px-8"
      style={{ width: width || "auto", height: height || "auto" }}
    >
      {children}
    </Link>
  );
}
