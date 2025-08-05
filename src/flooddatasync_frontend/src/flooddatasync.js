import { HttpAgent, Actor } from "@dfinity/agent";
import { idlFactory as flooddatasync_idl, canisterId as flooddatasync_id } from "../../declarations/flooddatasync_backend";

// Create agent
const agent = new HttpAgent({ host: "http://localhost:4943" }); // Or your Internet Identity URL

// Uncomment below in development for local networks
await agent.fetchRootKey();

const floodActor = Actor.createActor(flooddatasync_idl, {
  agent,
  canisterId: flooddatasync_id,
});

export default floodActor;
