import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ManagementExceptionIndicator({
  message,
  icon,
}: {
  message: string;
  icon: IconDefinition;
}) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-4 p-16">
      <FontAwesomeIcon icon={icon} className="size-16 text-gray-400" />
      <p className="text-gray-400">{message}</p>
    </div>
  );
}
