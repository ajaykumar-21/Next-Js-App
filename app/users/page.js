import React from "react";

function page() {
  const userData = async (params) => {
    "use server";
    console.log(params);
  };
  return (
    <div>
      <h1>Hello, I am Page</h1>
      <form action={userData}>
        <input type="email" name="email" />
        <button>submit</button>
      </form>
    </div>
  );
}

export default page;
