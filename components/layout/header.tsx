"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchBar } from "@/components/shared/search-bar";
import {
  Menu,
  ChevronDown,
  Monitor,
  Laptop,
  GraduationCap,
  ShieldCheck,
  Cloud,
  FlaskConical,
  Calculator,
  Wrench,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  {
    name: "Soluciones Apple",
    href: "/apple",
    children: [
      { name: "Apple para empresas", href: "/mac-para-empresas", icon: Laptop },
      { name: "Apple para educación", href: "/apple-educacion", icon: GraduationCap },
      { name: "Catálogo Apple", href: "/mac", icon: Monitor },
    ],
  },
  {
    name: "Portafolio",
    href: "#",
    children: [
      { name: "Soluciones IT", href: "/portafolio/valor-it", icon: ShieldCheck },
      { name: "Soluciones DaaS", href: "/portafolio/daas", icon: Cloud },
      {
        name: "LabPower",
        href: "/labpower",
        icon: FlaskConical,
        children: [
          { name: "Servicios LabPower", href: "/labpower", icon: Wrench },
          { name: "Herramientas", href: "#", icon: Calculator, disabled: true, badge: "Próximamente" },
        ],
      },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const isItemActive = (href: string) => {
    if (href === "/" || href === "#") return pathname === href;
    return pathname.startsWith(href);
  };

  const isLanding =
    pathname === "/portafolio/daas/landing" ||
    pathname === "/labpower/landing" ||
    pathname === "/portafolio/valor-it-landing" ||
    pathname === "/portafolio/viewsonic";

  const isViewSonic = pathname === "/portafolio/viewsonic";

  const isParentActive = (item: any) => {
    if (item.name === "Portafolio") return pathname.startsWith("/portafolio");
    if (item.children) {
      return item.children.some((child: any) => isItemActive(child.href));
    }
    return isItemActive(item.href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" suppressHydrationWarning>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-6">
        {/* Logo - color on light, white on dark */}
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/macpower-logo-original.png"
              alt="MacPower IT Solutions - Apple Business Partner"
              width={320}
              height={60}
              className="h-7 sm:h-8 lg:h-10 w-auto object-contain dark:hidden"
              priority
            />
            <Image
              src="/images/macpower-logo-white.png"
              alt="MacPower IT Solutions - Apple Business Partner"
              width={320}
              height={60}
              className="hidden h-7 sm:h-8 lg:h-10 w-auto object-contain dark:block"
              priority
            />
          </Link>
          
          {/* Apple Badges - transparent background, visible on desktop */}
       
        </div>

        {/* Desktop Navigation */}
        {!isLanding && <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) =>
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground",
                      isParentActive(item) && "text-[#2dd4bf] font-medium"
                    )}
                  >
                    {item.name}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
              <DropdownMenuContent
                  align="start"
                  className="w-64 bg-popover/95 backdrop-blur-xl border border-border/50 shadow-2xl rounded-xl p-2 animate-in fade-in-0 zoom-in-95"
                >
                  {item.children.map((child: any) =>
                    child.children ? (
                      // Child with nested sub-items (e.g. LabPower)
                      <div key={child.name}>
                        <DropdownMenuSeparator className="my-1" />
                        <DropdownMenuLabel className="flex items-center gap-2 px-4 py-1.5 text-xs text-muted-foreground font-semibold uppercase tracking-wider">
                          {child.icon && <child.icon className="h-3.5 w-3.5 text-[#00ffe3]" />}
                          {child.name}
                        </DropdownMenuLabel>
                        {child.children.map((sub: any) => (
                          <DropdownMenuItem key={sub.name} asChild className="focus:bg-transparent p-0">
                            <Link
                              href={sub.href}
                              className={cn(
                                "flex items-center gap-3 cursor-pointer w-full rounded-md px-4 py-2.5 text-sm text-popover-foreground transition-all duration-300",
                                sub.disabled 
                                  ? "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-popover-foreground hover:pl-4" 
                                  : "hover:bg-gradient-to-r hover:from-[#00ffe3] hover:to-[#00a6d6] hover:text-black hover:pl-6 hover:shadow-lg focus:bg-gradient-to-r focus:from-[#00ffe3] focus:to-[#00a6d6] focus:text-black focus:pl-6",
                                mounted && pathname === sub.href && !sub.disabled && "bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] text-black font-medium pl-6 shadow-md"
                              )}
                              onClick={sub.disabled ? (e) => e.preventDefault() : undefined}
                            >
                              <div className="flex items-center gap-3 w-full">
                                {sub.icon && <sub.icon className="h-4 w-4 shrink-0" />}
                                <span>{sub.name}</span>
                                {sub.badge && (
                                  <span className="ml-auto text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                    {sub.badge}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ) : (
                      <DropdownMenuItem key={child.name} asChild className="focus:bg-transparent p-0">
                        <Link
                          href={child.href}
                          className={cn(
                            "flex items-center gap-3 cursor-pointer w-full rounded-md px-4 py-2.5 text-sm text-popover-foreground transition-all duration-300",
                            "hover:bg-gradient-to-r hover:from-[#00ffe3] hover:to-[#00a6d6] hover:text-black hover:pl-6 hover:shadow-lg",
                            "focus:bg-gradient-to-r focus:from-[#00ffe3] focus:to-[#00a6d6] focus:text-black focus:pl-6",
                            mounted && pathname === child.href && "bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] text-black font-medium pl-6 shadow-md"
                          )}
                        >
                          {child.icon && <child.icon className="h-4 w-4 shrink-0" />}
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    )
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                key={item.name}
                variant="ghost"
                asChild
                className={cn(
                  "text-sm text-muted-foreground hover:text-foreground",
                  isItemActive(item.href) && "text-[#2dd4bf] font-medium"
                )}
              >
                <Link href={item.href}>{item.name}</Link>
              </Button>
            )
          )}
        </nav>}

        {/* Right side */}
        <div className="flex items-center gap-3">
          {!isLanding && (
            <div className="hidden lg:block">
              <SearchBar variant="compact" />
            </div>
          )}

          {(!isLanding || isViewSonic) && <ThemeToggle />}

          <Button
            asChild
            size="sm"
            className={cn(
              "font-bold border-0 shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-95",
              isViewSonic
                ? "bg-gradient-to-r from-[#CD2027] to-[#e85960] hover:from-[#b01a20] hover:to-[#CD2027] text-white shadow-[#CD2027]/30 h-auto py-2 text-xs sm:text-sm"
                : "bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black",
              isLanding ? "flex" : "hidden lg:flex"
            )}
          >
            <Link href={isViewSonic ? "#contacto" : "/contacto-empresas"} className="text-center whitespace-normal">
              {isViewSonic ? <><span className="sm:hidden">Asesoría</span><span className="hidden sm:inline">Solicitar asesoría</span></> : "Contáctanos"}
            </Link>
          </Button>

          {/* Mobile menu — hidden on landing */}
          {!isLanding && (
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-background border-border"
              >
                <div className="flex flex-col gap-4 pt-8">
                  <nav className="flex flex-col gap-2">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        {item.children ? (
                          <>
                            <div className="px-3 py-2 text-base font-medium text-foreground">
                              {item.name}
                            </div>
                          <div className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-4">
                              {item.children.map((child: any) =>
                                child.children ? (
                                  <div key={child.name}>
                                    <div className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-[#00ffe3] uppercase tracking-wider">
                                      {child.icon && <child.icon className="h-3 w-3" />}
                                      {child.name}
                                    </div>
                                    <div className="ml-3 flex flex-col gap-0.5 border-l border-border/50 pl-3">
                                      {child.children.map((sub: any) => (
                                        <Link
                                          key={sub.name}
                                          href={sub.href}
                                          onClick={(e) => {
                                            if (sub.disabled) e.preventDefault();
                                            else setMobileOpen(false);
                                          }}
                                          className={cn(
                                            "flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground",
                                            sub.disabled && "opacity-50 cursor-not-allowed hover:bg-transparent hover:text-muted-foreground"
                                          )}
                                        >
                                          {sub.icon && <sub.icon className="h-4 w-4 text-primary" />}
                                          <span>{sub.name}</span>
                                          {sub.badge && (
                                            <span className="ml-auto text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary px-2 py-0.5 rounded-full">
                                              {sub.badge}
                                            </span>
                                          )}
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ) : (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                                  >
                                    {child.icon && <child.icon className="h-4 w-4 text-primary" />}
                                    {child.name}
                                  </Link>
                                )
                              )}
                            </div>
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                          >
                            {item.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </nav>

                  <div className="border-t border-border pt-4 flex flex-col gap-3">
                    <SearchBar variant="full" />
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-[#00ffe3] to-[#00a6d6] hover:from-[#00e6cc] hover:to-[#0090bb] text-black font-bold border-0"
                      onClick={() => setMobileOpen(false)}
                    >
                      <Link href="/contacto-empresas">Contáctanos</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
