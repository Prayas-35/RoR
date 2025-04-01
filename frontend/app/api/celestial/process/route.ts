import { NextResponse, NextRequest } from "next/server";
import { generate, generateImage } from "@/functions/generate";

export async function POST(request: NextRequest) {
  try {
    const god = await request.json();

    // Create description prompt
    const descriptionPrompt = `Create a vivid and unique description of ${god.name}, a ${god.type} in ancient mythology.
      Include details about their appearance, powers (${Object.keys(god.spells).join(", ")}), 
      and special abilities (${Object.keys(god.buffs).join(", ")}).
      Place them in an epic and memorable scene that captures their essence.`;

    // Generate the description
    const generatedDescription = await generate(descriptionPrompt);

    // Create image prompt
    const imagePrompt = `Create a majestic and ethereal illustration of a mythological deity:
      
      Character: ${god.name}, ${god.type} of ${god.description}
      Scene Description: ${generatedDescription}
      
      Art Style Requirements:
      - Divine and otherworldly atmosphere
      - Dramatic lighting with celestial glow
      - Intricate details showing their divine nature
      - Classical mythological art style
      - Background should reflect their domain and powers
      - Epic scale and composition`;

    // Generate the image
    const imageUrl = await generateImage(imagePrompt);

    // Construct the complete god object
    const processedGod = {
      name: god.name,
      description: generatedDescription,
      image: imageUrl,
      attributes: [
        { trait_type: "Type", value: god.type },
        { trait_type: "Tier", value: god.tier },
        ...Object.entries(god.buffs).map(([name, value]) => ({
          trait_type: name,
          value: value,
        })),
        ...Object.entries(god.spells).map(([name, value]) => ({
          trait_type: name,
          value: value,
        })),
      ],
      properties: {
        category: "celestial",
        rarity_score:
          god.tier === 1
            ? 90 + Math.floor(Math.random() * 10)
            : god.tier === 2
              ? 60 + Math.floor(Math.random() * 20)
              : 20 + Math.floor(Math.random() * 10),
      },
    };

    return NextResponse.json(processedGod);
  } catch (error) {
    console.error("Error processing god:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process god" },
      { status: 500 }
    );
  }
}
