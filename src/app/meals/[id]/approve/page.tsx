// src/app/meals/[id]/approve/page.tsx
"use client";

// 1. Import `use` from React
import React, { useState, use } from "react"; 
import { 
  Container, 
  Paper, 
  Typography, 
  Button, 
  Box, 
  Alert, 
  CircularProgress 
} from "@mui/material";
import { approveMeal } from "@/actions/meal";

export default function ApproveMealPage({ 
  params, 
  searchParams 
}: { 
  // 2. Type them as Promises
  params: Promise<{ id: string }>,
  searchParams: Promise<{ token?: string }> 
}) {
  // 3. Unwrap the promises using React.use()
  const { id: mealId } = use(params);
  const { token } = use(searchParams);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Early return if the link is malformed
  if (!token) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Alert severity="error">
          Invalid link. No authorization token was provided in the URL.
        </Alert>
      </Container>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const result = await approveMeal(mealId, token);
      setSuccess(true);
      setIsSubmitting(false);
    } catch(err){
      if(err instanceof Error){
        setError(err.message);
        setIsSubmitting(false);
      } else throw err;
    }
  };

  if (success) {
    return (
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Alert severity="success" sx={{ mb: 2 }}>
          Meal successfully approved! It is now live.
        </Alert>
        <Button variant="outlined" href="/admin/dashboard" fullWidth>
          Return to Dashboard
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold" color="success.main">
          Approve Meal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Are you sure you want to approve this meal? It will be made visible to the public schedule.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Button
            type="submit"
            variant="contained"
            color="success"
            size="large"
            fullWidth
            disabled={isSubmitting}
            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {isSubmitting ? "Processing..." : "Confirm Approval"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}