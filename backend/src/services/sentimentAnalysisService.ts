import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "YOUR_OPENAI_API_KEY",
  });
  
export async function analyzeSentiment(feedbackText: string): Promise<string> {
    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            store: true,
            messages: [
              {"role": "user", "content": "Perform on the following text: " + feedbackText + " and return the sentiment as positive, negative or neutral"},
            ],
          });
        console.log("Sentiment analysis result:", completion);
        return completion.object; // e.g., "positive", "negative", "neutral"
    } catch (error) {
        console.error("Error analyzing sentiment:", error);
        throw new Error("Failed to analyze sentiment");
    }
}