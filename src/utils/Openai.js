import OpenAI from "openai";
import { OPEN_API } from "./contants";
const client = new OpenAI({
    apiKey: process.env[OPEN_API], // This is the default and can be omitted
  });

export default client;