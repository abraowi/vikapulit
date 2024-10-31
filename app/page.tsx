import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to Vikapu Elite Basketball Academy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Elevate your game with professional training and personalized coaching
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </main>
  );
}