import CountCharts from "@/components/CountCharts";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* {left} */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* {User Card} */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type={"students"} />
          <UserCard type={"teachers"} />
          <UserCard type={"parents"} />
          <UserCard type={"staffs"} />
        </div>
        {/* {Middle Charts} */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* {COUNT CHARTS} */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountCharts />
          </div>
          {/* {ATTENTDENT CHARTS} */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        <div className=""></div>
      </div>

      {/* {right} */}
      <div className="w-full lg:w-1/3">right</div>
    </div>
  );
};

export default AdminPage;
