"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const InitialModal = () => {
  return (
    <Dialog open>
      <DialogContent className="bg-white"></DialogContent>
    </Dialog>
  );
};

export default InitialModal;
