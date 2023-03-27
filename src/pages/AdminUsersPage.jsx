import { useEffect, useState } from "react";

// components
import { AdminNavBar } from "components/NavBar";
import UserCards from "components/UserCards";
import { getAdminUsers } from "api/adminAuth";

function AdminUsersPage() {
  const [users, setUsers] = useState([]);

  // useEffect
  useEffect(() => {
    const showUsers = async () => {
      const userItems = await getAdminUsers();
      console.log(userItems);
      setUsers(userItems);
    };

    showUsers();
  }, []);

  return (
    <div className="d-flex">
      <AdminNavBar />
      <UserCards users={users} />
    </div>
  );
}

export default AdminUsersPage;
