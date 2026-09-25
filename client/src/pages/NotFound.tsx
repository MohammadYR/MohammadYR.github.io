import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import "../styles/home.css";

export default function NotFound() {
  return (
    <div className="hm mx-root" lang="en">
      <section className="hm-hero" style={{ minHeight: "100vh", display: "grid", placeItems: "center" }}>
        <div className="hm-wrap" style={{ position: "relative", textAlign: "center" }}>
          <p className="hm-eyebrow">HTTP/1.1 404 Not Found</p>
          <h1 className="hm-title">
            Nothing here<span>.</span>
          </h1>
          <p className="hm-lead" style={{ marginInline: "auto" }}>
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link href="/" className="hm-btn hm-btn-primary">
            <ArrowLeft size={16} /> Back to portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
