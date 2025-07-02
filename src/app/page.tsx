"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import Image from 'next/image';
import mainPic from './images/MainPic.png';
import me1 from './images/me1.jpg';
import me2 from './images/me2.jpg';
import me3 from './images/me3.jpg';
import me4 from './images/me4.jpg';
import me5 from './images/me5.jpg';
import me6 from './images/me6.jpg';
import me7 from './images/me7.jpg';
import me8 from './images/me8.jpg';
import me9 from './images/me9.jpg';
import me10 from './images/me10.jpg';
import me11 from './images/me11.jpg';
import me12 from './images/me12.jpg';
import me13 from './images/me13.jpg';
import me14 from './images/me14.jpg';
import me15 from './images/me15.jpg';
import me16 from './images/me16.jpg';
import me17 from './images/me17.jpg';
import me18 from './images/me18.jpg';
import me19 from './images/me19.jpg';
import me20 from './images/me20.jpg';
import me21 from './images/me21.jpg';
import me22 from './images/me22.jpg';
import uclaLogo from './images/ucla.png';
import { useRef, useState, useEffect } from 'react';

const galleryImages = [
  me1, me2, me3, me4, me5, me6, me7, me8, me9, me10, 
  me11, me12, me13, me14, me15, me16, me17, me18, me19, 
  me20, me21, me22
];

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    // Calculate the boundary where the original images end
    const scrollWidth = scrollContainer.scrollWidth;
    const originalContentWidth = scrollWidth / 2; 

    const startScrolling = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer && !isPaused) {
          // Check if scrollLeft is at or past the end of the original content
          if (scrollContainer.scrollLeft >= originalContentWidth) {
            // Instantly jump back to the beginning (matching position in first set)
            scrollContainer.scrollLeft = scrollContainer.scrollLeft - originalContentWidth;
          } else {
            // Scroll right by 1 pixel
            scrollContainer.scrollLeft += 1; 
          }
        }
      }, 25); // Scroll speed (lower value = faster)
    };

    const stopScrolling = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };

    startScrolling();

    return () => stopScrolling();

  }, [isPaused]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-8 md:p-12 space-y-12">
      {/* Header Section */}
      <header className="text-center w-full max-w-4xl bg-primary py-16 px-10 rounded-lg shadow-lg mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
        {/* Image Placeholder */}
        <Image 
          src={mainPic} 
          alt="Kareem Dibs" 
          width={300} 
          height={300} 
          className="object-cover" 
        />
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 text-light">Kareem Dibs</h1>
          <p className="text-xl md:text-2xl text-light/80">Computer Science Student at UCLA</p>
        </div>
      </header>

      {/* Education Section – now full width */}
      <div className="w-full max-w-4xl">
        <Card className="relative shadow-md hover:shadow-lg transition-shadow duration-300 w-full pt-12">
          <div className="absolute top-4 right-4 w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
            {/* Replace with actual logo */}
            <Image src={uclaLogo} alt="UCLA Logo" width={48} height={48} />
          </div>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3 text-2xl font-semibold text-foreground">
              <GraduationCap className="text-primary" size={28} />
              <span>Education</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-muted-foreground pl-11 pr-6 pb-6">
            <h3 className="text-xl font-semibold text-foreground">University of California, Los Angeles (UCLA)</h3>
            <p className="text-lg">Bachelor of Science in Computer Science | Samueli School of Engineering</p>
            <p><strong className="font-medium text-foreground/90">Relevant Coursework:</strong> Data Structures & Algorithms, Software Construction, Operating Systems, Advanced Algorithms & Complexity, Machine Learning, Artificial Intelligence, Web Applications, Data Science, Linear Algebra, Probability and Statistics, Discrete Math, Theory of Computing, Computer Organization</p>
          </CardContent>
        </Card>
      </div>
      
      {false && (
        <>
          {/* Image Gallery Section (commented out for now) */}
          <section className="w-full max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">Photo Gallery of my Life :)</h2>
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-muted-foreground/50 scrollbar-track-transparent"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            > 
              {galleryImages.map((imgSrc, index) => (
                <div key={index} className="flex-shrink-0 w-[250px] h-[250px] rounded-lg overflow-hidden"> 
                  <Image 
                    src={imgSrc} 
                    alt={`Gallery Image ${index + 1}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover bg-muted"
                    priority={index < 3}
                  />
                </div>
              ))}
              {/* Duplicate images for seamless loop illusion */}
              {galleryImages.map((imgSrc, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 w-[250px] h-[250px] rounded-lg overflow-hidden">
                  <Image
                    src={imgSrc}
                    alt={``}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover bg-muted"
                    loading="lazy"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      

      {/* Footer Section */}
      <footer className="text-center mt-16 text-sm text-muted-foreground/80">
        <p>&copy; {new Date().getFullYear()} Kareem Dibs. All rights reserved.</p>
      </footer>
    </main>
  );
}
