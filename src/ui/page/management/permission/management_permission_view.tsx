import { faXmark } from "@fortawesome/free-solid-svg-icons";
import ManagementExceptionIndicator from "../management_exception_indicator";

export default function ManagementPermissionView({ id }: { id: number }) {
  return (
    <ManagementExceptionIndicator message="권한이 없습니다." icon={faXmark} />
  );
}
