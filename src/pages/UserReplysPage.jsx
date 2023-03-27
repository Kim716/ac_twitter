import ModalContainer from "components/containers/ModalContainer";
import NavBar from "components/NavBar";
import { useState } from "react";

function UserReplysPage() {
  const [isTweetModalShow, setIsTweetModalShow] = useState(false);

  const handleTweetClick = () => {
    setIsTweetModalShow(!isTweetModalShow);
  };

  return (
    <div className="d-flex">
      {isTweetModalShow && <ModalContainer value="推文" />}
      <NavBar isUser={true} onTweetClick={handleTweetClick} status="個人資料" />
    </div>
  );
}

export default UserReplysPage;
