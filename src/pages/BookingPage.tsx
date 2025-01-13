import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import PaystackPop from "@paystack/inline-js";

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: 1,
  });

  // Mock event data (replace with actual API call)
  const event = {
    1: { title: "Tech Conference 2024", price: 99 },
    2: { title: "Music Festival", price: 149 },
    3: { title: "Food & Wine Expo", price: 79 },
  }[id as string];

  const handlePayment = () => {
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your public key
      email: formData.email,
      amount: event.price * formData.quantity * 100, // Amount in kobo
      currency: 'NGN',
      ref: '' + Math.floor((Math.random() * 1000000000) + 1),
      onSuccess: (transaction: any) => {
        toast({
          title: "Payment Successful",
          description: `Transaction Reference: ${transaction.reference}`,
        });
        // Here you would typically save the booking to your database
        navigate('/');
      },
      onCancel: () => {
        toast({
          title: "Payment Cancelled",
          description: "You have cancelled the payment",
          variant: "destructive",
        });
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    handlePayment();
  };

  if (!event) {
    return <div className="p-8">Event not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{event.title} - Booking</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="quantity">Number of Tickets</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                required
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({ ...formData, quantity: parseInt(e.target.value) })
                }
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-500">Price per ticket:</span>
                <span className="ml-2 font-bold">${event.price}</span>
              </div>
              <div>
                <span className="text-sm text-gray-500">Total:</span>
                <span className="ml-2 font-bold">
                  ${event.price * formData.quantity}
                </span>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Pay Now
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingPage;