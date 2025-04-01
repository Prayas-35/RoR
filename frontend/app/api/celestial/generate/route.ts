import { NextResponse, NextRequest } from "next/server";
import { generate, generateImage } from "@/functions/generate";

export async function POST(request: NextRequest) {
  try {
    const { name, type, description, spells, buffs } = await request.json();

    const descriptionPrompt = `Create a vivid and unique description of ${
      name
    }, a ${type} in ancient mythology.
        Include details about their appearance, powers (${Object.keys(
          spells
        ).join(", ")}), 
        and special abilities (${Object.keys(buffs).join(", ")}).
        Place them in an epic and memorable scene that captures their essence.`;

    const generatedDescription = await generate(descriptionPrompt);

    const imagePrompt = `Create a majestic and ethereal illustration of a mythological deity:
      
      Character: ${name}, ${type} of ${description}
      Scene Description: ${generatedDescription}
      
      Art Style Requirements:
      - Divine and otherworldly atmosphere
      - Dramatic lighting with celestial glow
      - Intricate details showing their divine nature
      - Classical mythological art style
      - Background should reflect their domain and powers
      - Epic scale and composition`;

    const imageUrl = await generateImage(imagePrompt);

    return NextResponse.json({
      success: true,
      description: generatedDescription,
      image: imageUrl,
    });
  } catch (error) {
    console.error("Error generating celestial content:", error);
    return NextResponse.json(
      { success: false, error: "Failed to generate celestial content" },
      { status: 500 }
    );
  }
}
