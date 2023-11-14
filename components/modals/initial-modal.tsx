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
      <DialogContent
        className="bg-white text-black p-0 overflow-hidden"
        suppressHydrationWarning
      >
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl font-bold text-center">
            Customize o seu servidor !!
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-500">
            Dê uma personalidade ao seu servidor com um nome e uma foto. Você
            pode alterar depois a qualquer momento.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default InitialModal;
