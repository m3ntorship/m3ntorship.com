const { createClient } = require('./client');
/*
this script fixes the following error 
[2020-09-05T09:35:17.692Z] error Bootstrap function in plugin "users-permissions" failed
[2020-09-05T09:35:17.692Z] error TypeError: Cannot read property '_id' of null

*/

const fixPermissions = async () => {
  const client = await createClient(envfile);
  const db = client.db(process.env.DATABASE_NAME);
  const roles = await db.collection('users-permissions_role').find().toArray();
  const roleIds = roles.map(({ _id }) => _id);
  await db
    .collection('users-permissions_permission')
    .deleteMany({ role: { $nin: roleIds } });

  client.close();
};
// fixPermissions('../m3ntorshipcom-fullstack-dev.env');
