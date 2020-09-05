const { createClient } = require('./client');

const replaceBucketName = (oldBucketName, newBucketName) => url => {
  return url.replace(`:443/${oldBucketName}`, `:443/${newBucketName}`);
};

const fixImageUrls = async (envfile, oldBucketName, newBucketName) => {
  const client = await createClient(envfile);
  const bucketNameReplacer = replaceBucketName(oldBucketName, newBucketName);

  const db = client.db(process.env.DATABASE_NAME);
  const fileObjects = await db.collection('upload_file').find().toArray();
  const updatePromises = fileObjects.map(({ _id, url }) => {
    return db.collection('upload_file').updateOne(
      { _id },
      {
        $set: {
          url: bucketNameReplacer(url)
        }
      }
    );
  });

  try {
    await Promise.all(updatePromises);
    console.log('success!');
  } catch (error) {
    console.error(error);
  }

  console.log('done!');
  client.close();
};

fixImageUrls('../m3ntorshipcom-fullstack-dev.env', 'm3ntorshipcom-play', 'm3ntorshipcom-dev');
