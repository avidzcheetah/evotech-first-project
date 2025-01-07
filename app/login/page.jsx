"use client";
export default function LoginPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black">
      <div className="w-[400px] mx-auto">
        <div className=" bg-blue-100 shadow-xl border border-gray-200 rounded-lg p-4">
          <form action="#" className="space-y-6">
            <h3 className="text-center text-xl font-semibold text-gray-900">
              Sign in to AvidzVerse
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
                className="bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="yourname@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2 dark::text-gray-300"
              >
                Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:ring-1 focus:ring-offset-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="•••••••••••"
              />
            </div>

            <div className="flex">
              <div className="flex">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-300 h-4 w-4 rounded"
                  />
                </div>
                <div className="text-sm ml-3">
                  <label
                    htmlFor="remember"
                    className="font-medium text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <a
                href="/forget-password"
                className="text-sm text-blue-700 hover:underline ml-auto"
              >
                Forget password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5"
            >
              Sign In
            </button>
            <div className="text-sm font-medium text-gray-500">
              Not Registered? {" "}
              <a href="/register" className="text-blue-700 hover:underline">Create an account</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
