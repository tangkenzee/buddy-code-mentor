
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProblemSolver from "./pages/ProblemSolver";
import HelpRequest from "./pages/HelpRequest";
import HelpRequests from "./pages/HelpRequests";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Profiles from "./pages/Profiles";
import NotFound from "./pages/NotFound";
import CollaborativeSession from "./pages/CollaborativeSession";
import PairProgramming from "./pages/PairProgramming";
import CollaborationModal from "./components/CollaborationModal";
import { useKeyboardShortcut } from "./hooks/use-keyboard-shortcut";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isCollaborationModalOpen, setIsCollaborationModalOpen] = useState(false);

  useKeyboardShortcut({
    key: 'p',
    onKeyPress: () => setIsCollaborationModalOpen(true),
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/problem/:id" element={<ProblemSolver />} />
        <Route path="/help-request/:id" element={<HelpRequest />} />
        <Route path="/help-requests" element={<HelpRequests />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profiles/:userId" element={<Profiles />} />
        <Route path="/collaborative-solve/:sessionId" element={<CollaborativeSession />} />
        <Route path="/pair-programming" element={<PairProgramming />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <CollaborationModal 
        isOpen={isCollaborationModalOpen}
        onClose={() => setIsCollaborationModalOpen(false)}
      />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
