import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects",
    description: "Learn more about Sushant's Projects.",
  };

export default function Projects() {
    return (
        <section className="space-y-6">
            <H1>Projects</H1>
            <section className="space-y-3">
                <H2>Key Projects</H2>
                <p>In my free time, I enjoy building projects to sharpen my skills and explore new technologies. Below are some of my key projects:</p>
                <ul className="list-inside list-disc">
                    <li>
                        <a href="https://ai-journal-1.vercel.app/" className="text-primary hover:underline">
                            Mood - AI-Powered Journaling Platform
                        </a>{" "}
                        - Developed an AI-powered journaling platform using TypeScript, Next.js, and OpenAI. It provides users with sentiment analysis, mood tracking, and custom AI-driven insights from personal journal data.
                    </li>
                    <li>
                        <a href="https://huggingface.co/spaces/sushantK/sarcasm-detector" className="text-primary hover:underline">
                            Sarcasm Detector Extraordinaire
                        </a>{" "}
                        - Engineered a Sarcasm Detector with MLOps automation using Terraform for AWS, MLFlow for experiment tracking, and Evidently for model monitoring. Deployed the Gradio app on HuggingFace.
                    </li>
                    <li>
                        <a href="https://github.com/sushant0709/Building-Game-AI-Project" className="text-primary hover:underline">
                            Game AI with Decision and Behavior Trees
                        </a>{" "}
                        - Developed AI for character movement and pathfinding using decision trees, behavior trees, and machine learning-based decision tree learning in C++ and SFML. Improved AI performance by 20%, enhancing decision-making fordynamic gameplay.
                    </li>
                    <li>
                        <a href="https://fairsplit-simple.web.app/" className="text-primary hover:underline">
                            FairSplit
                        </a>{" "}
                        - Simplified transactions among a group of people using a binary heap data structure, hosted as a web app.
                    </li>
                    <li>
                        <a href="https://github.com/sushant0709/Reinforcement-Learning" className="text-primary hover:underline">
                            Reinforcement Learning Agent
                        </a>{" "}
                        - Developed a Deep-Q-Learning agent to master the MountainCar-v0 game in the Gym environment. Optimized performance through experimentation and parameter tuning.
                    </li>
                    <li>
                        IoT Alert Detection System with ESP32 - Created an ESP32-based IoT system using IR sensors and IFTTT webhooks to send email and text alerts upon detecting human presence at a door.
                    </li>
                </ul>
            </section>
        </section>
    );
}
