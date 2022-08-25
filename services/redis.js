import { createClient } from "redis";

const config = {
  user: process.env.REDIS_USER || "default",
  pass: process.env.REDIS_PASS,
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT || 6380,
  expire: 30, // seconds
};

const client = createClient({
  url: `redis://${config.user}:${config.pass}@${config.host}:${config.port}`,
});

export const getFromCache = async (endpoint, id, fetch) => {
  await client.connect();
  let data = await client.get(`${endpoint}-${id}`);
  if (data === null) {
    data = await fetch();
    await client.set(`${endpoint}-${id}`, JSON.stringify(data), {
      expire: config.expire,
    });
  }
  await client.quit();
  return data;
};

export const clearCache = async () => {
  await client.connect();
  await client.flushAll("ASYNC");
  await client.quit();
};
