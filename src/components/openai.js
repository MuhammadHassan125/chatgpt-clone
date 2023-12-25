import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
    apiKey: "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"
});
const openai = new OpenAIApi(config);

export async function sendMessages(message) {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return response.data.choices[0].text;
}
