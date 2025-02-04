import React from "react"; // Import React
import Image from "next/image";
import LinkButton from "../components/LinkButton"; // Assuming LinkButton component exists

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/assets/profile.jpg" alt="Profile Picture" width={150} height={150} />
      <h1 className="text-2xl font-bold mt-4">Your Name</h1>
      <p className="text-center mt-2">This is a short bio about yourself. You can include your interests, skills, and anything else you'd like to share.</p>
      <div className="mt-4">
        <LinkButton text="Project 1" href="/projects/project1" />
        <LinkButton text="Project 2" href="/projects/project2" />
        <LinkButton text="Contact" href="/contact" />
      </div>
    </div>
  );
}
