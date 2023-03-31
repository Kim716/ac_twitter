import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const adminToken = localStorage.getItem("adminToken");

  const [isAdminLogin, setIsAdminLogin] = useState(adminToken);

  const loginAlert = () => {
    Swal.fire({
      position: "top",
      icon: "warning",
      title: "請先登入",
      timer: 1500,
      showConfirmButton: false,
      customClass: {
        icon: "swalIcon right",
        title: "swalTitle",
      },
    });
  };

  return (
    <AdminContext.Provider
      value={{ isAdminLogin, setIsAdminLogin, loginAlert }}
    >
      {children}
    </AdminContext.Provider>
  );
}
