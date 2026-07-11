import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Renders migrated service copy (verbatim markdown from the source BLRT sites)
 * with styling that matches the site's design tokens. Plain-text (non-markdown)
 * strings render as ordinary paragraphs, so this also handles un-migrated copy.
 */
export default function ServiceContent({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-[68ch] space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 className="text-2xl font-bold tracking-tighter text-foreground mt-10 first:mt-0 mb-4">{children}</h2>
          ),
          h2: ({ children }) => (
            <h2 className="text-xl font-semibold tracking-tight text-foreground mt-10 first:mt-0 mb-4">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-semibold tracking-tight text-foreground mt-8 first:mt-0 mb-3">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-base text-muted-foreground leading-relaxed">{children}</p>
          ),
          ul: ({ children }) => (
            <ul className="space-y-2 my-2 pl-1">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="space-y-2 my-2 pl-5 list-decimal marker:text-muted-foreground/60">{children}</ol>
          ),
          li: ({ children }) => (
            <li className="text-base text-muted-foreground leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.7em] before:w-1.5 before:h-1.5 before:rounded-full before:bg-brand-red/60 [ol_&]:before:hidden [ol_&]:pl-0">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-foreground">{children}</strong>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-red font-medium hover:text-brand-red/70 underline underline-offset-2 transition-colors"
            >
              {children}
            </a>
          ),
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="text-left font-semibold text-foreground border-b border-border px-3 py-2">{children}</th>
          ),
          td: ({ children }) => (
            <td className="text-muted-foreground border-b border-border/60 px-3 py-2">{children}</td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
