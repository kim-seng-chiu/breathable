import { get } from '../api/route';

export async function gradingAQ() {
  const aqi = await get();
  const displayStyles = "w-40 h-40 rounded-full inline-flex items-center justify-center text-white text-xl font-bold fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"

  /**
   * good < 25              green
   * fair 25 - 50           yellow
   * poor 51 - 100          orange
   * very poor 101 - 300    red
   * extremely poor > 300   burgundy
   */
  let colour = "bg-neutral-950";
  if (aqi < 25) {
    colour = "bg-green-500";
  } else if (aqi >= 25 && aqi < 50) {
    colour = "bg-yellow-300";
  } else if (aqi >= 50 && aqi < 100) {
    colour = "bg-orange-500";
  } else if (aqi >= 100 && aqi < 300) {
    colour = "bg-red-500";
  } else if (aqi >= 300) {
    colour = "bg-red-950";
  }

  const updatedStyle = displayStyles.concat(" ", colour)
  return {aqi, colour, updatedStyle};
}