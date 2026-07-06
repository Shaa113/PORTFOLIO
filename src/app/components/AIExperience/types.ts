export type ChatRole = "assistant" | "user";

export type ChatMessage = {
  id: number;
  role: ChatRole;
  content: string;
  streaming?: boolean;
};
