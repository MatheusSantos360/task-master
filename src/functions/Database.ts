import mongoose from 'mongoose';

function Database() {
  const connect = async (token: string): Promise<void> => {
    try {
      await mongoose.connect(token);
      console.log('[Database status]: Connected.');
    } catch (error) {
      console.error(error);
    }
  };

  const disconnect = async (): Promise<void> => {
    try {
      await mongoose.disconnect();
      console.log('[Database status]: Disconnected.');
    } catch (error) {
      console.error(error);
    }
  };

  return { connect, disconnect };
}

export default Database;
