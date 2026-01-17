// Large demo aircraft database (approximate values, not for real-world use)
const aircraftData = [
  // Existing examples
  { name: "Airbus A320", code: "A320", cruiseSpeedKts: 450, rangeNm: 3300 },
  { name: "Boeing 737-800", code: "B737-800", cruiseSpeedKts: 455, rangeNm: 2935 },
  { name: "Cessna 172 Skyhawk", code: "C172", cruiseSpeedKts: 120, rangeNm: 640 },
  { name: "Boeing 787-9", code: "B787-9", cruiseSpeedKts: 488, rangeNm: 7600 },

  // Airbus A350
  { name: "Airbus A350-900", code: "A350-900", cruiseSpeedKts: 488, rangeNm: 9,700 },
  { name: "Airbus A350-1000", code: "A350-1000", cruiseSpeedKts: 488, rangeNm: 9,100 },

//CONCORDE!!!

  { name: "BAC Concorde", code: "SSC", cruiseSpeedKts: 1177, rangeNm: 4000 },

  //sr-71
    { name: "Lockheed SR-71 (Blackbird)", code: "SR-71", cruiseSpeedKts: 1905, rangeNm: 2900 },
  
  // Boeing 737 Classic / NG / MAX
  { name: "Boeing 737-100", code: "B737-100", cruiseSpeedKts: 430, rangeNm: 1500 },
  { name: "Boeing 737-200", code: "B737-200", cruiseSpeedKts: 430, rangeNm: 2000 },
  { name: "Boeing 737-300", code: "B737-300", cruiseSpeedKts: 440, rangeNm: 2200 },
  { name: "Boeing 737-400", code: "B737-400", cruiseSpeedKts: 440, rangeNm: 2300 },
  { name: "Boeing 737-500", code: "B737-500", cruiseSpeedKts: 440, rangeNm: 2400 },
  { name: "Boeing 737-600", code: "B737-600", cruiseSpeedKts: 450, rangeNm: 2500 },
  { name: "Boeing 737-700", code: "B737-700", cruiseSpeedKts: 450, rangeNm: 3200 },
  { name: "Boeing 737-800", code: "B737-800", cruiseSpeedKts: 455, rangeNm: 2935 },
  { name: "Boeing 737-900", code: "B737-900", cruiseSpeedKts: 455, rangeNm: 3000 },
  { name: "Boeing 737-7 MAX", code: "B737-7MAX", cruiseSpeedKts: 460, rangeNm: 3800 },
  { name: "Boeing 737-8 MAX", code: "B737-8MAX", cruiseSpeedKts: 460, rangeNm: 3550 },
  { name: "Boeing 737-9 MAX", code: "B737-9MAX", cruiseSpeedKts: 460, rangeNm: 3350 },
  { name: "Boeing 737-10 MAX", code: "B737-10MAX", cruiseSpeedKts: 460, rangeNm: 3300 },

  // Boeing 747 family
  { name: "Boeing 747-100", code: "B747-100", cruiseSpeedKts: 490, rangeNm: 4800 },
  { name: "Boeing 747-200", code: "B747-200", cruiseSpeedKts: 490, rangeNm: 5200 },
  { name: "Boeing 747-300", code: "B747-300", cruiseSpeedKts: 490, rangeNm: 5300 },
  { name: "Boeing 747-400", code: "B747-400", cruiseSpeedKts: 493, rangeNm: 7250 },
  { name: "Boeing 747-400ER", code: "B747-400ER", cruiseSpeedKts: 493, rangeNm: 7670 },
  { name: "Boeing 747-8I", code: "B747-8I", cruiseSpeedKts: 493, rangeNm: 8000 },
  { name: "Boeing 747-8F", code: "B747-8F", cruiseSpeedKts: 493, rangeNm: 4400 },

  // Boeing 757
  { name: "Boeing 757-200", code: "B757-200", cruiseSpeedKts: 450, rangeNm: 3900 },
  { name: "Boeing 757-300", code: "B757-300", cruiseSpeedKts: 450, rangeNm: 3600 },

  // Boeing 767
  { name: "Boeing 767-200", code: "B767-200", cruiseSpeedKts: 450, rangeNm: 3800 },
  { name: "Boeing 767-200ER", code: "B767-200ER", cruiseSpeedKts: 450, rangeNm: 6500 },
  { name: "Boeing 767-300", code: "B767-300", cruiseSpeedKts: 450, rangeNm: 3600 },
  { name: "Boeing 767-300ER", code: "B767-300ER", cruiseSpeedKts: 450, rangeNm: 6000 },
  { name: "Boeing 767-400ER", code: "B767-400ER", cruiseSpeedKts: 455, rangeNm: 5600 },

  // Boeing 777
  { name: "Boeing 777-200", code: "B777-200", cruiseSpeedKts: 488, rangeNm: 5200 },
  { name: "Boeing 777-200ER", code: "B777-200ER", cruiseSpeedKts: 488, rangeNm: 7000 },
  { name: "Boeing 777-200LR", code: "B777-200LR", cruiseSpeedKts: 488, rangeNm: 8600 },
  { name: "Boeing 777-300", code: "B777-300", cruiseSpeedKts: 488, rangeNm: 6000 },
  { name: "Boeing 777-300ER", code: "B777-300ER", cruiseSpeedKts: 488, rangeNm: 7350 },
  { name: "Boeing 777F", code: "B777F", cruiseSpeedKts: 488, rangeNm: 4900 },
  { name: "Boeing 777-8X", code: "B777-8X", cruiseSpeedKts: 488, rangeNm: 8700 },
  { name: "Boeing 777-9X", code: "B777-9X", cruiseSpeedKts: 488, rangeNm: 7600 },

  // Boeing 787
  { name: "Boeing 787-8", code: "B787-8", cruiseSpeedKts: 488, rangeNm: 7300 },
  { name: "Boeing 787-9", code: "B787-9", cruiseSpeedKts: 488, rangeNm: 7600 },
  { name: "Boeing 787-10", code: "B787-10", cruiseSpeedKts: 488, rangeNm: 6500 },

  // Airbus A300 / A310
  { name: "Airbus A300B2", code: "A300B2", cruiseSpeedKts: 450, rangeNm: 2000 },
  { name: "Airbus A300B4", code: "A300B4", cruiseSpeedKts: 450, rangeNm: 2600 },
  { name: "Airbus A310-200", code: "A310-200", cruiseSpeedKts: 450, rangeNm: 3500 },
  { name: "Airbus A310-300", code: "A310-300", cruiseSpeedKts: 450, rangeNm: 5200 },

  // Airbus A318–A321
  { name: "Airbus A318-100", code: "A318-100", cruiseSpeedKts: 450, rangeNm: 3100 },
  { name: "Airbus A319-100", code: "A319-100", cruiseSpeedKts: 450, rangeNm: 3750 },
  { name: "Airbus A319neo", code: "A319neo", cruiseSpeedKts: 450, rangeNm: 3900 },
  { name: "Airbus A320-100", code: "A320-100", cruiseSpeedKts: 450, rangeNm: 2600 },
  { name: "Airbus A320-200", code: "A320-200", cruiseSpeedKts: 450, rangeNm: 3300 },
  { name: "Airbus A320neo", code: "A320neo", cruiseSpeedKts: 450, rangeNm: 3500 },
  { name: "Airbus A321-100", code: "A321-100", cruiseSpeedKts: 450, rangeNm: 2600 },
  { name: "Airbus A321-200", code: "A321-200", cruiseSpeedKts: 450, rangeNm: 3200 },
  { name: "Airbus A321neo", code: "A321neo", cruiseSpeedKts: 450, rangeNm: 4000 },
  { name: "Airbus A321LR", code: "A321LR", cruiseSpeedKts: 450, rangeNm: 4000 },
  { name: "Airbus A321XLR", code: "A321XLR", cruiseSpeedKts: 450, rangeNm: 4700 },

  // Airbus A330
  { name: "Airbus A330-200", code: "A330-200", cruiseSpeedKts: 470, rangeNm: 7200 },
  { name: "Airbus A330-200F", code: "A330-200F", cruiseSpeedKts: 470, rangeNm: 4000 },
  { name: "Airbus A330-300", code: "A330-300", cruiseSpeedKts: 470, rangeNm: 6350 },
  { name: "Airbus A330-800neo", code: "A330-800neo", cruiseSpeedKts: 470, rangeNm: 8100 },
  { name: "Airbus A330-900neo", code: "A330-900neo", cruiseSpeedKts: 470, rangeNm: 7200 },

  // Airbus A340
  { name: "Airbus A340-200", code: "A340-200", cruiseSpeedKts: 470, rangeNm: 7200 },
  { name: "Airbus A340-300", code: "A340-300", cruiseSpeedKts: 470, rangeNm: 7300 },
  { name: "Airbus A340-500", code: "A340-500", cruiseSpeedKts: 470, rangeNm: 8400 },
  { name: "Airbus A340-600", code: "A340-600", cruiseSpeedKts: 470, rangeNm: 7700 },

  // Airbus A380
  { name: "Airbus A380-800", code: "A380-800", cruiseSpeedKts: 490, rangeNm: 8200 },

  // Embraer ERJ / E-Jets
  { name: "Embraer ERJ-135", code: "ERJ-135", cruiseSpeedKts: 430, rangeNm: 1750 },
  { name: "Embraer ERJ-140", code: "ERJ-140", cruiseSpeedKts: 430, rangeNm: 1750 },
  { name: "Embraer ERJ-145", code: "ERJ-145", cruiseSpeedKts: 430, rangeNm: 1550 },
  { name: "Embraer E170", code: "E170", cruiseSpeedKts: 440, rangeNm: 2100 },
  { name: "Embraer E175", code: "E175", cruiseSpeedKts: 440, rangeNm: 2200 },
  { name: "Embraer E190", code: "E190", cruiseSpeedKts: 450, rangeNm: 2400 },
  { name: "Embraer E195", code: "E195", cruiseSpeedKts: 450, rangeNm: 2300 },
  { name: "Embraer E190-E2", code: "E190-E2", cruiseSpeedKts: 450, rangeNm: 2850 },
  { name: "Embraer E195-E2", code: "E195-E2", cruiseSpeedKts: 450, rangeNm: 2600 },

  // Bombardier CRJ
  { name: "Bombardier CRJ100", code: "CRJ100", cruiseSpeedKts: 430, rangeNm: 1350 },
  { name: "Bombardier CRJ200", code: "CRJ200", cruiseSpeedKts: 430, rangeNm: 1350 },
  { name: "Bombardier CRJ440", code: "CRJ440", cruiseSpeedKts: 430, rangeNm: 1350 },
  { name: "Bombardier CRJ700", code: "CRJ700", cruiseSpeedKts: 450, rangeNm: 1700 },
  { name: "Bombardier CRJ705", code: "CRJ705", cruiseSpeedKts: 450, rangeNm: 1700 },
  { name: "Bombardier CRJ900", code: "CRJ900", cruiseSpeedKts: 450, rangeNm: 1900 },
  { name: "Bombardier CRJ1000", code: "CRJ1000", cruiseSpeedKts: 450, rangeNm: 1650 },

  // Bombardier Q-Series
  { name: "Bombardier Q100", code: "Q100", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Bombardier Q200", code: "Q200", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Bombardier Q300", code: "Q300", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Bombardier Q400", code: "Q400", cruiseSpeedKts: 360, rangeNm: 1100 },

  // ATR
  { name: "ATR 42-300", code: "ATR42-300", cruiseSpeedKts: 250, rangeNm: 800 },
  { name: "ATR 42-500", code: "ATR42-500", cruiseSpeedKts: 275, rangeNm: 800 },
  { name: "ATR 42-600", code: "ATR42-600", cruiseSpeedKts: 275, rangeNm: 800 },
  { name: "ATR 72-200", code: "ATR72-200", cruiseSpeedKts: 275, rangeNm: 900 },
  { name: "ATR 72-500", code: "ATR72-500", cruiseSpeedKts: 275, rangeNm: 900 },
  { name: "ATR 72-600", code: "ATR72-600", cruiseSpeedKts: 275, rangeNm: 900 },

  // McDonnell Douglas MD-80/90/11
  { name: "McDonnell Douglas MD-81", code: "MD-81", cruiseSpeedKts: 450, rangeNm: 1500 },
  { name: "McDonnell Douglas MD-82", code: "MD-82", cruiseSpeedKts: 450, rangeNm: 1800 },
  { name: "McDonnell Douglas MD-83", code: "MD-83", cruiseSpeedKts: 450, rangeNm: 2000 },
  { name: "McDonnell Douglas MD-87", code: "MD-87", cruiseSpeedKts: 450, rangeNm: 2000 },
  { name: "McDonnell Douglas MD-88", code: "MD-88", cruiseSpeedKts: 450, rangeNm: 2000 },
  { name: "McDonnell Douglas MD-90-30", code: "MD-90-30", cruiseSpeedKts: 450, rangeNm: 2100 },
  { name: "McDonnell Douglas MD-11", code: "MD-11", cruiseSpeedKts: 470, rangeNm: 7000 },
  { name: "McDonnell Douglas MD-11F", code: "MD-11F", cruiseSpeedKts: 470, rangeNm: 3800 },

  // Lockheed L-1011 / C-130
  { name: "Lockheed L-1011-1", code: "L-1011-1", cruiseSpeedKts: 470, rangeNm: 4000 },
  { name: "Lockheed L-1011-500", code: "L-1011-500", cruiseSpeedKts: 470, rangeNm: 5200 },
  { name: "Lockheed C-130H", code: "C-130H", cruiseSpeedKts: 320, rangeNm: 2100 },
  { name: "Lockheed C-130J", code: "C-130J", cruiseSpeedKts: 340, rangeNm: 2300 },

  // Tupolev
  { name: "Tupolev Tu-134A", code: "Tu-134A", cruiseSpeedKts: 430, rangeNm: 1200 },
  { name: "Tupolev Tu-154B", code: "Tu-154B", cruiseSpeedKts: 450, rangeNm: 1300 },
  { name: "Tupolev Tu-154M", code: "Tu-154M", cruiseSpeedKts: 450, rangeNm: 1600 },
  { name: "Tupolev Tu-204-100", code: "Tu-204-100", cruiseSpeedKts: 450, rangeNm: 2400 },
  { name: "Tupolev Tu-214", code: "Tu-214", cruiseSpeedKts: 450, rangeNm: 3200 },

  // Ilyushin
  { name: "Ilyushin Il-62M", code: "Il-62M", cruiseSpeedKts: 460, rangeNm: 5200 },
  { name: "Ilyushin Il-76TD", code: "Il-76TD", cruiseSpeedKts: 440, rangeNm: 2300 },
  { name: "Ilyushin Il-96-300", code: "Il-96-300", cruiseSpeedKts: 460, rangeNm: 5200 },

  // Sukhoi / COMAC / Mitsubishi
  { name: "Sukhoi SSJ100-95B", code: "SSJ100-95B", cruiseSpeedKts: 450, rangeNm: 1600 },
  { name: "COMAC ARJ21-700", code: "ARJ21-700", cruiseSpeedKts: 430, rangeNm: 1200 },
  { name: "COMAC ARJ21-900", code: "ARJ21-900", cruiseSpeedKts: 430, rangeNm: 1200 },
  { name: "COMAC C919", code: "C919", cruiseSpeedKts: 450, rangeNm: 2500 },
  { name: "COMAC C929", code: "C929", cruiseSpeedKts: 470, rangeNm: 6500 },
  { name: "Mitsubishi SpaceJet M90", code: "M90", cruiseSpeedKts: 440, rangeNm: 1800 },

  // DHC-6
  { name: "DHC-6 Twin Otter Series 400", code: "DHC-6-400", cruiseSpeedKts: 180, rangeNm: 775 },

  // Cessna singles / twins / Citations (sampled)
  { name: "Cessna 152", code: "C152", cruiseSpeedKts: 100, rangeNm: 415 },
  { name: "Cessna 172 Skyhawk", code: "C172", cruiseSpeedKts: 120, rangeNm: 640 },
  { name: "Cessna 177 Cardinal", code: "C177", cruiseSpeedKts: 130, rangeNm: 600 },
  { name: "Cessna 182 Skylane", code: "C182", cruiseSpeedKts: 140, rangeNm: 930 },
  { name: "Cessna 206 Stationair", code: "C206", cruiseSpeedKts: 145, rangeNm: 720 },
  { name: "Cessna 208 Caravan", code: "C208", cruiseSpeedKts: 175, rangeNm: 900 },
  { name: "Cessna 208B Grand Caravan EX", code: "C208B", cruiseSpeedKts: 185, rangeNm: 900 },
  { name: "Cessna 310R", code: "C310R", cruiseSpeedKts: 190, rangeNm: 1000 },
  { name: "Cessna 340A", code: "C340A", cruiseSpeedKts: 210, rangeNm: 1200 },
  { name: "Cessna 402C", code: "C402C", cruiseSpeedKts: 190, rangeNm: 900 },
  { name: "Cessna 414A Chancellor", code: "C414A", cruiseSpeedKts: 220, rangeNm: 1100 },
  { name: "Cessna 421C Golden Eagle", code: "C421C", cruiseSpeedKts: 230, rangeNm: 1100 },

  { name: "Cessna Citation I", code: "Citation I", cruiseSpeedKts: 350, rangeNm: 1100 },
  { name: "Cessna Citation II", code: "Citation II", cruiseSpeedKts: 380, rangeNm: 1300 },
  { name: "Cessna Citation V", code: "Citation V", cruiseSpeedKts: 400, rangeNm: 1800 },
  { name: "Cessna Citation Ultra", code: "Citation Ultra", cruiseSpeedKts: 400, rangeNm: 1900 },
  { name: "Cessna Citation Excel", code: "Citation Excel", cruiseSpeedKts: 430, rangeNm: 1800 },
  { name: "Cessna Citation XLS+", code: "Citation XLS+", cruiseSpeedKts: 430, rangeNm: 2100 },
  { name: "Cessna Citation Latitude", code: "Citation Latitude", cruiseSpeedKts: 440, rangeNm: 2700 },
  { name: "Cessna Citation Longitude", code: "Citation Longitude", cruiseSpeedKts: 470, rangeNm: 3500 },
  { name: "Cessna Citation CJ1", code: "Citation CJ1", cruiseSpeedKts: 380, rangeNm: 1300 },
  { name: "Cessna Citation CJ2", code: "Citation CJ2", cruiseSpeedKts: 400, rangeNm: 1500 },
  { name: "Cessna Citation CJ3+", code: "Citation CJ3+", cruiseSpeedKts: 410, rangeNm: 2000 },
  { name: "Cessna Citation CJ4", code: "Citation CJ4", cruiseSpeedKts: 420, rangeNm: 2100 },

  // Cirrus
  { name: "Cirrus SR20", code: "SR20", cruiseSpeedKts: 150, rangeNm: 600 },
  { name: "Cirrus SR22", code: "SR22", cruiseSpeedKts: 180, rangeNm: 1000 },
  { name: "Cirrus SR22T", code: "SR22T", cruiseSpeedKts: 180, rangeNm: 1000 },
  { name: "Cirrus Vision Jet SF50", code: "SF50", cruiseSpeedKts: 300, rangeNm: 1200 },

  // Beechcraft
  { name: "Beechcraft Bonanza G36", code: "G36", cruiseSpeedKts: 175, rangeNm: 920 },
  { name: "Beechcraft Baron G58", code: "G58", cruiseSpeedKts: 200, rangeNm: 1000 },
  { name: "Beechcraft King Air C90GTx", code: "C90GTx", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Beechcraft King Air 250", code: "KingAir250", cruiseSpeedKts: 300, rangeNm: 1700 },
  { name: "Beechcraft King Air 350i", code: "KingAir350i", cruiseSpeedKts: 310, rangeNm: 1800 },
  { name: "Beechcraft King Air 360", code: "KingAir360", cruiseSpeedKts: 310, rangeNm: 1800 },

  // Piper
  { name: "Piper PA-28 Cherokee", code: "PA-28", cruiseSpeedKts: 120, rangeNm: 500 },
  { name: "Piper PA-28 Archer", code: "PA-28 Archer", cruiseSpeedKts: 120, rangeNm: 500 },
  { name: "Piper PA-32 Saratoga", code: "PA-32", cruiseSpeedKts: 150, rangeNm: 700 },
  { name: "Piper PA-34 Seneca V", code: "PA-34", cruiseSpeedKts: 190, rangeNm: 900 },
  { name: "Piper PA-44 Seminole", code: "PA-44", cruiseSpeedKts: 160, rangeNm: 700 },
  { name: "Piper PA-46 Malibu", code: "PA-46 Malibu", cruiseSpeedKts: 210, rangeNm: 1000 },
  { name: "Piper PA-46 Meridian", code: "PA-46 Meridian", cruiseSpeedKts: 260, rangeNm: 1000 },
  { name: "Piper M350", code: "M350", cruiseSpeedKts: 210, rangeNm: 1300 },
  { name: "Piper M500", code: "M500", cruiseSpeedKts: 260, rangeNm: 1000 },
  { name: "Piper M600 SLS", code: "M600", cruiseSpeedKts: 270, rangeNm: 1400 },

  // Gulfstream (sample)
  { name: "Gulfstream G150", code: "G150", cruiseSpeedKts: 470, rangeNm: 3000 },
  { name: "Gulfstream G200", code: "G200", cruiseSpeedKts: 470, rangeNm: 3400 },
  { name: "Gulfstream G280", code: "G280", cruiseSpeedKts: 480, rangeNm: 3600 },
  { name: "Gulfstream G300", code: "G300", cruiseSpeedKts: 480, rangeNm: 3600 },
  { name: "Gulfstream G450", code: "G450", cruiseSpeedKts: 480, rangeNm: 4350 },
  { name: "Gulfstream G500", code: "G500", cruiseSpeedKts: 488, rangeNm: 5200 },
  { name: "Gulfstream G550", code: "G550", cruiseSpeedKts: 488, rangeNm: 6750 },
  { name: "Gulfstream G600", code: "G600", cruiseSpeedKts: 488, rangeNm: 6200 },
  { name: "Gulfstream G650", code: "G650", cruiseSpeedKts: 488, rangeNm: 7000 },
  { name: "Gulfstream G650ER", code: "G650ER", cruiseSpeedKts: 488, rangeNm: 7500 },
  { name: "Gulfstream G700", code: "G700", cruiseSpeedKts: 488, rangeNm: 7500 },
  { name: "Gulfstream G800", code: "G800", cruiseSpeedKts: 488, rangeNm: 8000 },

  // Dassault Falcon (sample)
  { name: "Dassault Falcon 10", code: "Falcon 10", cruiseSpeedKts: 470, rangeNm: 1500 },
  { name: "Dassault Falcon 20", code: "Falcon 20", cruiseSpeedKts: 470, rangeNm: 2000 },
  { name: "Dassault Falcon 50EX", code: "Falcon 50EX", cruiseSpeedKts: 470, rangeNm: 3400 },
  { name: "Dassault Falcon 2000", code: "Falcon 2000", cruiseSpeedKts: 470, rangeNm: 3200 },
  { name: "Dassault Falcon 2000LXS", code: "Falcon 2000LXS", cruiseSpeedKts: 470, rangeNm: 4000 },
  { name: "Dassault Falcon 900LX", code: "Falcon 900LX", cruiseSpeedKts: 470, rangeNm: 4750 },
  { name: "Dassault Falcon 7X", code: "Falcon 7X", cruiseSpeedKts: 488, rangeNm: 5950 },
  { name: "Dassault Falcon 8X", code: "Falcon 8X", cruiseSpeedKts: 488, rangeNm: 6450 },
  { name: "Dassault Falcon 10X", code: "Falcon 10X", cruiseSpeedKts: 488, rangeNm: 7500 },

  // Learjet (sample)
  { name: "Learjet 24", code: "LJ24", cruiseSpeedKts: 430, rangeNm: 1200 },
  { name: "Learjet 31A", code: "LJ31A", cruiseSpeedKts: 450, rangeNm: 1400 },
  { name: "Learjet 35A", code: "LJ35A", cruiseSpeedKts: 450, rangeNm: 2000 },
  { name: "Learjet 45", code: "LJ45", cruiseSpeedKts: 450, rangeNm: 1900 },
  { name: "Learjet 55", code: "LJ55", cruiseSpeedKts: 450, rangeNm: 2000 },
  { name: "Learjet 60XR", code: "LJ60XR", cruiseSpeedKts: 460, rangeNm: 2400 },
  { name: "Learjet 70", code: "LJ70", cruiseSpeedKts: 460, rangeNm: 2000 },
  { name: "Learjet 75", code: "LJ75", cruiseSpeedKts: 460, rangeNm: 2000 },

  // Pilatus
  { name: "Pilatus PC-6 Porter", code: "PC-6", cruiseSpeedKts: 125, rangeNm: 575 },
  { name: "Pilatus PC-12 NGX", code: "PC-12NGX", cruiseSpeedKts: 280, rangeNm: 1800 },
  { name: "Pilatus PC-21", code: "PC-21", cruiseSpeedKts: 320, rangeNm: 1000 },
  { name: "Pilatus PC-24", code: "PC-24", cruiseSpeedKts: 440, rangeNm: 2000 },

  // Saab
  { name: "Saab 340A", code: "Saab340A", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Saab 340B", code: "Saab340B", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Saab 2000", code: "Saab2000", cruiseSpeedKts: 360, rangeNm: 1300 },

  // Dornier
  { name: "Dornier Do 228", code: "Do228", cruiseSpeedKts: 210, rangeNm: 700 },
  { name: "Dornier 328-100", code: "D328-100", cruiseSpeedKts: 270, rangeNm: 1000 },
  { name: "Dornier 328JET", code: "D328JET", cruiseSpeedKts: 400, rangeNm: 1000 },

  // CASA
  { name: "CASA C-212 Aviocar", code: "C212", cruiseSpeedKts: 180, rangeNm: 450 },
  { name: "CASA CN-235", code: "CN-235", cruiseSpeedKts: 240, rangeNm: 2300 },
  { name: "CASA C-295", code: "C-295", cruiseSpeedKts: 260, rangeNm: 2300 },

  // Antonov (sample)
  { name: "Antonov An-24", code: "An-24", cruiseSpeedKts: 230, rangeNm: 800 },
  { name: "Antonov An-26", code: "An-26", cruiseSpeedKts: 230, rangeNm: 1100 },
  { name: "Antonov An-28", code: "An-28", cruiseSpeedKts: 190, rangeNm: 800 },
  { name: "Antonov An-72", code: "An-72", cruiseSpeedKts: 400, rangeNm: 2000 },
  { name: "Antonov An-124 Ruslan", code: "An-124", cruiseSpeedKts: 450, rangeNm: 2700 },
  { name: "Antonov An-148", code: "An-148", cruiseSpeedKts: 430, rangeNm: 2100 },
  { name: "Antonov An-158", code: "An-158", cruiseSpeedKts: 430, rangeNm: 2100 },
  {name: "JW7 Blaster Neo-5", code"JW71", cruiseSpeedKts: 999, rangeNm: 8100},
  // Yakovlev
  { name: "Yakovlev Yak-40", code: "Yak-40", cruiseSpeedKts: 350, rangeNm: 700 },
  { name: "Yakovlev Yak-42D", code: "Yak-42D", cruiseSpeedKts: 430, rangeNm: 1300 },

  // A few military / special (very rough demo values)
  { name: "Northrop Grumman E-2C Hawkeye", code: "E-2C", cruiseSpeedKts: 270, rangeNm: 1500 },
  { name: "Northrop Grumman E-2D Advanced Hawkeye", code: "E-2D", cruiseSpeedKts: 270, rangeNm: 1500 },
  { name: "Northrop Grumman RQ-4 Global Hawk", code: "RQ-4", cruiseSpeedKts: 310, rangeNm: 10000 },
  { name: "Northrop Grumman MQ-4C Triton", code: "MQ-4C", cruiseSpeedKts: 310, rangeNm: 8200 },
  { name: "Northrop Grumman B-2 Spirit", code: "B-2", cruiseSpeedKts: 480, rangeNm: 6000 },
  { name: "Northrop Grumman B-21 Raider", code: "B-21", cruiseSpeedKts: 480, rangeNm: 6000 },
  { name: "Northrop Grumman X-47B", code: "X-47B", cruiseSpeedKts: 400, rangeNm: 2000 },

  { name: "Boeing P-8A Poseidon", code: "P-8A", cruiseSpeedKts: 440, rangeNm: 1200 },
  { name: "Boeing KC-46A Pegasus", code: "KC-46A", cruiseSpeedKts: 450, rangeNm: 6000 },
  { name: "Boeing C-17 Globemaster III", code: "C-17", cruiseSpeedKts: 450, rangeNm: 2400 },
  { name: "Boeing E-3 Sentry", code: "E-3", cruiseSpeedKts: 430, rangeNm: 4000 },
  { name: "Boeing E-7 Wedgetail", code: "E-7", cruiseSpeedKts: 450, rangeNm: 3500 },

  { name: "Airbus A400M Atlas", code: "A400M", cruiseSpeedKts: 400, rangeNm: 2000 },
  { name: "Airbus C295 MPA", code: "C295MPA", cruiseSpeedKts: 260, rangeNm: 2300 },
  { name: "Airbus A330 MRTT", code: "A330MRTT", cruiseSpeedKts: 470, rangeNm: 8000 },

  { name: "Lockheed Martin F-16C", code: "F-16C", cruiseSpeedKts: 480, rangeNm: 1500 },
  { name: "Lockheed Martin F-22A Raptor", code: "F-22A", cruiseSpeedKts: 530, rangeNm: 1600 },
  { name: "Lockheed Martin F-35A Lightning II", code: "F-35A", cruiseSpeedKts: 480, rangeNm: 1200 },

  { name: "Kawasaki C-2", code: "C-2", cruiseSpeedKts: 450, rangeNm: 4800 },
  { name: "Kawasaki P-1", code: "P-1", cruiseSpeedKts: 450, rangeNm: 4500 },

  { name: "Embraer KC-390 Millennium", code: "KC-390", cruiseSpeedKts: 450, rangeNm: 2400 },
  { name: "Hildern D7-300M Air Otter", code: "D7-3", cruiseSpeedKts: 600, rangeNm: 6000 },
  { name: "Hildern D7-200M Air Otter", code: "D7-2", cruiseSpeedKts: 610, rangeNm: 8400 },
  { name: "Hildern D7-100M Air Otter", code: "D7-1", cruiseSpeedKts: 522, rangeNm: 5000 },
  { name: "Air Otter Neo", code: "VDL715", cruiseSpeedKts: 593, rangeNm: 8500 }

];

const searchInput = document.getElementById("aircraftSearch");
const suggestionsDiv = document.getElementById("aircraftSuggestions");
const aircraftInfoDiv = document.getElementById("aircraftInfo");
const unitButtons = document.querySelectorAll(".unit-btn");
const unitLabel = document.getElementById("unitLabel");
const distanceInput = document.getElementById("distanceInput");
const calculateBtn = document.getElementById("calculateBtn");
const distanceError = document.getElementById("distanceError");
const resultsSection = document.getElementById("resultsSection");
const resultsContent = document.getElementById("resultsContent");

let selectedAircraft = null;
let currentUnit = "km";

// Search suggestions
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  suggestionsDiv.innerHTML = "";

  if (!query) return;

  const matches = aircraftData.filter(a =>
    a.name.toLowerCase().includes(query) ||
    a.code.toLowerCase().includes(query)
  );

  matches.forEach(a => {
    const item = document.createElement("div");
    item.className = "suggestion-item";
    item.textContent = `${a.name} (${a.code})`;
    item.addEventListener("click", () => {
      selectAircraft(a);
      suggestionsDiv.innerHTML = "";
      searchInput.value = `${a.name} (${a.code})`;
    });
    suggestionsDiv.appendChild(item);
  });
});

