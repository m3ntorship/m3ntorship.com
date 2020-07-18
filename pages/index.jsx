const Home = () => {
  return <div className="text-ultra text-c200">Hello World</div>;
};

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default Home;
