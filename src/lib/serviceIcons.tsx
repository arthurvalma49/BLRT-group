import {
  Anchor, Ship, Wrench, Zap, Shield, Package, Truck, Layers, Ruler,
  Eye, Globe2, Award, Clock, Waves, Cpu, FileText, Droplets, Magnet,
  TrendingUp, Building2, Gauge, FlaskConical, HardHat, Flame,
} from "lucide-react";
import type { ServiceIcon } from "@/data/businesses";

export const serviceIconMap: Record<ServiceIcon, React.ComponentType<{ className?: string }>> = {
  anchor: Anchor,
  ship: Ship,
  wrench: Wrench,
  zap: Zap,
  shield: Shield,
  package: Package,
  truck: Truck,
  layers: Layers,
  ruler: Ruler,
  eye: Eye,
  globe: Globe2,
  award: Award,
  clock: Clock,
  waves: Waves,
  circuit: Cpu,
  file: FileText,
  droplets: Droplets,
  magnet: Magnet,
  trending: TrendingUp,
  building: Building2,
  gauge: Gauge,
  beaker: FlaskConical,
  "hard-hat": HardHat,
  flame: Flame,
};
