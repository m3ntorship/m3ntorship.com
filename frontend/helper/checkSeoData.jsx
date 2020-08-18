export default (seoData,setting) => {
  if (seoData.length && setting.website_url) {
    const {
      seo: {
        path,
        description,
        title,
        open_graph_image: { url: image_url }
      }
    } = seoData[0];
    const {website_url} = setting;

    return (
      <>
        <meta name="description" content={description} />
        <link rel="canonical" href={`${website_url}${path}`} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={`${website_url}${path}`} />
        <meta property="og:image" content={image_url} />
        <meta property="og:description" content={description} />
        <title>{title}</title>
      </>
    );
  }
  return <></>;
};
