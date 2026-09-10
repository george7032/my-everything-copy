import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { AdmissionsCta } from "@/components/site/CtaGroup";
import { SITE_URL, school, whatsappLink } from "@/lib/school";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/upper.jpeg";
import kindergartenImg from "@/assets/kindergarten.jpeg";
import lowerPrimaryImg from "@/assets/hero-9.jpeg";
import upperPrimaryImg from "@/assets/upper.jpeg";
import juniorImg from "@/assets/jss.jpeg";
import seniorImg from "@/assets/hero-6.jpeg";

const title = "Our Curriculum — Kindergarten to Senior School | Embakasi Benedicta Academy";
const description =
  "Explore the competency-based curriculum at Embakasi Benedicta Academy in Utawala, Nairobi — Kindergarten, Lower Primary, Upper Primary, Junior School and Senior School (STEM & Social Sciences).";

export const Route = createFileRoute("/academics/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/academics` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/academics` }],
  }),
  component: AcademicsPage,
});

type Curriculum = {
  id: string;
  name: string;
  grades: string;
  image: string;
  summary: string;
  learningAreas: string[];
  skills: string[];
  approach: string[];
  assessment: string[];
  facilities: string[];
  activities?: string[];
  pathways?: string[];
};

const curricula: Curriculum[] = [
  {
    id: "kindergarten",
    name: "Kindergarten",
    grades: "PP1 and PP2",
    image: kindergartenImg,
    summary:
      "A warm, play-rich start to school where young learners build confidence, language and curiosity.",
    learningAreas: [
      "Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Psychomotor and Creative Activities",
      "Religious Education Activities",
    ],
    skills: [
      "Listening and speaking",
      "Reading and writing readiness",
      "Early numeracy",
      "Creativity and self-expression",
      "Fine and gross motor coordination",
      "Social and emotional skills",
      "Personal hygiene and independence",
      "Positive values and behaviour",
    ],
    approach: [
      "Guided play",
      "Songs and storytelling",
      "Educational games",
      "Art and movement",
      "Exploration",
      "Hands-on activities",
      "Interaction with teachers and other learners",
    ],
    assessment: [
      "Teacher observation",
      "Oral activities",
      "Practical tasks",
      "Learner portfolios",
      "Simple individual and group activities",
      "Continuous progress records",
    ],
    facilities: [
      "Age-appropriate classrooms",
      "Reading and activity corners",
      "Outdoor play area",
      "Learning manipulatives",
      "Creative arts materials",
      "Child-friendly washrooms",
    ],
    activities: ["Music and movement", "Art and craft", "Storytelling", "Outdoor games", "Educational trips"],
  },
  {
    id: "lower-primary",
    name: "Lower Primary",
    grades: "Grades 1 to 3",
    image: lowerPrimaryImg,
    summary:
      "Strong foundations in reading, writing and numeracy through activity-based, practical learning.",
    learningAreas: [
      "English Activities",
      "Kiswahili Language Activities",
      "Mathematical Activities",
      "Environmental Activities",
      "Creative Activities",
      "Religious Education",
    ],
    skills: [
      "Reading, writing and comprehension",
      "Communication",
      "Basic numeracy",
      "Problem-solving",
      "Creativity",
      "Environmental awareness",
      "Collaboration",
      "Digital literacy",
      "Personal responsibility",
    ],
    approach: [
      "Activity-based lessons",
      "Guided reading and writing",
      "Use of practical learning materials",
      "Pair and group work",
      "Simple projects",
      "Songs, stories and demonstrations",
      "Learning through the immediate environment",
    ],
    assessment: [
      "Oral questions and responses",
      "Written exercises",
      "Practical activities",
      "Projects",
      "Teacher observation",
      "Portfolios",
      "Continuous competency-based assessment",
    ],
    facilities: [
      "Classrooms",
      "Reading areas or library",
      "ICT resources",
      "Creative arts materials",
      "Outdoor learning spaces",
      "Sports facilities",
    ],
    activities: ["Sports", "Music", "Dance", "Drama", "Art", "Environmental club", "Scouts", "Chess", "Soccer", "Ballet"],
  },
  {
    id: "upper-primary",
    name: "Upper Primary",
    grades: "Grades 4 to 6",
    image: upperPrimaryImg,
    summary:
      "Inquiry, projects and practical learning that deepen literacy, numeracy and scientific thinking.",
    learningAreas: [
      "English",
      "Kiswahili or Kenya Sign Language",
      "Mathematics",
      "Science and Technology",
      "Agriculture and Nutrition",
      "Social Studies",
      "Creative Arts",
      "Religious Education",
    ],
    skills: [
      "Literacy and effective communication",
      "Mathematical reasoning",
      "Scientific inquiry",
      "Creativity and innovation",
      "Research and digital skills",
      "Environmental responsibility",
      "Collaboration and leadership",
      "Practical life skills",
    ],
    approach: [
      "Experiments and demonstrations",
      "Inquiry-based learning",
      "Individual and group projects",
      "Research activities",
      "Presentations and discussions",
      "Practical agriculture and nutrition activities",
      "Integration of technology in learning",
    ],
    assessment: [
      "Written assignments",
      "Practical tasks",
      "Projects",
      "Presentations",
      "Portfolios",
      "Teacher observation",
      "Continuous classroom assessment",
      "National assessment where applicable",
    ],
    facilities: [
      "Science learning resources",
      "ICT laboratory or devices",
      "Library",
      "Agriculture learning area",
      "Creative arts resources",
      "Sports field",
      "Boarding facilities",
    ],
    activities: ["Sports", "Music and drama", "Debate", "Environmental club", "Journalism", "Chess", "Scouts", "Creative arts", "Soccer"],
  },
  {
    id: "junior-school",
    name: "Junior School",
    grades: "Grades 7 to 9",
    image: juniorImg,
    summary:
      "Learners grow into independent thinkers through science, technology, projects and leadership.",
    learningAreas: [
      "English",
      "Kiswahili or Kenya Sign Language",
      "Mathematics",
      "Integrated Science",
      "Social Studies",
      "Pre-Technical Studies",
      "Agriculture and Nutrition",
      "Creative Arts and Sports",
      "Religious Education",
    ],
    skills: [
      "Critical thinking and problem-solving",
      "Scientific investigation",
      "Technical and practical skills",
      "Digital literacy",
      "Communication and presentation",
      "Creativity",
      "Leadership and teamwork",
      "Career awareness",
      "Responsible citizenship",
    ],
    approach: [
      "Laboratory investigations",
      "Practical and technical activities",
      "Research and projects",
      "Group discussions",
      "Problem-based learning",
      "Digital learning",
      "Presentations",
      "Career guidance and talent identification",
    ],
    assessment: [
      "Written assignments and tests",
      "Practical assessments",
      "Projects",
      "Presentations",
      "Portfolios",
      "Teacher observation",
      "Continuous assessment",
      "Kenya Junior School Education Assessment at the end of Grade 9",
    ],
    facilities: [
      "Science laboratory",
      "ICT laboratory",
      "Pre-technical learning resources",
      "Library",
      "Agriculture learning area",
      "Creative arts facilities",
      "Sports facilities",
      "Boarding facilities",
    ],
    activities: ["Sports", "Creative arts", "Debate and public speaking", "STEM", "Environment", "Leadership", "Journalism", "Community service"],
  },
  {
    id: "senior-school",
    name: "Senior School",
    grades: "Grades 10 to 12",
    image: seniorImg,
    summary:
      "At Senior School, learners begin specialising according to their interests, abilities and future aspirations.",
    learningAreas: [],
    skills: [],
    approach: [],
    assessment: [],
    facilities: [],
    pathways: ["STEM", "Social Sciences"],
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground">
      {children}
    </li>
  );
}

