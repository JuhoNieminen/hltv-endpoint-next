import { HLTV } from "hltv";
import { getFromCache } from "../../../services/redis";

export default async function handler(req, res) {
  const { id } = req.query;

  try {
    const data = await getFromCache("team", id, () => HLTV.getTeam({ id }));
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.name + ": " + e.message });
  }
}
