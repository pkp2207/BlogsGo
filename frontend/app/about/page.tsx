"use client";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <div>
            <Header />
            <div className="py-12 px-6 md:px-16 lg:px-32 bg-[#A6CFD5] dark:bg-[#0D0221]">
                <div className="text-center">
                    <h2 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-[#14272A] to-[#223F44] dark:bg-gradient-to-b dark:from-[#250660] dark:to-[#eaeefe] text-transparent bg-clip-text pb-5">
                        🚀 About BlogsGo
                    </h2>
                    <p className="mb-4 text-lg text-muted-foreground">
                        BlogsGo is a foundational Go application designed to retrieve and display data from a MongoDB Atlas database. The application is currently deployed at
                        <a href="https:pkp-blogsgo.vercel.app/" className="text-blue-600 hover:underline"> BlogsGo</a>.
                    </p>

                    <h2 className="text-3xl font-semibold mt-6 text-card-foreground">✨ Features</h2>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground text-left">
                        <li>🏠 <strong>Home Page:</strong> Displays featured posts with brief descriptions.</li>
                        <li>📝 <strong>Blogs:</strong> Browse and read all published blog posts.</li>
                        <li>✍️ <strong>Create New Blog:</strong> Compose and publish blog posts easily.</li>
                        <li>ℹ️ <strong>About:</strong> Learn more about BlogsGo and its mission.</li>
                        <li>📩 <strong>Newsletter Subscription:</strong> Receive the latest updates directly in your inbox.</li>
                        <li>💬 <strong>Testimonials:</strong> Read feedback from readers.</li>
                        <li>🔙 <strong>Backend:</strong> Built with Go and Gin framework.</li>
                        <li>🎨 <strong>Frontend:</strong> Built with Next.js and React.</li>
                        <li>💾 <strong>Database:</strong> Uses MongoDB Atlas for data storage.</li>
                        <li>🔗 <strong>API:</strong> Endpoints for retrieving and managing blogs.</li>
                        <li>📱 <strong>Responsive UI:</strong> Optimized for various devices.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold mt-6 text-card-foreground">🛠 Technologies Used</h2>
                    <ul className="list-disc list-inside space-y-2 mt-2 text-muted-foreground text-left">
                        <li>⚡ <strong>Next.js:</strong> Enhances performance and SEO with server-side rendering.</li>
                        <li>🚀 <strong>Vercel:</strong> Deployment platform for frontend applications.</li>
                        <li>🐹 <strong>Go & Gin:</strong> Backend services and API development.</li>
                        <li>☁️ <strong>MongoDB Atlas:</strong> Cloud-based database storage.</li>
                    </ul>

                    <h2 className="text-3xl font-semibold mt-6 text-card-foreground">🌍 Deployment</h2>
                    <p className="mt-2 text-muted-foreground">The backend is hosted on Render, and the frontend is deployed on Vercel.</p>

                    <h2 className="text-3xl font-semibold mt-6 text-card-foreground">⚙️ Running Locally</h2>
                    <h3 className="text-2xl font-medium mt-4 text-card-foreground">🐳 Dockerized Setup</h3>
                    <pre className="bg-muted p-3 rounded-md mt-2 overflow-auto text-card-foreground">
                        <code>docker-compose up --build</code>
                    </pre>
                    <p className="mt-2 text-muted-foreground">This starts both the Go server and the Next.js frontend.</p>

                    <h3 className="text-2xl font-medium mt-4 text-card-foreground">🛠 Manual Setup</h3>
                    <p className="mt-2 text-muted-foreground">To run the services separately:</p>
                    <pre className="bg-muted p-3 rounded-md mt-2 overflow-auto text-card-foreground">
                        <code>cd go-server\ngo run main.go</code>
                    </pre>
                    <pre className="bg-muted p-3 rounded-md mt-2 overflow-auto text-card-foreground">
                        <code>cd nextwithgo\nnpm install\nnpm run dev</code>
                    </pre>

                    <h2 className="text-3xl font-semibold mt-6 text-card-foreground">🔑 Environment Variables</h2>
                    <p className="mt-2 text-muted-foreground">Ensure <code>MONGODB_URI</code> is set with the appropriate credentials.</p>

                    <h2 className="text-3xl font-semibold mt-6 text-card-foreground">🤝 Contributing</h2>
                    <p className="mt-2 text-muted-foreground">We welcome contributions! Fork the repository and create a pull request with your changes.</p>
                </div>
            </div>
        </div>
    );
}
