import Image from 'next/image'; 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import local images
import interestImage1 from '@/app/images/interest1.jpg'; 
import interestImage2 from '@/app/images/interest2.png';
import interestImage3 from '@/app/images/interest3.jpg';
import interestImage4 from '@/app/images/interest4.jpg';
import interestImage5 from '@/app/images/interest5.jpg';
import interestImage6 from '@/app/images/interest6.jpg';

export default function InterestsPage() {
  const interests = [
    {
      title: 'Soccer',
      description: 'Passionate about playing and watching soccer. Manchester United supporter.',
      imageSrc: interestImage1, 
    },
    {
      title: 'Basketball',
      description: 'Enjoy playing pickup basketball games and keeping up with the NBA, especially the Los Angeles Lakers.',
      imageSrc: interestImage2, 
    },
    {
      title: 'Traveling',
      description: 'Exploring new cultures and places is a major hobby of mine. Some of my favorite destinations include Italy, France, Spain, and Japan.',
      imageSrc: interestImage3, 
    },
    {
      title: 'Trying New Cuisines',
      description: 'Always excited to try new foods and restaurants, from street food to fine dining.',
      imageSrc: interestImage4, 
    },
    {
      title: 'Poker',
      description: 'Hard to beat a Friday night playing Poker with friends. I enjoy the mix of strategy, laughs, and good company!',
      imageSrc: interestImage5, 
    },
    {
      title: 'Chasing Sunsets',
      description: 'A little perk of going to college in Los Angeles. :)',
      imageSrc: interestImage6, 
    },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Interests & Hobbies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {interests.map((interest, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            {/* Apply aspect ratio instead of fixed height */}
            <div className="relative w-full bg-muted aspect-[4/3]"> 
              <Image 
                src={interest.imageSrc} 
                alt={`${interest.title}`}
                fill 
                className="object-cover" 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" 
                placeholder="blur" 
              />
            </div>
            <CardHeader className="text-center"> 
              <CardTitle className="text-xl font-semibold text-accent-foreground mt-2">{interest.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow"> 
              <p className="text-muted-foreground">{interest.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
