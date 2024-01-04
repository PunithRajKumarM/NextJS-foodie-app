"use client";

import React, { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
}
