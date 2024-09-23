// sanity.ts
import { createClient } from "next-sanity";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Your project ID from Sanity
  dataset: "production", // Make sure it's correct
  apiVersion: "2023-01-01", // Date of the latest API version
  useCdn: false, // Set to false for fresh data
});
