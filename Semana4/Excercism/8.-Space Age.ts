const orbitalPeriod: { [key: string]: number } = {
    "earth": 1.0,
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132,
  };
  
  //Earth
  const EARTH_YEAR_IN_SECONDS = 31557600; // 365.25 days/year * 24 hours/day * 60 min/hour * 60 sec/hour
  
  export const age = (planet: string, seconds: number): number => Math.round(seconds / EARTH_YEAR_IN_SECONDS / orbitalPeriod[planet] * 100) / 100;