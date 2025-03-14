import { FC } from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, CardActions, Button, List, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DownloadIcon from '@mui/icons-material/Download';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CodeIcon from '@mui/icons-material/Code';

const pricingTiers = [
  {
    title: 'Basic',
    price: 'Free',
    features: ['Single theme', 'Basic sections', 'PDF download', 'JSON export'],
    buttonText: 'Get Started',
    buttonVariant: 'outlined'
  },
  {
    title: 'Intermediate',
    price: '$9.99',
    features: ['5 themes', 'Advanced sections', 'PDF download', 'JSON export', 'Custom colors'],
    buttonText: 'Try Now',
    buttonVariant: 'contained'
  },
  {
    title: 'Advanced',
    price: '$19.99',
    features: ['All themes', 'Custom sections', 'PDF download', 'JSON export', 'Custom colors', 'Priority support'],
    buttonText: 'Go Pro',
    buttonVariant: 'contained'
  }
];

const Landing: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box component="main" role="main">
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 8, sm: 12, md: 16 },
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              mb: 4,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              fontWeight: 'bold'
            }}
          >
            Create Your Professional CV
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}
          >
            Choose from multiple themes and formats to create a standout resume that gets you noticed
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<PictureAsPdfIcon />}
            >
              Download as PDF
            </Button>
            <Button
              variant="outlined"
              size="large"
              color="inherit"
              startIcon={<CodeIcon />}
            >
              Export as JSON
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 8 }}
        >
          Choose Your Plan
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {pricingTiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={6}
              md={4}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    align="center"
                  >
                    {tier.title}
                  </Typography>
                  <Typography
                    variant="h4"
                    component="div"
                    align="center"
                    sx={{ mb: 3 }}
                  >
                    {tier.price}
                  </Typography>
                  <List dense={isMobile}>
                    {tier.features.map((feature) => (
                      <ListItem key={feature} disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center', pb: 2 }}>
                  <Button
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    size="large"
                    color="primary"
                    startIcon={<DownloadIcon />}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Theme Preview Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, sm: 12 } }}>
        <Typography
          variant="h3"
          component="h2"
          align="center"
          sx={{ mb: 8 }}
          aria-label="CV Theme Previews"
        >
          Beautiful Themes for Your CV
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { title: 'Modern', image: 'https://via.placeholder.com/400x500' },
            { title: 'Professional', image: 'https://via.placeholder.com/400x500' },
            { title: 'Creative', image: 'https://via.placeholder.com/400x500' },
            { title: 'Minimal', image: 'https://via.placeholder.com/400x500' }
          ].map((theme) => (
            <Grid item key={theme.title} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'transform 0.3s ease-in-out'
                  }
                }}
              >
                <Box
                  component="img"
                  src={theme.image}
                  alt={`${theme.title} CV Theme Preview`}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4/5',
                    objectFit: 'cover'
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h3"
                    align="center"
                  >
                    {theme.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Landing;