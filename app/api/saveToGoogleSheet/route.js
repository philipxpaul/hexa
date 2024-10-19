import { google } from 'googleapis';

export async function POST(req, res) {
  // Log to verify route handling
  console.log("Handling request in route.js");

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Destructuring the request body
  const { category, name, organization, email, message } = await req.json(); // Correcting here to use await req.json()

  // Check if all required fields are present
  if (!category || !name || !organization || !email) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    // Setup Google Sheets API credentials
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // Append data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:E', // Update the range according to your sheet
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[category, name, organization, email, message]],
      },
    });

    // Send success response
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    // Log error and send response
    console.error('Error appending data to Google Sheets:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
