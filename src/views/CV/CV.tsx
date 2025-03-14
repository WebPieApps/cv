import { FC, useState } from 'react';
import { Box, Container, Paper, Typography, Grid2 as Grid, Avatar, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CodeIcon from '@mui/icons-material/Code';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import ThemeSelector, { Theme } from '../../components/ThemeSelector/ThemeSelector';
import CVEditor from '../../components/CVEditor/CVEditor';
import CVPdf from '../../components/CVPdf/CVPdf';
import { templates } from '../../components/CVTemplates/templates';
import CVPreview from '../../components/CVPreview/CVPreview';
import CVEditorModal from '../../components/CVEditor/CVEditorModal';

export interface CVData {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    summary: string;
    location: {
      city: string;
      countryCode: string;
      address: string;
    };
    profiles: Array<{
      network: string;
      url: string;
    }>;
  };
  work: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
    achievements: string[];
  }>;
  education: Array<{
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    grade: string;
    courses: string[];
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    url: string;
  }>;
  skills: Array<{
    name: string;
    level: string;
    keywords: string[];
  }>;
  languages: Array<{
    language: string;
    fluency: string;
  }>;
  projects: Array<{
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    technologies: string[];
    url: string;
  }>;
  publications: Array<{
    name: string;
    publisher: string;
    releaseDate: string;
    url: string;
    summary: string;
  }>;
  awards: Array<{
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }>;
  volunteer: Array<{
    organization: string;
    position: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }>;
};

const sampleData: CVData = {
  basics: {
    name: "John Doe",
    label: "Senior Software Engineer",
    image: "https://via.placeholder.com/150",
    email: "john@example.com",
    phone: "+1 234 567 890",
    summary: "Innovative Senior Software Engineer with 5+ years of experience in developing scalable web applications and leading development teams. Proven track record in delivering high-performance solutions and mentoring junior developers.",
    location: {
      city: "San Francisco",
      countryCode: "US",
      address: "123 Tech Street"
    },
    profiles: [
      {
        network: "LinkedIn",
        url: "https://linkedin.com/in/johndoe"
      },
      {
        network: "GitHub",
        url: "https://github.com/johndoe"
      }
    ]
  },
  work: [
    {
      company: "Tech Corp",
      position: "Senior Software Engineer",
      startDate: "2020-01",
      endDate: "Present",
      summary: "Led development of cloud-based solutions and mentored junior developers",
      highlights: [
        "Architected and implemented microservices architecture reducing system latency by 40%",
        "Led a team of 5 developers in delivering critical features on time",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ],
      achievements: [
        "Employee of the Year 2021",
        "Successfully delivered 3 major projects under budget"
      ]
    }
  ],
  education: [
    {
      institution: "University of Technology",
      area: "Computer Science",
      studyType: "Bachelor",
      startDate: "2015",
      endDate: "2019",
      grade: "3.8 GPA",
      courses: [
        "Advanced Algorithms",
        "Software Engineering",
        "Database Systems"
      ]
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2021",
      url: "https://aws.amazon.com/certification"
    }
  ],
  skills: [
    {
      name: "Programming Languages",
      level: "Expert",
      keywords: ["JavaScript", "TypeScript", "Python", "Java"]
    },
    {
      name: "Technologies",
      level: "Advanced",
      keywords: ["React", "Node.js", "Docker", "Kubernetes"]
    }
  ],
  languages: [
    {
      language: "English",
      fluency: "Native"
    },
    {
      language: "Spanish",
      fluency: "Professional"
    }
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "Built a scalable e-commerce platform handling 10k+ daily users",
      startDate: "2021-03",
      endDate: "2021-12",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      url: "https://project.example.com"
    }
  ],
  publications: [
    {
      name: "Modern Web Architecture",
      publisher: "Tech Journal",
      releaseDate: "2022",
      url: "https://journal.example.com/article",
      summary: "Published article on modern web architecture patterns"
    }
  ],
  awards: [
    {
      title: "Best Innovation Award",
      date: "2021",
      awarder: "Tech Industry Association",
      summary: "Awarded for innovative solution in cloud computing"
    }
  ],
  volunteer: [
    {
      organization: "Code for Good",
      position: "Technical Mentor",
      startDate: "2019",
      endDate: "Present",
      summary: "Mentoring underprivileged students in programming",
      highlights: [
        "Mentored 20+ students",
        "Organized 5 coding workshops"
      ]
    }
  ]
};



const CV: FC = () => {
  const [cvData, setCvData] = useState<CVData>(sampleData);
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* CV Template Section */}
        <Grid size={12} data-testid="cv_template_selection">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <ThemeSelector
              themes={templates}
              selectedTheme={selectedTemplate}
              onThemeSelect={setSelectedTemplate}
            />

          </Box>
        </Grid>
        <Grid size={12}>
          {/* CV Navigations Section */}
          <Box data-testid="cv_navigation" sx={{ mt: 4, display: 'flex', gap: 2, justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit CV
            </Button>

            <PDFDownloadLink
              document={<CVPdf data={cvData} templateId={selectedTemplate} />}
              fileName={`${cvData.basics.name.split(' ').join('_')}_cv.pdf`}
            >
              {({ loading }) => (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<PictureAsPdfIcon />}
                  disabled={loading}
                >
                  {loading ? 'Generating PDF...' : 'Download PDF'}
                </Button>
              )}
            </PDFDownloadLink>
            <Button
              variant="outlined"
              startIcon={<CodeIcon />}
              onClick={() => {
                const jsonString = JSON.stringify(cvData, null, 2);
                const blob = new Blob([jsonString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'cv.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
              }}
            >
              Export JSON
            </Button>
          </Box>

          {/* CV Preview Section */}
          <Box mt={2} data-testid="cv_preview">
            <CVPreview data={cvData} templateId={selectedTemplate} />
          </Box>

        </Grid>
      </Grid>
      <CVEditorModal
        open={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        data={cvData}
        onChange={setCvData}
      />
    </Container>
  );
};

export default CV;