import Promise from "../components/promise/Promise";
import { useNavigate } from "react-router";

const PromisePage = () => {
  const handleClick = (e) => {
    const navigate = useNavigate();
    navigate("/promise/info", { state: e.target.value });
  };

  return (
    <>
      <Promise />
    </>
  );
};

export default PromisePage;
