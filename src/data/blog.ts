/**
 * Single source of truth for UAV blog content.
 * Consumed by app/[locale]/blog/[slug]/page.tsx (generateStaticParams) and
 * app/[locale]/sitemap.ts, so sitemap URLs can never drift from real routes.
 */
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  "china-uav-supply-chain-guide": {
    slug: "china-uav-supply-chain-guide",
    title: "The Complete Guide to China's UAV Supply Chain",
    date: "2025-11-15",
    tags: ["Supply Chain", "Manufacturing"],
    excerpt:
      "Understanding the manufacturing ecosystem that produces the majority of the world's commercial drone components.",
    content: `China's UAV manufacturing ecosystem is the most complete in the world. From basic electronic components to sophisticated flight controllers, from carbon fiber airframes to precision-machined gimbal parts — the entire supply chain exists within a 200-kilometer radius of the Pearl River Delta.

## The Four Manufacturing Hubs

### Shenzhen: Electronics & Innovation

Shenzhen is the undisputed capital of consumer electronics and drone innovation. The city houses thousands of PCB manufacturers, component distributors, and UAV R&D centers. DJI, the world's largest drone manufacturer, is headquartered here.

Key capabilities:
- PCB fabrication and assembly
- Flight controller design and production
- Sensor manufacturing (IMU, GPS, ultrasonic)
- Brushless motor production
- Electronic speed controller (ESC) manufacturing

### Dongguan: Precision Machining

Dongguan specializes in high-tolerance CNC machining, injection molding, and industrial connectors. The city's factories produce millions of precision parts annually for the global drone industry.

Key capabilities:
- 5-axis CNC machining (aluminum, titanium, steel)
- Precision injection molding
- Industrial connector manufacturing
- Surface treatment and finishing

### Suzhou: Advanced Materials

Suzhou has emerged as China's advanced materials hub, particularly for carbon fiber and composite fabrication. The city's factories serve aerospace and UAV industries with lightweight, high-strength components.

Key capabilities:
- Carbon fiber layup and fabrication
- Composite material R&D
- Precision mechanical engineering
- Aerospace-grade quality standards

### Changzhou: Wiring & Power Systems

Changzhou is a key manufacturing center for wiring harnesses, cable assemblies, and battery packs. The city's EV battery expertise translates directly to UAV power system applications.

Key capabilities:
- Custom wiring harnesses
- Cable assembly for UAV applications
- Li-Po / Li-Ion battery pack manufacturing
- Power distribution systems

## How to Access This Ecosystem

Navigating China's UAV supply chain alone is challenging. Language barriers, cultural differences, quality variability, and the sheer number of potential suppliers make it difficult for foreign companies to build reliable supply chains.

This is where a supply chain partner becomes essential — providing on-the-ground engineering support, supplier qualification, quality control, and logistics management.`,
  },
  "drone-component-sourcing-strategy": {
    slug: "drone-component-sourcing-strategy",
    title: "5 Strategies for Sourcing Drone Components from China",
    date: "2025-10-28",
    tags: ["Sourcing", "Strategy"],
    excerpt:
      "How to navigate China's component market, qualify suppliers, and build a reliable supply chain for your UAV program.",
    content: `Sourcing drone components from China requires a strategic approach. Here are five proven strategies for building a reliable supply chain.

## 1. Start with Supplier Qualification

Before placing any orders, invest in proper supplier qualification:
- On-site factory audits
- Quality management system review (ISO 9001, AS9100)
- Production capability assessment
- Reference checks with existing customers

## 2. Understand Regional Specialization

Not all manufacturing hubs are equal. Match your requirements to the right region:
- Electronics and PCBs → Shenzhen
- Precision machining → Dongguan
- Carbon fiber and composites → Suzhou
- Wiring harnesses and batteries → Changzhou

## 3. Implement Multi-Tier Quality Control

Quality control should happen at multiple stages:
- Incoming material inspection
- In-line production inspection
- Pre-shipment final inspection
- Third-party testing when required

## 4. Consolidate and Manage Logistics

Managing logistics from multiple factories is complex. Work with a partner who can:
- Consolidate shipments from different suppliers
- Handle export documentation
- Manage customs clearance
- Arrange international freight

## 5. Build Long-Term Relationships

The best supply chains are built on long-term relationships:
- Regular factory visits
- Clear communication of quality expectations
- Fair pricing and payment terms
- Continuous improvement programs

A professional supply chain partner can implement all five strategies on your behalf, giving you one point of contact for the entire process.`,
  },
  "quality-control-uav-manufacturing": {
    slug: "quality-control-uav-manufacturing",
    title: "Quality Control in Chinese UAV Manufacturing: A Practical Framework",
    date: "2025-10-10",
    tags: ["Quality Control", "Manufacturing"],
    excerpt:
      "What to inspect, when to inspect, and how to ensure your Chinese-manufactured drone components meet international standards.",
    content: `Quality control is the most critical aspect of sourcing UAV components from China. Without proper QC processes, even the best-designed components can fail in the field.

## The Three-Stage QC Framework

### Stage 1: Pre-Production
- Technical specification review
- Material verification
- First Article Inspection (FAI)
- Process capability assessment

### Stage 2: In-Production
- In-line inspection at critical process points
- Statistical Process Control (SPC)
- Daily quality reports
- Immediate corrective action when deviations occur

### Stage 3: Pre-Shipment
- AQL sampling inspection
- Dimensional verification
- Functional testing
- Packaging and labeling check
- Final quality documentation

## Critical Inspection Points by Component Type

### Electronic Components
- PCB visual inspection (IPC-A-610)
- Continuity and isolation testing
- X-ray inspection for BGA components
- Environmental stress screening

### Mechanical Components
- Dimensional accuracy (CMM)
- Surface finish verification
- Material certification
- Assembly fit testing

### Carbon Fiber Components
- Visual inspection for delamination
- Ultrasonic testing
- Weight verification
- Structural load testing

## Documentation Requirements

Every shipment should include:
- Certificate of Conformance (CoC)
- Material certifications
- Inspection reports
- Test data
- Traceability records

A qualified supply chain partner manages all of this on your behalf.`,
  },
  "shenzhen-drone-ecosystem": {
    slug: "shenzhen-drone-ecosystem",
    title: "Why Shenzhen Dominates the Global Drone Industry",
    date: "2025-09-22",
    tags: ["Shenzhen", "Industry"],
    excerpt:
      "The unique combination of electronics expertise, manufacturing density, and supply chain speed that makes Shenzhen the world's drone capital.",
    content: `Shenzhen is not just a city — it's an ecosystem. The concentration of electronics expertise, manufacturing capability, and supply chain speed in this single city is unmatched anywhere in the world.

## The Numbers

- Over 90% of the world's consumer drones contain components manufactured in or around Shenzhen
- More than 600 drone-related companies operate in the city
- The electronics market in Huaqiangbei has over 50,000 vendors
- A PCB prototype can be manufactured in 24 hours
- Custom components can go from design to production in under a week

## The Ecosystem Advantage

### Speed
The proximity of component suppliers, PCB manufacturers, assembly houses, and testing facilities means iteration cycles are measured in days, not weeks or months.

### Density
Every component a drone needs — motors, ESCs, flight controllers, cameras, gimbals, batteries, frames — is manufactured within a 50km radius.

### Expertise
Decades of consumer electronics manufacturing have created a deep pool of engineering talent and production expertise that directly transfers to UAV manufacturing.

## How to Leverage Shenzhen

International companies can access this ecosystem through:
1. Direct supplier engagement (requires Chinese-speaking staff)
2. Sourcing agents (variable quality and accountability)
3. Professional supply chain partners (comprehensive service, single point of contact)

The right approach depends on your scale, technical requirements, and long-term strategy.`,
  },
  "carbon-fiber-drone-parts-china": {
    slug: "carbon-fiber-drone-parts-china",
    title: "Carbon Fiber UAV Components: Sourcing from China",
    date: "2025-09-05",
    tags: ["Materials", "Components"],
    excerpt:
      "A procurement guide for carbon fiber airframe parts, including supplier qualification, quality standards, and cost considerations.",
    content: `Carbon fiber is the material of choice for high-performance UAV airframes, offering exceptional strength-to-weight ratio, stiffness, and fatigue resistance. China has become a major producer of carbon fiber components for the global drone industry.

## Types of Carbon Fiber Components

### Structural
- Airframe tubes and booms
- Motor mounts
- Landing gear
- Center plates and frames
- Wing spars

### Aerodynamic
- Propeller blades
- Fairings and cowlings
- Control surfaces

## Manufacturing Processes

### Prepreg Layup + Autoclave
Best for: High-performance, aerospace-grade components
Pros: Highest strength-to-weight, consistent quality
Cons: Higher cost, longer lead times

### Wet Layup + Vacuum Bagging
Best for: Medium-performance, cost-sensitive applications
Pros: Lower tooling cost, good quality
Cons: More variability, requires skilled labor

### Compression Molding
Best for: High-volume production
Pros: Fast cycle times, consistent
Cons: Higher tooling investment

## Quality Standards

Key quality indicators for carbon fiber UAV parts:
- Fiber volume fraction (typically 55-65%)
- Void content (< 1% for aerospace)
- Dimensional tolerance (±0.1mm typical)
- Surface finish (visual inspection)
- Weight consistency (±2% of target)

## Cost Factors

- Material grade (T300 vs T700 vs T800)
- Manufacturing process (autoclave vs wet layup)
- Production volume (tooling amortization)
- Quality requirements (aerospace vs industrial)
- Post-processing (drilling, bonding, coating)

A supply chain partner can help you navigate these variables and find the right manufacturer for your specific carbon fiber requirements.`,
  },
};