function selectAircraft(aircraft) {
  selectedAircraft = aircraft;

  const cruiseKmH = aircraft.cruiseSpeedKts * 1.852;
  const rangeKm = aircraft.rangeNm * 1.852;

  aircraftInfoDiv.innerHTML = `
    <p><strong>Selected:</strong> ${aircraft.name} (${aircraft.code})</p>
    <p><strong>Cruise speed:</strong> ~${aircraft.cruiseSpeedKts} kt (~${cruiseKmH.toFixed(0)} km/h)</p>
    <p><strong>Max range:</strong> ~${aircraft.rangeNm} NM (~${rangeKm.toFixed(0)} km)</p>
  `;
}

// Unit selection
unitButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    unitButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentUnit = btn.dataset.unit;
    unitLabel.textContent = currentUnit;
  });
});

// Convert to nautical miles
function toNauticalMiles(value, unit) {
  const v = Number(value);
  if (Number.isNaN(v)) return 0;

  switch (unit) {
    case "km": return v / 1.852;
    case "mi": return v / 1.15078;
    case "m": return v / 1852;
    default: return v;
  }
}

// Calculate
calculateBtn.addEventListener("click", () => {
  distanceError.textContent = "";

  if (!selectedAircraft) {
    distanceError.textContent = "Select an aircraft first.";
    return;
  }

  const distanceVal = distanceInput.value.trim();
  if (!distanceVal || Number(distanceVal) <= 0) {
    distanceError.textContent = "Enter a valid distance greater than zero.";
    return;
  }

  const distanceNm = toNauticalMiles(distanceVal, currentUnit);
  const canReach = distanceNm <= selectedAircraft.rangeNm;

  // Flight time model
  const cruiseKts = selectedAircraft.cruiseSpeedKts;
  const climbTimeHr = 0.25;
  const descentTimeHr = 0.25;
  const climbDistanceNm = cruiseKts * 0.7 * climbTimeHr;
  const descentDistanceNm = cruiseKts * 0.6 * descentTimeHr;
  const minProfileDistanceNm = climbDistanceNm + descentDistanceNm;

  let totalTimeHr;

  if (distanceNm <= minProfileDistanceNm) {
    const avgShortSpeed = cruiseKts * 0.65;
    totalTimeHr = distanceNm / avgShortSpeed;
  } else {
    const cruiseSegmentNm = distanceNm - minProfileDistanceNm;
    const cruiseTimeHr = cruiseSegmentNm / cruiseKts;
    totalTimeHr = climbTimeHr + cruiseTimeHr + descentTimeHr;
  }

  const hours = Math.floor(totalTimeHr);
  const minutes = Math.round((totalTimeHr - hours) * 60);

  // Endurance calculation
  const enduranceHours = selectedAircraft.rangeNm / selectedAircraft.cruiseSpeedKts;
  const enduranceH = Math.floor(enduranceHours);
  const enduranceM = Math.round((enduranceHours - enduranceH) * 60);

  const statusClass = canReach ? "status-yes" : "status-no";
  const statusText = canReach ? "YES — Within Range" : "NO — Out of Range";

  resultsContent.innerHTML = `
    <div class="status-bar ${statusClass}">${statusText}</div>

    <p class="flight-time">Estimated flight time: ${hours} h ${minutes} min</p>

    <div class="endurance-box">
      This aircraft can roughly fly for: ${enduranceH} h ${enduranceM} min
    </div>

    <p><strong>Aircraft:</strong> ${selectedAircraft.name} (${selectedAircraft.code})</p>
    <p><strong>Requested distance:</strong> ${distanceVal} ${currentUnit} (~${distanceNm.toFixed(0)} NM)</p>

    <p style="font-size:14px;color:#505050;margin-top:12px;">
      Model: 15 min climb at ~70% cruise, cruise at 100%, 15 min descent at ~60%.
    </p>
  `;

  smoothScrollTo(resultsSection, 780);
});

// Quadratic ease-in scroll
function smoothScrollTo(targetElement, durationMs) {
  const startY = window.scrollY || window.pageYOffset;
  const rect = targetElement.getBoundingClientRect();
  const targetY = rect.top + startY - 16;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInQuad(t) {
    return t * t;
  }

  function step(currentTime) {
    const elapsed = currentTime - startTime;
    const t = Math.min(elapsed / durationMs, 1);
    const eased = easeInQuad(t);
    window.scrollTo(0, startY + distance * eased);

    if (elapsed < durationMs) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}
