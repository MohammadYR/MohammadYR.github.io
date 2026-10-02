import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { StackMarkIcon } from "@/components/StackMark";
import "@/styles/home.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Mohammad Yousefi";
  }, []);

  return (
    <div className="hm mx-root" lang="en">
      <section className="hm-hero hm-404">
        <div className="hm-wrap">
          <StackMarkIcon size={88} />
          <p className="hm-404-code">404</p>
          <h1 className="hm-title">
            Nothing here<span>.</span>
          </h1>
          <p className="hm-lead">The page you’re looking for doesn’t exist or has moved.</p>
          <Link href="/" className="hm-btn hm-btn-primary">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
