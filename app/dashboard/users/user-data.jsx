import clientPromise from "@/app/libs/mongodb";
import { UserTable } from "../components/user-table";

export default async function UserData() {
  try {
    const client = await clientPromise();
    const db = client.db("sample_mflix");

    const users = await db.collection("user").find({}).limit(10).toArray();

    if (users) {
      console.log("Users", users);

      const refinedUsers = users.map((user) => ({
        id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: "User",
        status: "active",
      }));

      return <UserTable users={refinedUsers} />;
    }
  } catch (error) {
    console.log(error);

    return (
      <div className="flex justify-center items-center h-[186.5px]">
        <p className="text-red-700 font-medium animate-pulse duration-1000">
          No User Data Available!
        </p>
      </div>
    );
  }
}
