import { FC, useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { CVData } from '../../views/CV/CV';

interface CVEditorProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

const CVEditor: FC<CVEditorProps> = ({ data, onChange }) => {
  const [expanded, setExpanded] = useState<string | false>('basics');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const updateBasics = (field: string, value: string) => {
    onChange({
      ...data,
      basics: {
        ...data.basics,
        [field]: value,
      },
    });
  };

  const addWorkExperience = () => {
    onChange({
      ...data,
      work: [
        ...data.work,
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          summary: '',
          highlights: [],
          achievements: [],
        },
      ],
    });
  };

  const updateWorkExperience = (index: number, field: keyof typeof data.work[0], value: string) => {
    const newWork = [...data.work];
    newWork[index] = { ...newWork[index], [field]: value };
    onChange({ ...data, work: newWork });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Accordion
        expanded={expanded === 'basics'}
        onChange={handleChange('basics')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Basic Information</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Full Name"
              value={data.basics.name}
              onChange={(e) => updateBasics('name', e.target.value)}
              fullWidth
            />
            <TextField
              label="Job Title"
              value={data.basics.label}
              onChange={(e) => updateBasics('label', e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              value={data.basics.email}
              onChange={(e) => updateBasics('email', e.target.value)}
              fullWidth
            />
            <TextField
              label="Phone"
              value={data.basics.phone}
              onChange={(e) => updateBasics('phone', e.target.value)}
              fullWidth
            />
            <TextField
              label="Professional Summary"
              value={data.basics.summary}
              onChange={(e) => updateBasics('summary', e.target.value)}
              multiline
              rows={4}
              fullWidth
            />
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'work'}
        onChange={handleChange('work')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {data.work.map((work: typeof data.work[0], index: number) => (
              <Box key={index} sx={{ position: 'relative', p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                  onClick={() => {
                    const newWork = data.work.filter((_, i) => i !== index);
                    onChange({ ...data, work: newWork });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <TextField
                  label="Company"
                  value={work.company}
                  onChange={(e) => updateWorkExperience(index, 'company', e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Position"
                  value={work.position}
                  onChange={(e) => updateWorkExperience(index, 'position', e.target.value)}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    label="Start Date"
                    value={work.startDate}
                    onChange={(e) => updateWorkExperience(index, 'startDate', e.target.value)}
                    fullWidth
                  />
                  <TextField
                    label="End Date"
                    value={work.endDate}
                    onChange={(e) => updateWorkExperience(index, 'endDate', e.target.value)}
                    fullWidth
                  />
                </Box>
                <TextField
                  label="Summary"
                  value={work.summary}
                  onChange={(e) => updateWorkExperience(index, 'summary', e.target.value)}
                  multiline
                  rows={3}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={addWorkExperience}
              variant="outlined"
              sx={{ alignSelf: 'flex-start' }}
            >
              Add Work Experience
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'education'}
        onChange={handleChange('education')}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="h6">Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {data.education.map((edu: typeof data.education[0], index: number) => (
              <Box key={index} sx={{ position: 'relative', p: 2, border: '1px solid', borderColor: 'divider', borderRadius: 1 }}>
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                  onClick={() => {
                    const newEducation = data.education.filter((_, i) => i !== index);
                    onChange({ ...data, education: newEducation });
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <TextField
                  label="Institution"
                  value={edu.institution}
                  onChange={(e) => {
                    const newEducation = [...data.education];
                    newEducation[index] = { ...newEducation[index], institution: e.target.value };
                    onChange({ ...data, education: newEducation });
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Degree"
                  value={edu.studyType}
                  onChange={(e) => {
                    const newEducation = [...data.education];
                    newEducation[index] = { ...newEducation[index], studyType: e.target.value };
                    onChange({ ...data, education: newEducation });
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Field of Study"
                  value={edu.area}
                  onChange={(e) => {
                    const newEducation = [...data.education];
                    newEducation[index] = { ...newEducation[index], area: e.target.value };
                    onChange({ ...data, education: newEducation });
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                />
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <TextField
                    label="Start Date"
                    value={edu.startDate}
                    onChange={(e) => {
                      const newEducation = [...data.education];
                      newEducation[index] = { ...newEducation[index], startDate: e.target.value };
                      onChange({ ...data, education: newEducation });
                    }}
                    fullWidth
                  />
                  <TextField
                    label="End Date"
                    value={edu.endDate}
                    onChange={(e) => {
                      const newEducation = [...data.education];
                      newEducation[index] = { ...newEducation[index], endDate: e.target.value };
                      onChange({ ...data, education: newEducation });
                    }}
                    fullWidth
                  />
                </Box>
                <TextField
                  label="Grade/GPA"
                  value={edu.grade}
                  onChange={(e) => {
                    const newEducation = [...data.education];
                    newEducation[index] = { ...newEducation[index], grade: e.target.value };
                    onChange({ ...data, education: newEducation });
                  }}
                  fullWidth
                  sx={{ mb: 2 }}
                />
              </Box>
            ))}
            <Button
              startIcon={<AddIcon />}
              onClick={() => {
                onChange({
                  ...data,
                  education: [
                    ...data.education,
                    {
                      institution: '',
                      area: '',
                      studyType: '',
                      startDate: '',
                      endDate: '',
                      grade: '',
                      courses: []
                    }
                  ]
                });
              }}
              variant="outlined"
              sx={{ alignSelf: 'flex-start' }}
            >
              Add Education
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default CVEditor;