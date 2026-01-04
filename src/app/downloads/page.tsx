import { ArrowRight, Download, FileText, Presentation, BookOpen, ClipboardList } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Downloads',
  description:
    'Download our brochures, capability statements, and other resources to learn more about our workplace health and safety services.',
};

const DOWNLOADS = [
  {
    title: 'Company Brochure',
    description:
      'An overview of Eternal Safety Solutions, our services, and how we help businesses build safer workplaces.',
    icon: Presentation,
    file: '/downloads/ess-brochure.pdf',
    format: 'PDF',
    size: '2.4 MB',
  },
  {
    title: 'Capability Statement',
    description:
      'A detailed document outlining our qualifications, experience, and the full range of WHS services we provide.',
    icon: FileText,
    file: '/downloads/ess-capability-statement.pdf',
    format: 'PDF',
    size: '1.8 MB',
  },
  {
    title: 'Services Guide',
    description:
      'Comprehensive guide to our ISO certification, risk management, training, and compliance services.',
    icon: BookOpen,
    file: '/downloads/ess-services-guide.pdf',
    format: 'PDF',
    size: '3.1 MB',
  },
  {
    title: 'WHS Compliance Checklist',
    description:
      'A practical checklist to help you assess your current workplace health and safety compliance status.',
    icon: ClipboardList,
    file: '/downloads/ess-whs-checklist.pdf',
    format: 'PDF',
    size: '520 KB',
  },
];

export default function DownloadsPage() {
  return (
    <main className="bg-obsidian min-h-screen">
      {/* Hero */}
      <section className="border-border relative border-b px-2.5 pt-32 pb-20 md:pt-40 md:pb-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <p className="text-muted-foreground text-sm tracking-widest uppercase">
            Resources
          </p>
          <h1 className="text-foreground mt-4 max-w-3xl text-4xl font-medium tracking-tight md:text-5xl lg:text-6xl">
            Downloads
          </h1>
          <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed">
            Access our brochures, capability statements, and helpful resources
            to learn more about how we can support your workplace safety needs.
          </p>
        </div>
      </section>

      {/* Downloads Grid */}
      <section className="border-border relative border-b px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-px bg-border md:grid-cols-2">
            {DOWNLOADS.map((item) => (
              <div key={item.title} className="bg-obsidian p-8 md:p-10">
                <div className="flex items-start gap-4">
                  <div className="bg-muted/10 border-border flex size-12 shrink-0 items-center justify-center border">
                    <item.icon className="text-foreground size-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-foreground text-xl font-medium">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <span className="text-muted-foreground text-sm">
                        {item.format} • {item.size}
                      </span>
                    </div>
                    <a
                      href={item.file}
                      download
                      className="text-foreground hover:text-foreground/80 mt-4 inline-flex items-center gap-2 text-sm font-medium transition-colors"
                    >
                      <Download className="size-4" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-2.5 py-20 md:py-24 lg:px-0">
        <div className="bg-border pointer-events-none absolute inset-y-0 left-2.5 z-10 w-px lg:left-[calc((100%-1280px)/2)]" />
        <div className="bg-border pointer-events-none absolute inset-y-0 right-2.5 z-10 w-px lg:right-[calc((100%-1280px)/2)]" />

        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-foreground text-3xl font-medium tracking-tight md:text-4xl">
                Need something specific?
              </h2>
              <p className="text-muted-foreground mt-4 max-w-lg leading-relaxed">
                If you're looking for additional information or have questions
                about our services, we'd love to hear from you.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/contact"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
              >
                Get in touch
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
