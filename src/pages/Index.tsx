import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">TicketWave</h1>
            <Button onClick={() => navigate("/admin")} variant="outline">
              Admin Login
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Available Events
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Book your tickets for upcoming events
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Tech Conference 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Join us for an amazing tech conference!</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$99</span>
                <Button onClick={() => navigate("/book/1")}>Book Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Music Festival</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Experience the best music festival of the year!</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$149</span>
                <Button onClick={() => navigate("/book/2")}>Book Now</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <CardTitle>Food & Wine Expo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 mb-4">Taste the finest cuisines and wines!</p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-lg">$79</span>
                <Button onClick={() => navigate("/book/3")}>Book Now</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;