function CurriculumSection({ title, items }: { title: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <h4 className="text-sm font-bold uppercase tracking-wide text-primary">{title}</h4>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </ul>
    </div>
  );
}

function CurriculumCard({ curriculum }: { curriculum: Curriculum }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      id={curriculum.id}
      className="overflow-hidden rounded-2xl border border-border bg-card scroll-mt-24"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${curriculum.id}-panel`}
        className="flex w-full items-center gap-4 p-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:gap-6 sm:p-6"
      >
        <img
          src={curriculum.image}
          alt={`${curriculum.name} learners at Embakasi Benedicta Academy`}
          loading="lazy"
          className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
        />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{curriculum.grades}</p>
          <h3 className="mt-1 text-lg font-bold text-foreground sm:text-2xl">{curriculum.name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{curriculum.summary}</p>
        </div>
        <ChevronDown
          aria-hidden="true"
          className={cn("h-6 w-6 shrink-0 text-primary transition-transform", open && "rotate-180")}
        />
      </button>

      {open && (
        <div id={`${curriculum.id}-panel`} className="border-t border-border p-4 sm:p-6">
          {curriculum.pathways ? (
            <div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {curriculum.summary} Embakasi Benedicta Academy currently offers two pathways:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {curriculum.pathways.map((p) => (
                  <li
                    key={p}
                    className="rounded-xl border border-border bg-background p-4 text-center text-base font-bold text-foreground"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="space-y-6">
              <CurriculumSection title="Learning areas" items={curriculum.learningAreas} />
              <CurriculumSection title="Skills learners develop" items={curriculum.skills} />
              <CurriculumSection title="Teaching approach" items={curriculum.approach} />
              <CurriculumSection title="Assessment methods" items={curriculum.assessment} />
              <CurriculumSection title="Facilities supporting learning" items={curriculum.facilities} />
              <CurriculumSection title="Clubs and co-curricular activities" items={curriculum.activities ?? []} />
            </div>
          )}

          <Link
            to="/admissions"
            hash="visit"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Book a School Visit
          </Link>
        </div>
      )}
    </article>
  );
}

function AcademicsPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Academics"
        title="Our Curriculum"
        description="Embakasi Benedicta Academy provides a competency-based education that supports academic achievement, practical skills, creativity, character formation and the holistic development of every learner. The curriculum is delivered through learner-centred, practical and interactive learning experiences designed to nurture each learner's abilities and interests."
        image={heroImage}
        imageAlt="Learners in class at Embakasi Benedicta Academy"
        crumbs={[{ name: "Academics" }]}
      />

      <Section>
        <SectionHeading
          title="Our learning levels"
          description="Choose a level to see the learning areas, skills, teaching approach, assessment and facilities."
        />
        <div className="mx-auto max-w-4xl space-y-6">
          {curricula.map((c) => (
            <CurriculumCard key={c.id} curriculum={c} />
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Discover the right learning journey for your child at Embakasi Benedicta Academy.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Call/WhatsApp:{" "}
            <a href={school.phoneHref} className="font-semibold text-primary underline-offset-4 hover:underline">
              0110 380 560
            </a>
          </p>
          <p className="mt-1 text-base text-muted-foreground">
            Location: {school.address}
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </Section>

      <AdmissionsCta />
    </Layout>
  );
}
