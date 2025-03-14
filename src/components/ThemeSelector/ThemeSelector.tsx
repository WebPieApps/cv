import { FC } from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';

export interface Theme {
  id: string;
  name: string;
  preview: string;
  description: string;
}

interface ThemeSelectorProps {
  themes: Theme[];
  selectedTheme: string;
  onThemeSelect: (themeId: string) => void;
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ themes, selectedTheme, onThemeSelect }) => {
  return (
    <Grid container spacing={3}>
      {themes.map((theme) => (
        <Grid item xs={12} sm={6} md={3} key={theme.id}>
          <Card
            sx={{
              border: theme.id === selectedTheme ? '2px solid primary.main' : 'none',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}
          >
            <CardActionArea onClick={() => onThemeSelect(theme.id)}>
              <CardMedia
                component="img"
                height="140"
                image={theme.preview}
                alt={`${theme.name} theme preview`}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {theme.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {theme.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ThemeSelector;