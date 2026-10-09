"use client";

import React from "react";
import {
  Code2,
  Bot,
  Package,
  Cloud,
  GraduationCap,
  Wrench,
  Search,
  Layers,
  FlaskConical,
  Rocket,
  Building2,
  Link2,
  MapPin,
  Cpu,
  Globe,
  Hotel,
  Compass,
  Home,
  UserCheck,
  ShieldCheck,
  Factory,
  Cog,
  BookOpen,
  Sprout,
  Car,
  Wallet,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Star,
  CheckCircle2,
  Calendar,
  User,
  Quote,
  Menu,
  X,
  Sparkles,
  Lock,
  Clock,
  Mail,
} from "lucide-react";

const ICON_MAP = {
  // Services
  software: Code2,
  ai: Bot,
  saas: Package,
  cloud: Cloud,
  training: GraduationCap,
  consulting: Wrench,

  // Process Steps
  scope: Search,
  design: Layers,
  test: FlaskConical,
  ship: Rocket,

  // Corporate / Facts
  registration: Building2,
  group: Link2,
  location: MapPin,
  focus: Cpu,

  // Projects
  hotel: Hotel,
  globe: Globe,
  compass: Compass,
  realestate: Home,
  profile: UserCheck,
  cyber: ShieldCheck,
  industrial: Factory,
  engineering: Cog,
  vte: BookOpen,
  farming: Sprout,
  mobility: Car,
  fintech: Wallet,

  // UI Utilities
  arrow: ArrowRight,
  arrowright: ArrowRight,
  external: ExternalLink,
  chevron: ChevronRight,
  chevrondown: ChevronDown,
  star: Star,
  check: CheckCircle2,
  calendar: Calendar,
  user: User,
  quote: Quote,
  menu: Menu,
  close: X,
  sparkle: Sparkles,
  lock: Lock,
  clock: Clock,
  mail: Mail,
  cog: Cog,
};

export default function AppIcon({ name, size = 20, className = "", strokeWidth = 1.75 }) {
  const IconComponent = ICON_MAP[name.toLowerCase()] || Cpu;
  return <IconComponent size={size} className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
