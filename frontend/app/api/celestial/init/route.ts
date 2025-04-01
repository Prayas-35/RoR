import { NextResponse, NextRequest } from "next/server";
import { config } from "@/lib/config";

export async function POST(request: NextRequest) {
  const celestials = config.celestials;
  const initialCelestials = celestials
    .filter((c) => c.tier === 3)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // Return basic info immediately without waiting for generation
  const basicCelestialsData = initialCelestials.map((c) => ({
    name: c.name,
    description: c.description,
    image: null, // Will be populated later
    attributes: [
      {
        trait_type: "Type",
        value: c.type,
      },
      {
        trait_type: "Tier",
        value: c.tier,
      },
      ...Object.entries(c.buffs).map(([name, value]) => ({
        trait_type: name,
        value: value,
      })),
      ...Object.entries(c.spells).map(([name, value]) => ({
        trait_type: name,
        value: value,
      })),
    ],
    properties: {
      category: "celestial",
      rarity_score:
        c.tier === 1
          ? 90 + Math.floor(Math.random() * 10)
          : c.tier === 2
            ? 60 + Math.floor(Math.random() * 20)
            : 20 + Math.floor(Math.random() * 10),
    },
  }));

  return NextResponse.json(basicCelestialsData);
}
