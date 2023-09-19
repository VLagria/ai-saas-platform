import { Configuration, OpenAIApi } from "openai";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { increaseApiLimit, checkApiLimit } from "@/lib/api-limit";
import { checkSubcription } from "@/lib/subscription";


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(
  req: Request
) { 
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt, amount = 1, resolution = "512x512"  } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!prompt) {
      return new NextResponse("Prompt are required", { status: 402 });
    }

    if (!amount) {
      return new NextResponse("Amount are required", { status: 402 });
    }

    if (!resolution) {
      return new NextResponse("resolution are required", { status: 402 });
    }

    const freeTrial = await checkApiLimit();
    const isPro = await checkSubcription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Your Free Trial has Expired", { status: 403});
    }

    const response = await openai.createImage({
      prompt,
      n: parseInt(amount, 10),
      size: resolution,
    });

    if (!isPro) {
      await increaseApiLimit(); 
    }

    return NextResponse.json(response.data.data);
  } catch (error) {
    console.log('[IMAGE_ERROR]', error);
    return new NextResponse("IMAGE_ERROR Internal Error", { status: 500 });
  }
};