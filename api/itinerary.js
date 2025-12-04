import { itinerary } from '../src/data/itinerary.js';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(request, response) {
  // Set CORS headers for local development
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests for CORS
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  try {
    // The import statement above handles loading the data.
    // Vercel's build process will bundle the referenced JS file.
    response.status(200).json(itinerary);
  } catch (error) {
    console.error('Failed to load itinerary data:', error);
    response.status(500).json({ error: 'Failed to load itinerary data.' });
  }
}
