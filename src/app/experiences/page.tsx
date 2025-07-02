import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from 'next/image';
import googleLogo from '../images/google_logo.jpeg';
import awsLogo from '../images/aws_logo.jpeg';
import evyreeLogo from '../images/evyree_logo.jpeg'

export default function ExperiencesPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Professional Experience</h1>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        {/* Google Experience */}
        <Card className="relative w-[105%] -ml-[2.5%] hover:shadow-lg transition-shadow duration-300 pt-8">
          {/* Logo Placeholder */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-xs text-muted-foreground">
            <Image src={googleLogo} alt="Google Logo" width={48} height={48} />
          </div>
          <CardHeader className="pt-0 pr-16 md:pr-0">
            <CardTitle className="text-2xl font-semibold text-accent-foreground">Software Engineer Intern</CardTitle>
            <CardDescription className="text-lg font-medium text-primary pt-1">Google | New York, NY | June 2025 – Sept 2025</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Validation AI & Integration Testing Systems</p>
          </CardContent>
        </Card>
        
        {/* AWS Experience */}
        <Card className="relative w-[105%] -ml-[2.5%] hover:shadow-lg transition-shadow duration-300 pt-8">
          {/* Logo Placeholder */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-xs text-muted-foreground">
            <Image src={awsLogo} alt="AWS Logo" width={48} height={48} />
          </div>
          <CardHeader className="pt-0 pr-16 md:pr-0">
            <CardTitle className="text-2xl font-semibold text-accent-foreground">Software Engineer Intern</CardTitle>
            <CardDescription className="text-lg font-medium text-primary pt-1">Amazon Web Services | Arlington, VA | June 2024 – Sept 2024</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Developed a telemetry web app for real-time tracking of logs, metrics, errors, and events in user-facing AWS applications.</p>
          </CardContent>
        </Card>

        {/* Evyree Experience */}
        <Card className="relative w-[105%] -ml-[2.5%] hover:shadow-lg transition-shadow duration-300 pt-8">
          {/* Logo Placeholder */}
          <div className="absolute top-4 right-4 w-12 h-12 bg-muted rounded-sm flex items-center justify-center text-xs text-muted-foreground">
            <Image src={evyreeLogo} alt="Evyree Logo" width={48} height={48} />
          </div>
          <CardHeader className="pt-0 pr-16 md:pr-0">
            <CardTitle className="text-2xl font-semibold text-accent-foreground">Software Engineer Intern</CardTitle>
            <CardDescription className="text-lg font-medium text-primary pt-1">Evyree | Los Angeles, CA | July 2023 – Dec 2023</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Developed a React Native mobile app providing college students with a personalized marketplace for restaurant deals.</p>
          </CardContent>
        </Card>
      </div>

    </main>
  );
}
