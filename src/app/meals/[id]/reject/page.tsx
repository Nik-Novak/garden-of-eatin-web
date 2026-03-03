"use client";

import React, { use, useState } from "react";
import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Alert, 
  CircularProgress 
} from "@mui/material";
import { rejectMeal } from "@/actions/meal";

export default function RejectMealPage({ 
  params, 
  searchParams 
}: { 
  params: Promise<{ id: string }>,
  searchParams: Promise<{ token?: string }> 
}) {
  const { id: mealId } = use(params);
  const { token } = use(searchParams);

  const [reason, setReason] = useState("");
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

    // Call the Server Action
    try {
      const result = await rejectMeal(mealId, token, reason);
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
          Meal successfully rejected.
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
        <Typography variant="h5" component="h1" gutterBottom fontWeight="bold" color="error">
          Reject Meal
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Please provide a reason for rejecting this meal submission. This may be shared with the submitter.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Rejection Reason"
            placeholder="e.g., The location details are incomplete..."
            multiline
            rows={4}
            fullWidth
            required
            variant="outlined"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            disabled={isSubmitting}
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="error"
            size="large"
            fullWidth
            disabled={isSubmitting || !reason.trim()}
            startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : null}
          >
            {isSubmitting ? "Processing..." : "Confirm Rejection"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}