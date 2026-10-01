import { lazy, Suspense } from "react";
import { Route, Switch } from "wouter";
import ErrorBoundary from "@/components/ErrorBoundary";

const Home = lazy(() => import("@/pages/Home"));
const Resume = lazy(() => import("@/components/Resume"));
const NotFound = lazy(() => import("@/pages/NotFound"));

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div className="app-fallback">Loading…</div>}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/resume-en">
            <Resume lang="en" />
          </Route>
          <Route path="/resume-fa">
            <Resume lang="fa" />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
}
