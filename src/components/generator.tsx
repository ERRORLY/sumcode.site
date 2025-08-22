"use client";

import { useState } from "react";
import {
  Lightbulb,
  Code,
  Loader2,
  Clipboard,
  ClipboardCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import axios from "axios";

// Create a custom version of oneDark with your desired background color.
// This ensures that both the <pre> and <code> elements get the dark background.
const customOneDark = {
  ...oneDark,
  'pre[class*="language-"]': {
    // Preserve existing styles, but force the background color
    ...(oneDark['pre[class*="language-"]'] || {}),
    background: "#030303",
  },
  'code[class*="language-"]': {
    // Also explicitly set the background for the inner <code> tag
    ...(oneDark['code[class*="language-"]'] || {}),
    background: "#030303",
  },
  // You might also need to ensure specific token styles don't override the background,
  // though less common for just the background color.
};

function Generator() {
  const [prompt, setPrompt] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [explanation, setExplanation] = useState("");
  const [explainCode, setExplainCode] = useState("");
  const [generatedLanguage, setGeneratedLanguage] = useState("javascript");
  const [isLoadingCode, setIsLoadingCode] = useState(false);
  const [isLoadingExplanation, setIsLoadingExplanation] = useState(false);
  const [copyText, setCopyText] = useState("Copy");
  const { theme } = useTheme();

  const handleGenerateCode = async () => {
    setIsLoadingCode(true);
    setGeneratedCode("");
    setExplanation("");
    setIsLoadingExplanation(false);
    setCopyText("Copy");

    try {
      const res = await axios.post("api/generate-code", { prompt });
      const { code, explanation, language } = res.data;

      setGeneratedCode(code);
      setExplainCode(explanation);
      setGeneratedLanguage(language || "plaintext");
    } catch (error: any) {
      console.error("Error generating code:", error);
      setGeneratedCode(`// Error generating code. Please check your prompt or try again.
// Details: ${error.message || "Unknown error"}`);
      setExplanation(
        "An error occurred while generating code and explanation.",
      );
      setGeneratedLanguage("plaintext");
    } finally {
      setIsLoadingCode(false);
    }
  };

  const handleExplainCode = async () => {
    setIsLoadingExplanation(true);
    setExplanation("");
    setExplanation(
      explainCode || "Explanation is loaded with code generation now!",
    );
    setIsLoadingExplanation(false);
  };

  const handleCopyCode = () => {
    navigator.clipboard
      .writeText(generatedCode)
      .then(() => {
        setCopyText("Copied!");
        setTimeout(() => setCopyText("Copy"), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
        setCopyText("Failed!");
        setTimeout(() => setCopyText("Copy"), 2000);
      });
  };

  return (
    <Card className="w-full max-w-6xl mx-auto shadow-2xl border-0 bg-background/80 backdrop-blur-xl">
      <CardHeader className="text-center pb-8">
        <CardTitle className="font-serif text-3xl font-bold text-foreground flex items-center justify-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
            <Sparkles className="w-7 h-7 text-white" />
          </div>
          AI Code Generator
        </CardTitle>
        <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
          Describe what you want to build, and our AI will generate clean,
          production-ready code with detailed explanations.
        </p>
      </CardHeader>

      <CardContent className="space-y-8">
        <div className="space-y-4">
          <Label
            htmlFor="prompt"
            className="text-lg font-semibold text-foreground flex items-center gap-2"
          >
            <Zap className="w-5 h-5 text-primary" />
            Describe Your Code Requirements
          </Label>
          <Textarea
            id="prompt"
            className="min-h-[140px] text-base bg-input/50 backdrop-blur-sm border-border/50 focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-300 rounded-2xl resize-none shadow-lg"
            placeholder="e.g., 'Create a React component for a user profile card with avatar, name, and bio' or 'Write a Python function to validate email addresses using regex'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={handleGenerateCode}
            disabled={isLoadingCode || !prompt.trim()}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-10 py-5 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:cursor-pointer"
          >
            {isLoadingCode ? (
              <Loader2 className="animate-spin mr-2 w-5 h-5" />
            ) : (
              <Code className="mr-2 w-5 h-5" />
            )}
            {isLoadingCode ? "Generating..." : "Generate Code"}
          </Button>

          <Button
            onClick={handleExplainCode}
            disabled={isLoadingExplanation || !generatedCode}
            variant="outline"
            size="lg"
            className="px-10 py-5 text-lg font-semibold rounded-2xl border-2 border-border/50 hover:bg-accent/10 hover:border-accent/50 transition-all duration-300 bg-background/50 backdrop-blur-sm shadow-lg hover:shadow-xl transform hover:cursor-pointer hover:text-gray-500 dark:hover:text-gray-400"
          >
            {isLoadingExplanation ? (
              <Loader2 className="animate-spin mr-2 w-5 h-5" />
            ) : (
              <Lightbulb className="w-5 h-5 text-primary" />
            )}
            {isLoadingExplanation ? "Explaining..." : "Explain Code"}
          </Button>
        </div>

        {generatedCode && (
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50 shadow-2xl">
            <CardHeader className="flex flex-row items-center justify-between pb-4">
              <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Code className="w-5 h-5 text-primary" />
                Generated Code
              </CardTitle>
              <Button
                onClick={handleCopyCode}
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-accent/10 transition-colors bg-background/50 backdrop-blur-sm border-border/50 rounded-xl"
              >
                {copyText === "Copy" ? (
                  <Clipboard className="w-4 h-4" />
                ) : (
                  <ClipboardCheck className="w-4 h-4" />
                )}
                {copyText}
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="rounded-b-2xl overflow-hidden">
                <SyntaxHighlighter
                  language={generatedLanguage}
                  // Use the customOneDark style which explicitly sets the background
                  style={theme === "dark" ? customOneDark : oneLight}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
                  {generatedCode}
                </SyntaxHighlighter>
              </div>
            </CardContent>
          </Card>
        )}

        {explanation && (
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 shadow-2xl backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-primary" />
                Code Explanation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed whitespace-pre-wrap text-base">
                {explanation}
              </p>
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
}

export default Generator;
