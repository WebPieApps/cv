import { FC } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, Styles } from '@react-pdf/renderer';
import { CVData } from '../../views/CV/CV';
import { templates } from '../CVTemplates/templates';

interface CVPdfProps {
  data: CVData;
  templateId: string;
}

const CVPdf: FC<CVPdfProps> = ({ data, templateId }) => {
  const selectedTemplate = templates.find(template => template.id === templateId) || templates[0];
  const styles = StyleSheet.create({
    ...selectedTemplate.styles,
    page: {
      flexDirection: 'column',
      backgroundColor: '#ffffff',
      padding: 30
    },
    header: {
      marginBottom: 20
    },
    section: {
      marginBottom: 10
    },
    workItem: {
      marginBottom: 10
    },
    name: selectedTemplate.styles.name,
    label: selectedTemplate.styles.label,
    summary: selectedTemplate.styles.summary,
    sectionTitle: selectedTemplate.styles.sectionTitle,
    workTitle: selectedTemplate.styles.workTitle,
    workDates: selectedTemplate.styles.workDates,
    workSummary: selectedTemplate.styles.workSummary,
    highlight: selectedTemplate.styles.highlight
  });

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{data.basics.name}</Text>
          <Text style={styles.label}>{data.basics.label}</Text>
          <Text style={styles.summary}>{data.basics.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          {data.work.map((work, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.workTitle}>
                {work.position} at {work.company}
              </Text>
              <Text style={styles.workDates}>
                {work.startDate} - {work.endDate}
              </Text>
              <Text style={styles.workSummary}>{work.summary}</Text>
              {work.highlights.map((highlight, i) => (
                <Text key={i} style={styles.highlight}>
                  • {highlight}
                </Text>
              ))}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {data.education.map((edu, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.workTitle}>
                {edu.studyType} in {edu.area}
              </Text>
              <Text style={styles.workDates}>
                {edu.startDate} - {edu.endDate}
              </Text>
              <Text style={styles.workSummary}>{edu.institution}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          {data.skills.map((skill, index) => (
            <View key={index} style={styles.workItem}>
              <Text style={styles.workTitle}>
                {skill.name} - {skill.level}
              </Text>
              <Text style={styles.workSummary}>
                {skill.keywords.join(', ')}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default CVPdf;