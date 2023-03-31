import { useContext, useEffect, useState } from "react";
import { getAdminUsers } from "api/adminAuth";
import { AdminContext } from "contexts/AdminContext";
import { useNavigate } from "react-router-dom";

// components
import NavBar from "components/NavBar";
import UserCards from "components/UserCards";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  const { isAdminLogin, loginAlert } = useContext(AdminContext);
  const navigate = useNavigate();

  // useEffect
  // 驗證登入
  useEffect(() => {
    if (!isAdminLogin) {
      loginAlert();
      navigate("/admin");
    }
  }, [isAdminLogin, loginAlert, navigate]);

  // 取得使用者資料
  useEffect(() => {
    const showUsers = async () => {
      const userItems = await getAdminUsers();
      setUsers(userItems);
    };

    showUsers();
  }, []);

  return (
    <div className="d-flex">
      <NavBar isUser={false} status="使用者列表" />
      <UserCards users={users} />
    </div>
  );
}

export default AdminUsersPage;
