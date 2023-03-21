// CSS
import "./styles/reset.css";
import "./styles/base.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

// Package
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import {
  AdminLoginPage,
  AdminUsersPage,
  AdminTweetsPage,
  FollowersPage,
  FollowingPage,
  LoginPage,
  MainPage,
  RegisterPage,
  SettingPage,
  TweetPage,
  UserLikesPage,
  UserMainPage,
  UserReplysPage,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="admin" element={<AdminLoginPage />}>
          <Route path="users" element={<AdminUsersPage />} />
          <Route path="tweets" element={<AdminTweetsPage />} />
          {/* 若輸入 "admin/不符合的字串" 會被導引到 MainPage */}
          <Route path="*" element={<AdminUsersPage />} />
        </Route>
        <Route path="regist" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="tweet/:id" element={<TweetPage />} />
        <Route path="user/:id" element={<UserMainPage />}>
          <Route path="replys" element={<UserReplysPage />} />
          <Route path="likes" element={<UserLikesPage />} />
          <Route path="followers" element={<FollowersPage />} />
          <Route path="following" element={<FollowingPage />} />
          {/* 若輸入 "user/:id/不符合的字串" 會被導引到 MainPage */}
          <Route path="*" element={<MainPage />} />
        </Route>
        <Route path="setting" element={<SettingPage />} />
        {/* * 代表除了以上設定好的路由，其他字串不符合的會被導引到 NoMatch */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};
// 寫完刪除

// 寫完刪除
export default App;
