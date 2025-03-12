import { getMovies } from "@/lib/apis/server";

export default async function DashboardPage() {
  const movies = await getMovies();

  console.log("Movies::", movies);
  return (
    <main>
      <nav className="bg-blue-300 w-full h-16 flex px-4 justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl">MFlix Dashboard</h1>
        </div>
      </nav>

      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="h-96 bg-green-400">Div 1</div>
          <div className="h-96 bg-yellow-400">Div 2</div>
          <div className="h-96 bg-green-400">Div 3</div>
          <div className="h-96 bg-yellow-400">Div 4</div>
          <div className="h-96 bg-yellow-400">Div 5</div>
        </div>
      </div>
    </main>
  );
}
