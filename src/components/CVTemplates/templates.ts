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
      name: {
        fontSize: 24,
        color: '#2196F3',
        marginBottom: 8
      },
      label: {
        fontSize: 16,
        color: '#666',
        marginBottom: 8
      },
      summary: {
        fontSize: 12,
        lineHeight: 1.6,
        marginBottom: 16
      },
      sectionTitle: {
        fontSize: 16,
        padding: 8,
        color: '#2196F3',
        marginBottom: 8
      },
      workTitle: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 4
      },
      workDates: {
        fontSize: 12,
        color: '#666',
        marginBottom: 4
      },
      workSummary: {
        fontSize: 12,
        lineHeight: 1.5,
        marginBottom: 8,
        width: '100%'
      },
      highlight: {
        fontSize: 12,
        marginBottom: 2,
        width: '100%'
      },
    },
  },
  {
    id: 'classic',
    name: 'Classic',
    preview: '/previews/classic.svg',
    description: 'Traditional and professional layout suitable for all industries',
    styles: {
      name: {
        fontSize: 24,
        color: '#000',
        marginBottom: 8
      },
      label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8
      },
      summary: {
        fontSize: 12,
        lineHeight: 1.6,
        marginBottom: 16
      },
      sectionTitle: {
        fontSize: 16,
        borderBottom: '1pt solid #000',
        paddingBottom: 8,
        marginBottom: 8
      },
      workTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 4
      },
      workDates: {
        fontSize: 12,
        color: '#333',
        marginBottom: 4
      },
      workSummary: {
        fontSize: 12,
        lineHeight: 1.5,
        marginBottom: 8,
        width: '100%'
      },
      highlight: {
        fontSize: 12,
        marginBottom: 2,
        width: '100%'
      },
    },
  },
];