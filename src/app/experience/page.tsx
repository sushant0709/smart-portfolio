import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Education & Experience",
    description: "Learn more about Sushant's Education & Experience.",
  };

export default function Experience() {
    return (
        <section className="space-y-6">
            <H1>Education & Experience</H1>
            
            <section className="space-y-3">
                <H2>Education</H2>
                <ul className="list-inside list-disc">
                    <li>
                        <strong>North Carolina State University</strong> - Raleigh, North Carolina<br />
                        Master of Science in Computer Science, GPA: 4.0/4.0 <br />
                        <em>Expected Graduation: May 2025</em>
                        <p>Courses include Software Engineering, Game AI, Operating Systems, Neural Networks, and Cloud Computing.</p>
                    </li>
                    <li>
                        <strong>Netaji Subhas Institute of Technology (Delhi University)</strong> - New Delhi, India<br />
                        Bachelor of Engineering in Electronics & Communication Engineering, GPA: 8.64/10.0 <br />
                        <em>Aug 2016 - May 2020</em>
                        <p>Studied core subjects like Digital Systems Design, Computer Architecture, and Data Structures, gaining a solid foundation in engineering.</p>
                    </li>
                </ul>
            </section>

            <hr className="border-muted" />

            <section className="space-y-3">
                <H2>Work Experience</H2>
                <ul className="list-inside list-disc">
                    <li>
                        <strong>Senzit Inc.</strong> - Raleigh, North Carolina<br />
                        Engineering Intern <br />
                        <em>May 2024 – Present</em>
                        <p>Worked on developing NXP firmware, managing pressure and CAN data efficiently, and sending it to the cloud via MQTT. Enhanced the Senzit Pro dashboard with cutting-edge web technologies, significantly improving user satisfaction.</p>
                    </li>
                    <li>
                        <strong>NXP Semiconductors</strong> - Noida, India<br />
                        Embedded Software Engineer <br />
                        <em>Jul 2020 – Jul 2023</em>
                        <p>Developed security firmware for ARM Cortex-M SoCs, implemented AES-GCM encryption, and improved firmware loading mechanisms, resulting in a 145% increase in code space availability. Filed a patent for a critical memory management technique.</p>
                    </li>
                </ul>
            </section>
        </section>
    );
}
