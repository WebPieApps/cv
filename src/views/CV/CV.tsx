import { FC, useState } from 'react';
import { Box, Container, Paper, Typography, Grid, Avatar, Divider, Button } from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CodeIcon from '@mui/icons-material/Code';
import ThemeSelector, { Theme } from '../../components/ThemeSelector/ThemeSelector';
import CVEditor from '../../components/CVEditor/CVEditor';

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

const themes: Theme[] = [
  {
    id: 'modern',
    name: 'Modern',
    preview: 'https://via.placeholder.com/400x500',
    description: 'Clean and contemporary design with emphasis on visual hierarchy'
  },
  {
    id: 'professional',
    name: 'Professional',
    preview: 'https://via.placeholder.com/400x500',
    description: 'Traditional layout perfect for corporate environments'
  },
  {
    id: 'creative',
    name: 'Creative',
    preview: 'https://via.placeholder.com/400x500',
    description: 'Unique design that showcases personality and creativity'
  }
];

const CV: FC = () => {
  const [cvData, setCvData] = useState<CVData>(sampleData);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <CVEditor data={cvData} onChange={setCvData} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Avatar
                src={cvData.basics.image}
                alt={cvData.basics.name}
                sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }}
              />
              <Typography variant="h4" component="h1" gutterBottom>
                {cvData.basics.name}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {cvData.basics.label}
              </Typography>
              <Typography variant="body1" paragraph>
                {cvData.basics.summary}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  startIcon={<PictureAsPdfIcon />}
                >
                  Download PDF
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<CodeIcon />}
                >
                  Export JSON
                </Button>
              </Box>
            </Box>

            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Work Experience
              </Typography>
              {cvData.work.map((work, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="h6" component="h3">
                    {work.position} at {work.company}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {work.startDate} - {work.endDate}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {work.summary}
                  </Typography>
                  {work.highlights.length > 0 && (
                    <Box component="ul" sx={{ pl: 2 }}>
                      {work.highlights.map((highlight, i) => (
                        <Typography
                          key={i}
                          component="li"
                          variant="body2"
                          paragraph
                        >
                          {highlight}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>

            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Education
              </Typography>
              {cvData.education.map((edu, index) => (
                <Box key={index} sx={{ mb: 3 }}>
                  <Typography variant="h6" component="h3">
                    {edu.studyType} in {edu.area}
                  </Typography>
                  <Typography variant="subtitle1">
                    {edu.institution}
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    {edu.startDate} - {edu.endDate}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box component="section" sx={{ mb: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Skills
              </Typography>
              {cvData.skills.map((skill, index) => (
                <Box key={index} sx={{ mb: 2 }}>
                  <Typography variant="subtitle1" gutterBottom>
                    {skill.name} - {skill.level}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {skill.keywords.join(', ')}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CV;