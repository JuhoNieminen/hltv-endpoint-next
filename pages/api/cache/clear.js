import { clearCache } from "../../../services/redis";

export default async function handler(req, res) {
  try {
    await clearCache();
    res.status(200).json(true);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.name + ": " + e.message });
  }
}
