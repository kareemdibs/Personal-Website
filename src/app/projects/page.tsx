import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent-foreground">ClarityCheck</CardTitle>
            <CardDescription className="text-muted-foreground pt-1"><a href="https://github.com/kareemdibs/ClarityCheck">https://github.com/kareemdibs/ClarityCheck</a></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-1 mb-4">
              <span className="font-medium text-foreground/90">Tech:</span> 
              <span className="text-sm text-muted-foreground ml-1">JavaScript, HTML, CSS</span>
            </p>
            <p>Developed a browser extension that utilizes advanced AI reasoning capabilities using Gemini&apos;s API to assess the credibility of news articles and social media posts.</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent-foreground">CPR Trainer</CardTitle>
            <CardDescription className="text-muted-foreground pt-1"><a href="https://github.com/kareemdibs/CPR-Trainer">https://github.com/kareemdibs/CPRTrainer</a></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-1 mb-4">
              <span className="font-medium text-foreground/90">Tech:</span> 
              <span className="text-sm text-muted-foreground ml-1">Python, OpenCV, MediaPipe, NumPy, Pygame</span>
            </p>
            <p>Developed a computer-vision training aid that uses your webcam, OpenCV, and MediaPipe to give real-time feedback while you practice chest compressions and rescue breaths on a mannequin or a consenting volunteer.</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent-foreground">Trial Match</CardTitle>
            <CardDescription className="text-muted-foreground pt-1"><a href="https://github.com/kareemdibs/Trial-Match">https://github.com/kareemdibs/TrialMatch</a></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-1 mb-4">
              <span className="font-medium text-foreground/90">Tech:</span> 
              <span className="text-sm text-muted-foreground ml-1">TypeScript, React, Next.js, Supabase, CSS</span>
            </p>
            <p>Developed a web app that ingests a patient&apos;s Continuity of Care Document (CCD XML), mines key eligibility facts, queries ClinicalTrials.gov v2, and uses GPT-4o to rank & summarize the best recruiting trials within X miles.</p>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent-foreground">CourseBidder</CardTitle>
            <CardDescription className="text-muted-foreground pt-1"><a href="https://github.com/kareemdibs/CourseBidder">https://github.com/kareemdibs/CourseBidder</a></CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mt-1 mb-4">
              <span className="font-medium text-foreground/90">Tech:</span> 
              <span className="text-sm text-muted-foreground ml-1">JavaScript, React, Node.js, MongoDB, Python, HTML, Tailwind CSS</span>
            </p>
            <p>Developed a web app for buying and selling UCLA course seats, addressing limited seat issues.</p>
          </CardContent>
        </Card>
      </div>

    </main>
  );
}
