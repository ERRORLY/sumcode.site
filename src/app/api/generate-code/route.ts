// app/api/generate/route.ts (example file path)
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const req = await request.json();
    const prompt = req.prompt;

    // 1. Construct a detailed prompt to guide the AI
    const structuredPrompt = `
You are an expert AI code generator. Your task is to generate code based on a user's request.
Always respond with a single JSON object that contains three keys: "code", "explanation", "language", codePrompt.
The "code" key should contain the raw code snippet.
The "explanation" key should provide a clear and concise explanation of the code.
The "language" key should specify the programming language of the code (e.g., "javascript", "python", "html").
The "codePrompt" key should provide in true or false wether the prompt is related coding or not.

User's request:
${prompt}
    `;

    // 2. Encode the prompt and add the json=true parameter
    const encodedPrompt = encodeURIComponent(structuredPrompt);
    const aiResponse = await axios.get(
      `${process.env.API}/${encodedPrompt}?json=true`,
    );

    // 3. Parse the JSON response and handle potential errors
    try {
      // Axios will often auto-parse JSON, but it's good practice to be explicit
      const { code, explanation, language, codePrompt } = aiResponse.data;
      return NextResponse.json(
        { code, explanation, language, codePrompt },
        { status: 200 },
      );
    } catch (parseError) {
      console.error("Failed to parse JSON response from AI:", parseError);
      return NextResponse.json(
        { error: "AI response was not a valid JSON object." },
        { status: 500 },
      );
    }
  } catch (error: any) {
    console.error("API route error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
