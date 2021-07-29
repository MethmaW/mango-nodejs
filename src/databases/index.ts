import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database }: dbConfig = config.get('dbLocalConfig');

const dbusername: string = process.env.ATLAS_USER
const dbuserpassword: string = process.env.ATLAS_PASSWORD
const dbcluster: string = process.env.ATLAS_CLUSTER
const dbname: string = process.env.ATLAS_NAME


const localurl: string = `mongodb://${host}:${port}/${database}`
const atlasurl: string = `mongodb+srv://${dbusername}:${dbuserpassword}@${dbcluster}.mongodb.net/${dbname}`

const dbenv: string = process.env.NODE_ENV;

export const dbConnection = {
  url: atlasurl,
  options: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
