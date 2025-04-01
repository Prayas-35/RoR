import { NextResponse, NextRequest } from "next/server";
import { config } from "@/lib/config";
import { generate, generateImage } from "@/functions/generate";

async function postHandler(request: NextRequest) {
  const { celestial } = await request.json();
  const { name, type, description } = celestial;

  const imagePrompt = `Create a majestic and ethereal illustration of a mythological deity:
        
        Character: ${name}, ${type} of ${description}
        Scene Description: ${description}
        
        Art Style Requirements:
        - Divine and otherworldly atmosphere
        - Dramatic lighting with celestial glow
        - Intricate details showing their divine nature
        - Classical mythological art style
        - Background should reflect their domain and powers
        - Epic scale and composition`;

  const imageUrl = await generateImage(imagePrompt);

  const celestialData = {
    image: imageUrl,
    success: true,
  };

  console.log("Generated Celestial Data:", celestialData);

  return NextResponse.json(celestialData);
}

export { postHandler as POST };
