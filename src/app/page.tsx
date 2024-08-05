import Image from "next/image";
import { H1 } from "./components/ui/H1";
import me from "@/assets/me.jpeg";

export default function Home() {
  return (
    <section className="space-y-16 bg-[url('/background.png')] bg-cover bg-center bg-no-repeat px-1 py-8">
      <section className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
        <div className="space-y-3">
          <H1 className="text-center sm:text-start">Hi, I&apos;m Sushant 👋</H1>
          <p className="text-center sm:text-start">I&apos;m a graduate student in Computer Science with a passion for Software Engineering and Data Engineering.</p>
          <p className="text-center sm:text-start">I love to work on projects that challenge me and help me grow as a developer.</p>
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
      <section className="space-y">
        
      </section>
    </section>
  );
}
