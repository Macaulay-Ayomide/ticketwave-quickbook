import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import Index from "@/pages/Index";
import BookingPage from "@/pages/BookingPage";
import AdminDashboard from "@/pages/AdminDashboard";
import TicketOwnerDashboard from "@/pages/TicketOwnerDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/book/:id" element={<BookingPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/owner-dashboard" element={<TicketOwnerDashboard />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;