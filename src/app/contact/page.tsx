import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-8 lg:px-16 flex items-center justify-center min-h-[calc(100vh-10rem)]"> 
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">Get In Touch</CardTitle>
          <CardDescription className="text-muted-foreground pt-2">Feel free to reach out through any of these platforms.</CardDescription>
        </CardHeader>
        <CardContent className="pt-4 pb-8"> 
          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-3 text-secondary" />
              <Link href="mailto:kareemdibs@gmail.com" className="text-foreground hover:text-primary hover:underline transition-colors duration-200">
                kareemdibs@gmail.com
              </Link>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center justify-center">
              <Linkedin className="w-5 h-5 mr-3 text-secondary" />
              <Link href="https://linkedin.com/in/kareem-dibs" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:underline transition-colors duration-200">
                linkedin.com/in/kareem-dibs
              </Link>
            </div>

            {/* GitHub */}
            <div className="flex items-center justify-center">
              <Github className="w-5 h-5 mr-3 text-secondary" />
              <Link href="https://github.com/kareemdibs" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary hover:underline transition-colors duration-200">
                github.com/kareemdibs
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
