import { NextRequest, NextResponse } from "next/server";
import { generateImage as generateImageFunction } from "@/functions/generate";

const generateImage = async (description: string) => {
  const prompt = `Create a highly detailed Roman marble sculpture-style illustration of the following gladiator character. 
    The artwork should resemble an ancient Roman statue with classical proportions and styling:

    Character Description: ${description}

    Art Style Requirements:
    - Picture should be portrait till the knees
    - Gladiator should be wearing a properly covering metal chainlink armor
    - Realistic skin texture with subtle veins and skin imperfections
    - Classical Roman artistic style with accurate anatomy
    - Dramatic lighting as if displayed in a Roman colosseum
    - Determined expression with intense gaze and wrath
    - Weathered battle-hardenedappearance to show age and battle scars
    - Background should be simple and neutral like an ancient Roman gladiator arena

    The sculpture should capture the character's physical attributes exactly as described while maintaining historical accuracy for ancient Roman gladiator representations.`;
  const imageUrl = await generateImageFunction(prompt);
  return imageUrl;
};

export async function POST(request: NextRequest) {
  let body;
  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
  const { description } = body;
  const imageUrl = await generateImage(description);

  return NextResponse.json({
    imageUrl: imageUrl,
    success: true,
  });
}
