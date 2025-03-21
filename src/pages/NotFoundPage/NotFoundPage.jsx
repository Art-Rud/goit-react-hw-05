import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <p>
        The page does not exist, please return to the
        <Link to={"/"}> home page</Link>.
      </p>
    </>
  );
}
export default NotFoundPage;
