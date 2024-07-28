const HomeTemplate = () => {
  return (
    <div>
      {/* <img className="bg-no-repeat bg-center" src="../img/bgmovie.jpg" alt="" /> */}
      <div className="container background">
        <h2 className="text-white font-extrabold">MOVIE SEAT SELECTION</h2>
        <p className="text-white">
          Fill The Required Details Below And Select Your Seats
        </p>
        {/* INPUT */}
        <div className="flex">
          <h3>Name *</h3>
          <input type="text" />
        </div>
        <br />
        <div className="flex">
          <h3>Number of Seats *</h3>
          <input type="text" />
        </div>
        {/* button */}
        <button className="bg-white border-4 "> Start Selecting </button>
      </div>
    </div>
  );
};

export default HomeTemplate;
