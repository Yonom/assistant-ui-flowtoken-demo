"use client";

import {
  TextContentPartComponent,
  Thread,
  useMessageContext,
} from "@assistant-ui/react";

import { StreamText } from "flowtoken";

const Text: TextContentPartComponent = ({ part }) => {
  const { useMessage } = useMessageContext();
  const messageId = useMessage((m) => m.message.id);
  return <StreamText key={messageId} content={part.text} />;
};

export default function Home() {
  return (
    <main className="h-full">
      <Thread assistantMessage={{ components: { Text } }} />
    </main>
  );
}
