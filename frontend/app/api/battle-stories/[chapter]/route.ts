import { NextRequest, NextResponse } from "next/server";
import { getBattleStoryByChapter } from "@/lib/services/battleStoryService";

/**
 * GET /api/battle-stories/[chapter]
 * Retrieves a battle story by its chapter number
 */

export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const chapterParam = url.pathname.split("/").pop(); // Extract the chapter from the path

    if (!chapterParam) {
      return NextResponse.json(
        { error: "Chapter parameter is missing" },
        { status: 400 }
      );
    }

    const chapterNumber = parseInt(chapterParam, 10);

    if (isNaN(chapterNumber)) {
      return NextResponse.json(
        { error: "Invalid chapter number" },
        { status: 400 }
      );
    }

    const story = await getBattleStoryByChapter(chapterNumber);

    if (!story) {
      return NextResponse.json(
        { error: `Battle story chapter ${chapterNumber} not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(story);
  } catch (error: any) {
    console.error(`Error retrieving battle story chapter:`, error);
    return NextResponse.json(
      { error: error.message || "Failed to retrieve battle story" },
      { status: 500 }
    );
  }
}
