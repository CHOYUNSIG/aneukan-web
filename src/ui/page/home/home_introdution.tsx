import {
  faHouseChimney,
  faPersonFalling,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeIntroduction() {
  return (
    <div className="flex flex-col gap-16 py-8 px-4">
      <h1 className="text-2xl font-bold">소개</h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col gap-12">
          <div className="flex flex-row justify-start items-center w-full text-left gap-4">
            <div className="rounded-full bg-white drop-shadow-md p-4">
              <FontAwesomeIcon icon={faPersonFalling} className="size-8" />
            </div>
            <div className="bg-gray-300 w-[2px] h-8" />
            <div className="w-[360px]">
              <span className="break-keep text-gray-700">
                아늑한은 시니어의 낙상 대처를 위한 서비스입니다.
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center w-full text-right gap-4">
            <div className="w-[360px]">
              <span className="break-keep text-gray-700">
                아늑한에서 제공하는 인공지능 낙상 감지 기능이 탑재된 홈캠을 통해
                누구보나 빠르게 낙상을 감지할 수 있습니다.
              </span>
            </div>
            <div className="bg-gray-300 w-[2px] h-8" />
            <div className="rounded-full bg-white drop-shadow-md p-4">
              <FontAwesomeIcon icon={faHouseChimney} className="size-8" />
            </div>
          </div>
          <div className="flex flex-row justify-start items-center w-full text-left gap-4">
            <div className="rounded-full bg-white drop-shadow-md p-4">
              <FontAwesomeIcon icon={faPhone} className="size-8" />
            </div>
            <div className="bg-gray-300 w-[2px] h-8" />
            <div className="w-[360px]">
              <span className="break-keep text-gray-700">
                낙상을 자동으로 감지하면 보호자와 관련 기관에 비상 연락을 취하여
                적절한 조치가 이루어질 수 있도록 합니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
