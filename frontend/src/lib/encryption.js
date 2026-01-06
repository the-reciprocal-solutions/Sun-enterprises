const SECRET =
  process.env.REACT_APP_ENCRYPTION_SECRET || "mailtrscbe";

const encoder = new TextEncoder();
const IV = new Uint8Array(16); // static zero-filled IV to match server

function bufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i += 1) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function deriveKey(secret) {
  // Mirror Node: sha256(secret).digest("base64").substring(0, 32)
  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    encoder.encode(secret)
  );
  const hashBytes = new Uint8Array(hashBuffer);
  let binary = "";
  for (let i = 0; i < hashBytes.byteLength; i += 1) {
    binary += String.fromCharCode(hashBytes[i]);
  }
  const hashBase64 = btoa(binary);
  const keyString = hashBase64.substring(0, 32);
  const keyBytes = encoder.encode(keyString);
  return crypto.subtle.importKey(
    "raw",
    keyBytes,
    { name: "AES-CBC" },
    false,
    ["encrypt"]
  );
}

export async function encryptPayload(data) {
  const json = JSON.stringify(data);
  const key = await deriveKey(SECRET);
  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-CBC", iv: IV },
    key,
    encoder.encode(json)
  );
  return bufferToBase64(encrypted);
}

