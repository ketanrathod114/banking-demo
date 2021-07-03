import Header from "./Header";
import UserInfo from "./UserInfo";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container py-3">
        <UserInfo />
      </div>
    </>
  );
};

export default Dashboard;
