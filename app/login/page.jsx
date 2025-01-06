"use client";
export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <div className="w-[300px] mx-auto">
        <div className=" bg-blue-100 shadow-md border border-gray-200 rounded-lg p-4">
          <form action="#">
            <h3 className="text-center text-xl font-semibold text-gray-900">
              Sign in to Evotech
            </h3>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2 dark::text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 ring-1 ring-offset-1 rounded-lg text-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="yourname@email.com"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
