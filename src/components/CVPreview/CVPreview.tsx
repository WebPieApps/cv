import { FC } from 'react';
import { Box, Typography, Paper, Grid, Chip, Divider } from '@mui/material';
import { CVData } from '../../views/CV/CV';
import { templates } from '../CVTemplates/templates';
import { SxProps, Theme } from '@mui/system';

interface CVPreviewProps {
  data: CVData;
  templateId: string;
}

type StyleProps = {
  [key: string]: SxProps<Theme>;
};

const CVPreview: FC<CVPreviewProps> = ({ data, templateId }) => {
  const selectedTemplate = templates.find(template => template.id === templateId) || templates[0];

  return (
    <Paper elevation={3} sx={{ p: { xs: 3, sm: 4, md: 5 }, maxWidth: '800px', mx: 'auto', bgcolor: '#fff' }}>
      <Box sx={{ mb: { xs: 4, sm: 5 } }}>
        <Typography variant="h3" sx={{ mb: 2.5, color: selectedTemplate.id === 'modern' ? '#2196F3' : '#000', fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' } }}>
          {data.basics.name}
        </Typography>
        <Typography variant="h5" sx={{ mb: 2, color: selectedTemplate.id === 'modern' ? '#666' : '#333', fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
          {data.basics.label}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555', fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          {data.basics.email} | {data.basics.phone}
        </Typography>
      </Box>

      <Box sx={{ mb: { xs: 4, sm: 5 } }}>
        <Typography variant="body1" sx={{ color: '#444', lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
          {data.basics.summary}
        </Typography>
      </Box>

      <Box sx={{ mb: { xs: 4, sm: 5 } }}>
        <Typography variant="h5" sx={{ mb: 2, color: selectedTemplate.id === 'modern' ? '#2196F3' : '#000', fontWeight: 600, fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
          Work Experience
        </Typography>
        <Divider sx={{ mb: 3 }} />
        {data.work.map((work, index) => (
          <Box key={index} sx={{ mb: index === data.work.length - 1 ? 0 : { xs: 3, sm: 4 } }}>
            <Typography variant="h6" sx={{ mb: 1, color: '#333', fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
              {work.position} at {work.company}
            </Typography>
            <Typography variant="subtitle2" sx={{ mb: 2, color: '#666', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              {work.startDate} - {work.endDate}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: '#444', lineHeight: 1.8, fontSize: { xs: '0.9rem', sm: '1rem' } }}>
              {work.summary}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {work.highlights.map((highlight, i) => (
                <Typography key={i} variant="body2" sx={{ color: '#555', pl: 2, fontSize: { xs: '0.85rem', sm: '0.9rem' } }}>
                  • {highlight}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ mb: { xs: 4, sm: 5 } }}>
        <Typography variant="h5" sx={{ mb: 2, color: selectedTemplate.id === 'modern' ? '#2196F3' : '#000', fontWeight: 600, fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
          Education
        </Typography>
        <Divider sx={{ mb: 3 }} />
        {data.education.map((edu, index) => (
          <Box key={index} sx={{ mb: index === data.education.length - 1 ? 0 : { xs: 2.5, sm: 3 } }}>
            <Typography variant="h6" sx={{ mb: 1, color: '#333', fontWeight: 600, fontSize: { xs: '1.1rem', sm: '1.2rem' } }}>
              {edu.studyType} in {edu.area}
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 1, color: '#444', fontSize: { xs: '0.9rem', sm: '1rem' } }}>{edu.institution}</Typography>
            <Typography variant="subtitle2" sx={{ color: '#666', fontSize: { xs: '0.8rem', sm: '0.9rem' } }}>
              {edu.startDate} - {edu.endDate}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box>
        <Typography variant="h5" sx={{ mb: 2, color: selectedTemplate.id === 'modern' ? '#2196F3' : '#000', fontWeight: 600, fontSize: { xs: '1.2rem', sm: '1.4rem' } }}>
          Skills
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Grid container spacing={{ xs: 2, sm: 3 }}>
          {data.skills.map((skill, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Typography variant="subtitle1" sx={{ mb: 1.5, color: '#333', fontWeight: 600, fontSize: { xs: '1rem', sm: '1.1rem' } }}>
                {skill.name} - {skill.level}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                {skill.keywords.map((keyword, i) => (
                  <Chip 
                    key={i} 
                    label={keyword} 
                    size="small" 
                    sx={{ 
                      bgcolor: selectedTemplate.id === 'modern' ? '#e3f2fd' : '#f5f5f5',
                      color: selectedTemplate.id === 'modern' ? '#1976d2' : '#333',
                      fontSize: { xs: '0.75rem', sm: '0.8rem' },
                      height: 'auto',
                      py: 0.5
                    }} 
                  />
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Paper>
  );
};

export default CVPreview;