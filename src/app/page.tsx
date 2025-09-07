import { Sparkles, Code2, Zap, Shield, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Generator from "@/components/generator";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-xl font-bold">Sum Code</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                <a
                  className="hidden sm:flex"
                  href="https://github.com/ERRORLY/sumcode.site"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Sum Code
                </a>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5 pt-24">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transform Ideas Into
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent block">
                Perfect Code
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience the future of development with Sum Code. Generate
              production-ready code in any language, get instant explanations,
              and accelerate your projects like never before.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <Generator />
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Why Choose Sum Code?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for developers who demand excellence, speed, and reliability
              in their coding workflow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Lightning Fast
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Generate complex code snippets in seconds. Our AI processes
                  your requirements instantly and delivers optimized solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/60 backdrop-blur-sm ">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Code2 className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Multi-Language
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Support for 50+ programming languages with intelligent syntax
                  highlighting and best practice recommendations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-4">
                  Production Ready
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every generated code follows industry standards, includes
                  error handling, and is optimized for performance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-primary/10 via-background to-accent/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                1M+
              </div>
              <div className="text-muted-foreground text-lg">
                Code Snippets Generated
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-muted-foreground text-lg">
                Programming Languages
              </div>
            </div>
            <div className="group">
              <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                99.9%
              </div>
              <div className="text-muted-foreground text-lg">
                Uptime Guarantee
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-serif text-2xl font-bold">Sum Code</h3>
            </div>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Empowering developers worldwide with intelligent code generation.
            </p>
            <div className="flex justify-center space-x-8 mb-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="mailto:sumcodesite@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Support
              </a>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
              <Star className="w-4 h-4 fill-current text-accent" />
              <span>Made with love for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
