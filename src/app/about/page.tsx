import {H1} from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Florian Walther and his work.",
  };

export default function Page() {
    return (
        <section className="space-y-6">
            <H1>About Me</H1>
            <section className="space-y-3">
                <H2>Who am I?</H2>
                <p>My name is Sushant Khattar a dedicated Computer Science graduate student at  <a href="https://www.csc.ncsu.edu/" className="text-primary hover:underline">NC State University</a>. I am working as an Engineering Intern at <a href="https://senzit.io" className="text-primary hover:underline">Senzit Inc</a>. With a background as an Embedded Software Engineer at NXP Semiconductors, where I specialized in developing Security Firmware, I&apos;ve delved into the intricacies of technology and cybersecurity. My passion extends to a keen interest in Mathematics and the fascinating world of Machine Learning.  </p>
                <p>Currently, I&apos;m expanding my horizons by exploring the realm of web technologies, adding to my repertoire of skills. I&apos;m also passionate about Data Engineering and in my free time, I love to expand my knowledge in this area.</p>
             </section> 
             <hr className="border-muted" />
             <section className="space-y-3">
                <H2>Skills</H2>
                <p>
          I&apos;m a full-stack web developer specializing in{" "}
          <strong>React</strong>, <strong>Next.js</strong>, and{" "}
          <strong>Node.js</strong>.
        </p>
        <p>
          I also have experience with Android development but have stopped
          working with it a few years ago. I prefer web development because you
          can use a modern website on almost every device and reach the whole
          world with it.
        </p>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Side projects</H2>
        <p>
          In my free time, I like to work on side projects to keep my skill
          sharp and try out new tech. Here is a list of my current projects:{" "}
        </p>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://smartdiary.co"
              className="text-primary hover:underline"
            >
              SmartDiary.co
            </a>{" "}
            - An AI-powered journaling app
          </li>
          <li>
            <Link
              href="https://books-ai.app"
              className="text-primary hover:underline"
            >
              Books-AI.app
            </Link>{" "}
            - An AI book recommendation app
          </li>
        </ul>
      </section>
      <hr className="border-muted" />
      <section className="space-y-3">
        <H2>Hobbies</H2>
        <p>
          Besides programming, I love doing sports. I lift weights and do
          Brazilian Jiu-Jitsu. I also enjoy reading books and going out
          sometimes. I think having hobbies other than coding is important for
          mental health.
        </p>
        <p>
          I&apos;m also very much into self-improvement, nutrition, and positive
          psychology.
        </p>
        {/* <Image
          src={bjj}
          alt="Brazilian Jiu-Jitsu group photo"
          className="rounded-md"
        /> */}
      </section>
        </section>
    );
}
