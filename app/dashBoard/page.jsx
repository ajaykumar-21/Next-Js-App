import Counter from "@/components/counter";

async function fetchData() {
  const res = await fetch("https://dummyjson.com/users");
  return await res.json();
}

const Dashboard = async () => {
  const userData = await fetchData();
  return (
    <div className="grid grid-cols-3 gap-5">
      <Counter />
      {userData &&
        userData.users.map((item) => (
          <div key={item.id}>
            <div className=" text-center p-2 shadow-md shadow-cyan-200 rounded-lg">
              {item.firstName}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
