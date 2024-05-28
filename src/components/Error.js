import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="error-container">
      <h1>Oops!!!!</h1>
      <h1>|| Something went wrong ||</h1>
      <h3>{err.status }: {err.statusText}</h3>
    </div>
  );
};
export default Error;
