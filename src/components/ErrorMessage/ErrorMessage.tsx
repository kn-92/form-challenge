import "./ErrorMessage.scss";

import { ErrorMessageProps } from "../types";

const ErrorMessage = ({ errorArray }: ErrorMessageProps) => {
  return <div className="errorContainer">{errorArray[0]?.message}</div>;
};

export default ErrorMessage;
