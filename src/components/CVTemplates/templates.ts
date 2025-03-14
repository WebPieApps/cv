import { Styles } from '@react-pdf/renderer';

export interface CVTemplate {
  id: string;
  name: string;
  preview: string;
  description: string;
  styles: Styles;
}

export const templates: CVTemplate[] = [
  {
    id: 'modern',
    name: 'Modern',
    preview: '/previews/modern.svg',
    description: 'A clean and contemporary design with emphasis on readability',
    styles: {
      page: {
        padding: 30,
        fontFamily: 'Helvetica',
      },
      header: {
        marginBottom: 20,
        textAlign: 'center',
      },
      name: {
        fontSize: 24,
        marginBottom: 5,
        color: '#2196F3',
      },
      label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 10,
      },
      summary: {
        fontSize: 12,
        marginBottom: 20,
        lineHeight: 1.5,
      },
      section: {
        marginBottom: 15,
      },
      sectionTitle: {
        fontSize: 16,
        marginBottom: 10,
        backgroundColor: '#f0f0f0',
        padding: 5,
        color: '#2196F3',
      },
      workItem: {
        marginBottom: 10,
      },
      workTitle: {
        fontSize: 14,
        marginBottom: 5,
        color: '#333',
      },
      workDates: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
      },
      workSummary: {
        fontSize: 12,
        marginBottom: 5,
        lineHeight: 1.4,
      },
      highlight: {
        fontSize: 12,
        marginLeft: 10,
        marginBottom: 2,
      },
    },
  },
  {
    id: 'classic',
    name: 'Classic',
    preview: '/previews/classic.svg',
    description: 'Traditional and professional layout suitable for all industries',
    styles: {
      page: {
        padding: 40,
        fontFamily: 'Times-Roman',
      },
      header: {
        marginBottom: 25,
        textAlign: 'left',
      },
      name: {
        fontSize: 26,
        marginBottom: 8,
        color: '#000',
      },
      label: {
        fontSize: 18,
        color: '#333',
        marginBottom: 12,
      },
      summary: {
        fontSize: 12,
        marginBottom: 25,
        lineHeight: 1.6,
      },
      section: {
        marginBottom: 20,
      },
      sectionTitle: {
        fontSize: 18,
        marginBottom: 12,
        borderBottom: '1pt solid #000',
        paddingBottom: 4,
      },
      workItem: {
        marginBottom: 15,
      },
      workTitle: {
        fontSize: 14,
        marginBottom: 6,
        fontWeight: 'bold',
      },
      workDates: {
        fontSize: 12,
        color: '#333',
        marginBottom: 6,
      },
      workSummary: {
        fontSize: 12,
        marginBottom: 6,
        lineHeight: 1.5,
      },
      highlight: {
        fontSize: 12,
        marginLeft: 12,
        marginBottom: 3,
      },
    },
  },
];