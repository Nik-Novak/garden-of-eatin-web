
import { Box, Typography, Button, Container, Link } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

type AccessDeniedProps = {
  subject?: string;
}
export default function AccessDenied({subject="this page"}:AccessDeniedProps) {

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          p: 6,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'primary.main',
            color: 'primary.contrastText',
            mb: 3,
            boxShadow: '0 0 20px rgba(25, 118, 210, 0.5)', // Adjust color to your theme
          }}
        >
          <LockOutlinedIcon fontSize="large" />
        </Box>

        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: 700,
            letterSpacing: '-0.02em',
            mb: 2,
          }}
        >
          Access Restricted
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: 'text.secondary',
            mb: 4,
            lineHeight: 1.6,
            maxWidth: '300px',
          }}
        >
          You don’t have the necessary permissions to view {subject}.
        </Typography>

        <Link href='/'>
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              background: 'white',
              color: 'black',
              '&:hover': {
                background: '#e0e0e0',
                transform: 'translateY(-1px)',
              },
              transition: 'all 0.2s ease-in-out',
            }}
          >
            Return Home
          </Button>
        </Link>
      </Box>
    </Container>
  );
}