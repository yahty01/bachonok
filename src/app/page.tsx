import LoginForm from "@/components/auth/login-form";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Portfolio App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern web application built with Next.js and Supabase
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              🚀 Features
            </h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Next.js 15 with App Router
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                TypeScript support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Tailwind CSS styling
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Supabase authentication
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Server-side rendering (SSR)
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Real-time database
              </li>
            </ul>

            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">
                🔧 Getting Started
              </h3>
              <ol className="text-sm text-blue-800 space-y-1">
                <li>1. Create your Supabase project</li>
                <li>2. Copy your project URL and anon key</li>
                <li>3. Add them to your .env.local file</li>
                <li>4. Start building your application!</li>
              </ol>
            </div>
          </div>

          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
