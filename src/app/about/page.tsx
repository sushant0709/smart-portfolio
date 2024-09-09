import {H1} from "@/components/ui/H1";
import {H2} from "@/components/ui/H2";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import hobbies from "@/assets/hobbies_collage.png";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about Sushant Khattar.",
  };

export default function Page() {
    return (
      <section className="space-y-6">
        <H1>About Me</H1>
          <section className="space-y-3">
            <H2>Who am I?</H2>
              <p>My name is Sushant Khattar a dedicated Computer Science graduate student at  <a href="https://www.csc.ncsu.edu/" className="text-primary hover:underline">NC State University</a>. I am working as an Engineering Intern at <a href="https://senzit.io" className="text-primary hover:underline">Senzit Inc</a>. With a background as an Embedded Software Engineer at <a href="https://www.nxp.com/" className="text-primary hover:underline">NXP Semiconductors</a>, where I specialized in developing Security Firmware, I&apos;ve delved into the intricacies of technology and cybersecurity. My passion extends to a keen interest in Mathematics and the fascinating world of Machine Learning.  </p>
              <p>Currently, I&apos;m expanding my horizons by exploring the realm of web technologies, adding to my repertoire of skills. I&apos;m also passionate about Data Engineering and in my free time, I love to expand my knowledge in this area.</p>
          </section> 
        <hr className="border-muted" />
        <section className="space-y-3">
          <H2>Skills</H2>
            <p>
              I&apos;m a Software Engineer with extensive experience in{" "}
              <strong>Embedded Systems</strong>, <strong>Firmware Development</strong>,
              and <strong>Full-stack Web Development</strong>. My primary languages
              include <strong>Python</strong>, <strong>C++</strong>,{" "}
              <strong>Typescript</strong>, and <strong>SQL</strong>.
            </p>
            <p>
              I specialize in modern web technologies like{" "}
              <strong>React</strong>, <strong>Next.js</strong>,{" "}
              <strong>Node.js</strong>, and <strong>MongoDB</strong> to build
              dynamic, responsive, and scalable web applications.
            </p>
            <p>
              In addition to web development, I bring expertise in{" "}
              <strong>AI</strong>, <strong>Machine Learning</strong>, and{" "}
              <strong>MLOps</strong>. My work involves creating, deploying, and
              managing AI-driven solutions with <strong>PyTorch</strong>,{" "}
              <strong>Sklearn</strong>, <strong>Keras</strong>, and{" "}
              <strong>MLFlow</strong>, using best practices in CI/CD, containerization
              with <strong>Docker</strong>, and cloud platforms like{" "}
              <strong>AWS</strong> and <strong>Azure</strong>.
            </p>
            <p>
              I’m certified in <strong>Microsoft Azure AI Fundamentals</strong> and
              have a solid background in Infrastructure as Code (IaC) with{" "}
              <strong>Terraform</strong>, enhancing AI projects with{" "}
              <strong>LangChain</strong> and <strong>Mage</strong> for production-grade
              MLOps workflows.
            </p>
        </section>
        <hr className="border-muted" />
        <section className="space-y-3">
          <H2>Hobbies</H2>
            <p>
              I love exploring new places, especially being in nature, whether it’s mountains or beaches. I enjoy traveling around the world, meeting new people, and exploring different cultures.
            </p>
            <p>
              I’m also a big fan of playing and watching sports, ranging from Badminton, Cricket, Football, Pickleball, Table Tennis, and more.
            </p>
            <p>
              Additionally, I love to cook and eat, especially Indian and Chinese cuisine. Cooking and eating delicious food brings peace to my mind.
            </p>
          <Image
            src={hobbies}
            alt="Hobbies Collage"
            width={600}
            className="rounded-md mx-auto"
          />
        </section>
      </section>
    );
}
