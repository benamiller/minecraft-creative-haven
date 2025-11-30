import { GoogleGenAI, Type } from "@google/genai";
import { BuildIdea } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateBuildIdea = async (topic: string): Promise<BuildIdea> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  const model = "gemini-2.5-flash";
  const prompt = `Generate a creative Minecraft build idea based on the topic: "${topic}". 
  Provide a catchy title, a short inspiring description (max 2 sentences), and a suggested theme style (e.g. 'Rustic', 'Cyberpunk').`;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            suggestedTheme: { type: Type.STRING },
          },
          required: ["title", "description", "suggestedTheme"],
        },
      },
    });

    const text = response.text;
    if (!text) {
        throw new Error("No response from AI");
    }
    return JSON.parse(text) as BuildIdea;

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback for demo if API fails or no key
    return {
      title: `The ${topic} Structure`,
      description: "An epic build waiting for your creativity. Try adding more details to your prompt!",
      suggestedTheme: "Freestyle"
    };
  }
};