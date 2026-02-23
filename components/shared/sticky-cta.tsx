"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LeadForm } from "./lead-form";
import { MessageCircle, FileText, X } from "lucide-react";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface StickyCTAProps {
  variant?: "default" | "product";
  productName?: string;
  productId?: string;
}

export function StickyCTA({
  variant = "default",
  productName,
  productId,
}: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormOpen = () => {
    track("leadform_opened", { source: variant, productId });
    setFormOpen(true);
  };

  const handleContactOpen = () => {
    track("contact_advisor_opened", { source: variant, productId });
    setContactOpen(true);
  };

  // Mobile bottom sticky bar
  const MobileCTA = () => (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform duration-300 lg:hidden",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="flex gap-2">
        <Button 
          className="flex-1 bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0 shadow-lg transition-all duration-300" 
          asChild
        >
          <a
            href="https://wa.me/573001234567"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Contactar asesor
          </a>
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <MobileCTA />
    </>
  );
}
