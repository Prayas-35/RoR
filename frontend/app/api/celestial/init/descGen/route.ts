import { NextResponse, NextRequest } from "next/server";
import { config } from "@/lib/config";
import { generate, generateImage } from "@/functions/generate";

async function postHandler(request: NextRequest) {
  const { celestial } = await request.json();

  const descriptionPrompt = `Create a vivid and unique description of ${
    celestial.name
  }, a ${celestial.type} in ancient mythology.
        Include details about their appearance, powers (${Object.keys(
          celestial.spells
        ).join(", ")}), 
        and special abilities (${Object.keys(celestial.buffs).join(", ")}).
        Place them in an epic and memorable scene that captures their essence.`;

  const generatedDescription = await generate(descriptionPrompt);

  const celestialData = {
    name: celestial.name,
    description: generatedDescription,
    image: "",
    attributes: [
      {
        trait_type: "Type",
        value: celestial.type,
      },
      {
        trait_type: "Tier",
        value: celestial.tier,
      },
      ...Object.entries(celestial.buffs).map(([name, value]) => ({
        trait_type: name,
        value: value,
      })),
      ...Object.entries(celestial.spells).map(([name, value]) => ({
        trait_type: name,
        value: value,
      })),
    ],
    properties: {
      category: "celestial",
      rarity_score:
        celestial.tier === 1
          ? 90 + Math.floor(Math.random() * 10)
          : celestial.tier === 2
            ? 60 + Math.floor(Math.random() * 20)
            : 20 + Math.floor(Math.random() * 10),
    },
    success: true,
  };

  console.log("Generated Celestial Data:", celestialData);

  return NextResponse.json(celestialData);
}

export { postHandler as POST };
