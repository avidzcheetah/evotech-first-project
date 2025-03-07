import Link from "next/link";

export default function SidePanel() {
  return (
    <div className="flex flex-col p-4 space-y-2">
      <Link href="/dashboard" className="hover:bg-blue-50 text-sm p-2 rounded">
        Overview
      </Link>
      <Link
        href="/dashboard/movies"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        Movies
      </Link>
      <Link
        href="/dashboard/add-movie"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        Add Movie
      </Link>
      <Link
        href="/dashboard/users"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        Users
      </Link>
      <Link
        href="/dashboard/settings"
        className="hover:bg-blue-50 text-sm p-2 rounded"
      >
        Settings
      </Link>
    </div>
  );
}
