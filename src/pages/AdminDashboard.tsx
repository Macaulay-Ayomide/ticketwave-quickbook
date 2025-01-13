import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

const AdminDashboard = () => {
  const { toast } = useToast();
  const [tickets] = useState([
    {
      id: 1,
      event: "Tech Conference 2024",
      customerName: "John Doe",
      email: "john@example.com",
      quantity: 2,
      status: "Paid",
    },
    // Add more mock data as needed
  ]);

  const handleDelete = (id: number) => {
    toast({
      title: "Not implemented",
      description: "Delete functionality will be integrated with backend soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Ticket Management</h1>
          <Button onClick={() => window.location.href = "/"}>
            Back to Home
          </Button>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell>{ticket.event}</TableCell>
                  <TableCell>{ticket.customerName}</TableCell>
                  <TableCell>{ticket.email}</TableCell>
                  <TableCell>{ticket.quantity}</TableCell>
                  <TableCell>{ticket.status}</TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(ticket.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;