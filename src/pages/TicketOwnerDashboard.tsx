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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const TicketOwnerDashboard = () => {
  const { toast } = useToast();
  const [events] = useState([
    {
      id: 1,
      name: "Summer Music Festival",
      date: "2024-07-15",
      ticketsSold: 150,
      totalCapacity: 200,
      revenue: 7500,
    },
    {
      id: 2,
      name: "Tech Conference 2024",
      date: "2024-08-20",
      ticketsSold: 75,
      totalCapacity: 100,
      revenue: 3750,
    },
  ]);

  const handleCreateEvent = () => {
    toast({
      title: "Not implemented",
      description: "Create event functionality will be added soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Event Management Dashboard</h1>
          <Button onClick={handleCreateEvent}>Create New Event</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Events</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{events.length}</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Total Tickets Sold</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {events.reduce((acc, event) => acc + event.ticketsSold, 0)}
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                ${events.reduce((acc, event) => acc + event.revenue, 0)}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Event Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Tickets Sold</TableHead>
                <TableHead>Capacity</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.name}</TableCell>
                  <TableCell>{event.date}</TableCell>
                  <TableCell>{event.ticketsSold}</TableCell>
                  <TableCell>{event.totalCapacity}</TableCell>
                  <TableCell>${event.revenue}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      event.ticketsSold === event.totalCapacity
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}>
                      {event.ticketsSold === event.totalCapacity ? "Sold Out" : "Available"}
                    </span>
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

export default TicketOwnerDashboard;