import { FC } from 'react';
import { Box, Container, Paper, Typography, Grid, Avatar, Divider } from '@mui/material';

interface CVData {
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
  const data = sampleData;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        {/* Header Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Avatar
            src={data.basics.image}
            alt={data.basics.name}
            sx={{ width: 100, height: 100, mr: 3 }}
          />
          <Box>
            <Typography variant="h4" component="h1">
              {data.basics.name}
            </Typography>
            <Typography variant="h6" color="primary">
              {data.basics.label}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {data.basics.location.address}, {data.basics.location.city}, {data.basics.location.countryCode}
            </Typography>
          </Box>
        </Box>

        {/* Contact Information */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1">
            Email: {data.basics.email}
          </Typography>
          <Typography variant="body1">
            Phone: {data.basics.phone}
          </Typography>
          <Box sx={{ mt: 1 }}>
            {data.basics.profiles.map((profile, index) => (
              <Typography key={index} variant="body1">
                {profile.network}: <a href={profile.url} target="_blank" rel="noopener noreferrer">{profile.url}</a>
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Summary */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Professional Summary
          </Typography>
          <Typography variant="body1">
            {data.basics.summary}
          </Typography>
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Work Experience */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Work Experience
          </Typography>
          {data.work.map((work, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {work.position} at {work.company}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {work.startDate} - {work.endDate}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {work.summary}
              </Typography>
              <Box sx={{ mt: 1 }}>
                <Typography variant="subtitle2">Key Achievements:</Typography>
                <ul style={{ margin: '8px 0' }}>
                  {work.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <Typography variant="subtitle2">Highlights:</Typography>
                <ul style={{ margin: '8px 0' }}>
                  {work.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </Box>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Education */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Education
          </Typography>
          {data.education.map((edu, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {edu.studyType} in {edu.area}
              </Typography>
              <Typography variant="body1">
                {edu.institution}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {edu.startDate} - {edu.endDate}
              </Typography>
              <Typography variant="body2">
                Grade: {edu.grade}
              </Typography>
              {edu.courses.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Key Courses:</Typography>
                  <Typography variant="body2">
                    {edu.courses.join(', ')}
                  </Typography>
                </Box>
              )}
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Certifications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Certifications
          </Typography>
          {data.certifications.map((cert, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {cert.name}
              </Typography>
              <Typography variant="body2">
                Issuer: {cert.issuer} | Date: {cert.date}
              </Typography>
              {cert.url && (
                <Typography variant="body2">
                  <a href={cert.url} target="_blank" rel="noopener noreferrer">View Certificate</a>
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Skills */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Skills
          </Typography>
          {data.skills.map((skill, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {skill.name} - {skill.level}
              </Typography>
              <Typography variant="body1">
                {skill.keywords.join(', ')}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Languages */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Languages
          </Typography>
          {data.languages.map((lang, index) => (
            <Typography key={index} variant="body1">
              {lang.language} - {lang.fluency}
            </Typography>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Projects */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Projects
          </Typography>
          {data.projects.map((project, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {project.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {project.startDate} - {project.endDate}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {project.description}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Technologies: {project.technologies.join(', ')}
              </Typography>
              {project.url && (
                <Typography variant="body2">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Publications */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Publications
          </Typography>
          {data.publications.map((pub, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {pub.name}
              </Typography>
              <Typography variant="body2">
                Published in {pub.publisher} ({pub.releaseDate})
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {pub.summary}
              </Typography>
              {pub.url && (
                <Typography variant="body2">
                  <a href={pub.url} target="_blank" rel="noopener noreferrer">Read Publication</a>
                </Typography>
              )}
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Awards */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            Awards & Achievements
          </Typography>
          {data.awards.map((award, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {award.title}
              </Typography>
              <Typography variant="body2">
                {award.awarder} - {award.date}
              </Typography>
              <Typography variant="body1">
                {award.summary}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 3 }} />

        {/* Volunteer Work */}
        <Box>
          <Typography variant="h6" gutterBottom>
            Volunteer Experience
          </Typography>
          {data.volunteer.map((vol, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight="bold">
                {vol.position} at {vol.organization}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {vol.startDate} - {vol.endDate}
              </Typography>
              <Typography variant="body1" sx={{ mt: 1 }}>
                {vol.summary}
              </Typography>
              {vol.highlights.length > 0 && (
                <Box sx={{ mt: 1 }}>
                  <Typography variant="subtitle2">Highlights:</Typography>
                  <ul style={{ margin: '8px 0' }}>
                    {vol.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default CV;