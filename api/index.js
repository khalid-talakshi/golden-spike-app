import express from "express";
import { google } from "googleapis";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8081; // default port to listen
dotenv.config();

app.use(cors());

const auth = await google.auth.getClient({
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets.readonly",
    "https://www.googleapis.com/auth/drive.metadata.readonly",
  ],
  keyFile: process.env.GOOGLE_APPLICATION_CREDENTIALS,
});

const sheets = google.sheets({ version: "v4", auth });

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get("/schedule", async (req, res) => {
  const timesRange = `schedule!A2:H20`;
  const response = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: process.env.SHEET_ID,
    ranges: [timesRange],
  });
  const times = response.data.valueRanges[0].values;
  res.send(times);
});

app.get("/standings", async (req, res) => {
  const standingsRange = `autostandings!A2:H9`;
  const response = await sheets.spreadsheets.values.batchGet({
    spreadsheetId: process.env.SHEET_ID,
    ranges: [standingsRange],
  });
  const standings = response.data.valueRanges[0].values;
  res.send(standings);
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
