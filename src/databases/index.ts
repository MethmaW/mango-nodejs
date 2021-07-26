import config from 'config';
import { dbConfig } from '@interfaces/db.interface';

const { host, port, database }: dbConfig = config.get('dbLocalConfig');

const dbusername: string = process.env.ATLAS_USER
const dbuserpassword: string = process.env.ATLAS_PASSWORD
const dbcluster: string = process.env.ATLAS_CLUSTER
const dbname: string = process.env.ATLAS_NAME


const localurl: string = `mongodb://${host}:${port}/${database}`
const atlasurl: string = `mongodb+srv://${dbusername}:${dbuserpassword}@${dbcluster}.mongodb.net/${dbname}`

const dbenv: string = process.env.NODE_ENV || 'development';

export const dbConnection = {
  url: dbenv === 'production' ? atlasurl : localurl,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};
