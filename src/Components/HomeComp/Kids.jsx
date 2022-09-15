import HomeDetails from "./HomeDetails";

const Kids = () => {
  return (
    <div className="bg-black min-h-[300px] py-10 border-b-8 border-[#222] grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="grid place-items-center">
        <img src="https://occ-0-2829-1490.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" />
      </div>
      <div className="grid lg:order-2 place-items-center">
        <HomeDetails
          title="Create profiles for kids."
          description="Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        />
      </div>
    </div>
  );
};

export default Kids;
