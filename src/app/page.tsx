import Image from "next/image";
import { H1 } from "../components/ui/H1";
import { H2 } from "../components/ui/H2";
import {Bot} from "lucide-react";
import me from "@/assets/me.jpeg";

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-20">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start py-10">Hi, I&apos;m Sushant 👋</H1>
          <p className="text-center sm:text-start">I&apos;m a graduate student in Computer Science with a passion for Software Engineering and Data Engineering.</p>
          <p className="text-center sm:text-start">I love to work on projects that challenge me and help me grow as a developer.</p>

          <p className="text-center sm:text-start">I am open to Full-Time roles related to Software Engineering or AI/Data starting from May 2025, anywhere in US.</p>

        </div>
        <div className="flex justify-center">
          <Image 
            src={me}
            alt="A photo of me"
            height={300}
            width={300}
            className="rounded-full aspect-square border-2 object-cover shadow-md dark:border-foreground"
          />
        </div>
      </section>
      <section className="space-y-3 text-center">
        <H2>Ask the chatbot anything about me</H2>
        <p>
          Click the little <Bot className="inline pb-1" /> icon in the top bar to enable the AI chat. You can ask the chatbot anything about me, my projects, or anything else you&apos;d like to know.
        </p>
      </section>
    </section>
  );
}
