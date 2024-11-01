import mongoose from "mongoose";

function Database() {
  const connect = async (token: string) => {
    try {
      await mongoose.connect(token);
      console.log("[Database status]: Connected.");
    } catch (error) {
      console.error(error);
    }
  };

  const stop = async () => {
    await mongoose.disconnect();
    console.log("[Database status]: Disconnected.");
  };

  return { connect, stop };
}

export default Database;
