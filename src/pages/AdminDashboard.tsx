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
  const [ticketOwners] = useState([
    {
      id: 1,
      businessName: "Tech Events Ltd",
      ownerName: "John Doe",
      email: "john@techevents.com",
      totalEvents: 3,
      status: "Active",
    },
    {
      id: 2,
      businessName: "Concert Masters",
      ownerName: "Jane Smith",
      email: "jane@concertmasters.com",
      totalEvents: 5,
      status: "Active",
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
          <h1 className="text-2xl font-bold">Ticket Owners Management</h1>
          <Button onClick={() => window.location.href = "/"}>
            Back to Home
          </Button>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Business Name</TableHead>
                <TableHead>Owner Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Total Events</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ticketOwners.map((owner) => (
                <TableRow key={owner.id}>
                  <TableCell>{owner.businessName}</TableCell>
                  <TableCell>{owner.ownerName}</TableCell>
                  <TableCell>{owner.email}</TableCell>
                  <TableCell>{owner.totalEvents}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      owner.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {owner.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(owner.id)}
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