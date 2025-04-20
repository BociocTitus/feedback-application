import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: "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",
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