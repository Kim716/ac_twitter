import { useEffect, useState } from "react";

// components
import NavBar from "components/NavBar";
import UserCards from "components/UserCards";
import { getAdminUsers } from "api/adminAuth";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  // useEffect
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